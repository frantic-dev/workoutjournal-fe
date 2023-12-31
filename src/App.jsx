import { useEffect } from 'react'
import { useState } from 'react'
import youtubeThumbnail from 'youtube-thumbnail'
import Cards from './components/Cards'
import Form from './components/Form'
import workoutService from './services/workouts'
import './styles/app.css'
import Navbar from './components/Navbar'

function App() {
	const [workouts, setWorkouts] = useState([])
	const [workout, setWorkout] = useState({
		url: '',
	})
	const [showAllWorkouts, setShowAllWorkouts] = useState(true)
	const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		workoutService.getAll().then((workouts) => setWorkouts(workouts))
	}, [])

	useEffect(() => {
		if (workout.url !== '') {
			const thumbnail = youtubeThumbnail(workout.url).high.url
			workoutService.getTitle(workout.url).then((title) => {
				setWorkout((workout) => ({
					...workout,
					thumbnail: thumbnail,
					title: title,
				}))
			})
		}
	}, [workout.url])

	function changeRating(e, rated) {
		const checked = document.querySelectorAll(`#${rated} .checked`).length
		const halfChecked = document.querySelectorAll(
			`#${rated} .fa-star-half-o`
		).length
		const rating = checked - halfChecked / 2
		setWorkout({ ...workout, [rated]: rating })
	}

	function handleSubmit(e) {
		e.preventDefault()
		workoutService.create(workout)
		workoutService.getAll().then((workouts) => setWorkouts(workouts))
		const stars = document.querySelectorAll('.checked')
		stars.forEach((star) => {
			star.classList.remove('fa-star', 'fa-star-half-o', 'checked')
			star.classList.add('fa-star-o')
		})
		setWorkout({ url: '' })
	}

	function handleDelete(id) {
		workoutService.remove(id)
		const updatedWorkouts = workouts.filter((workout) => workout.id !== id)
		setWorkouts(updatedWorkouts)
	}

	function handleSearchChange(e) {
		setSearchValue(e.target.value)
		setShowAllWorkouts(false)
		if (e.target.value === '') setShowAllWorkouts(true)
	}

	return (
		<>
			<Navbar
				value={searchValue}
				handleSearchChange={handleSearchChange}
			/>
			<div id="body">
				<Form
					workout={workout}
					changeUrl={(e) =>
						setWorkout((workout) => ({ ...workout, url: e.target.value }))
					}
					changeRating={changeRating}
					handleSubmit={handleSubmit}
				/>
				<Cards
					workouts={workouts}
					handleDelete={handleDelete}
					showAll={showAllWorkouts}
					searchValue={searchValue}
				/>
			</div>
		</>
	)
}

export default App


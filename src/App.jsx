import { useEffect } from 'react'
import { useState } from 'react'
import youtubeThumbnail from 'youtube-thumbnail'
import Form from './components/Form'
import workoutService from './services/workouts'

function App() {
	const [workouts, setWorkouts] = useState([])
	const [workout, setWorkout] = useState({
		url: '',
	})

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
		workoutService.update(workout)
		workoutService.getAll().then((workouts) => setWorkouts(workouts))
		const stars = document.querySelectorAll('.checked')
		stars.forEach((star) => {
			star.classList.remove('fa-star', 'fa-star-half-o', 'checked')
			star.classList.add('fa-star-o')
		})
		setWorkout({ url: '' })
	}

	return (
		<div>
			<Form
				workout={workout}
				changeUrl={(e) =>
					setWorkout((workout) => ({ ...workout, url: e.target.value }))
				}
				changeRating={changeRating}
				handleSubmit={handleSubmit}
			/>
		</div>
	)
}

export default App


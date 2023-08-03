import { useEffect } from 'react'
import { useState } from 'react'
import youtubeThumbnail from 'youtube-thumbnail'
import Form from './components/Form'

function App() {
	const [workouts, setWorkouts] = useState([])
	const [workout, setWorkout] = useState({
		url: '',
		thumbnail: '',
	})

	useEffect(() => {
		if (workout.url !== '') {
			const thumbnail = youtubeThumbnail(workout.url).high.url
			setWorkout((workout) => ({
				...workout,
				thumbnail: thumbnail,
			}))
		}
	}, [workout.url])

	function changeRating(e, rated) {
		const checked = document.querySelectorAll(`#${rated} .checked`).length
		const halfChecked = document.querySelectorAll(
			`#${rated} .fa-star-half-o`
		).length
		const rating = checked - halfChecked / 2
		setWorkout({...workout, [rated]: rating})
	}
	return (
		<div>
			<Form
				workout={workout}
				changeUrl={(e) =>
					setWorkout((workout) => ({ ...workout, url: e.target.value }))
				}
				changeRating={changeRating}
			/>
		</div>
	)
}

export default App


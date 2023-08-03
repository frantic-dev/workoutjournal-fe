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
	if (workout.url !== '') {
	}
	useEffect(() => {
		const thumbnail = youtubeThumbnail(workout.url).high.url
		setWorkout((workout) => ({
			...workout,
			thumbnail: thumbnail,
		}))
	}, [workout.url])

	function changeWorkout(e) {
		setWorkout((workout) => ({ ...workout, [e.target.name]: e.target.value }))
	}
	return (
		<div>
			<Form
				workout={workout}
				changeWorkout={changeWorkout}
			/>
		</div>
	)
}

export default App


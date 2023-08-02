import { useState } from 'react'
import Form from './components/Form'

function App() {
	const [workouts, setWorkouts] = useState([])
	const [workout, setWorkout] = useState({
		url: '',
	})

  function changeWorkout(e) {
    setWorkout(workout => ({...workout, [e.target.name]: e.target.value }))
  }
	return (
		<div>
			<Form workout={workout} changeWorkout={changeWorkout} />
		</div>
	)
}

export default App


import Card from './Card'
import '../styles/cards.css'
import { useState } from 'react'
export default function Cards(props) {
	const [width, setWidth] = useState(window.innerWidth)
	const workoutsToDisplay = props.showAll
		? props.workouts
		: props.workouts.filter((workout) => {
				return workout.title.toLowerCase().match(props.searchValue)
		  })

	function changeWidth() {
		setWidth(window.innerWidth)
	}

	window.addEventListener('resize', changeWidth)

	let number = Math.floor(width / 280) - 1

	function displayDeleteBtn(id, display) {
		const deleteBtns = document.querySelectorAll('.fa-trash')
		deleteBtns[id].style.display = display
	}
	const cards = workoutsToDisplay.map((workout, id) => (
		<Card
			key={workout.id}
			workout={workout}
			handleDelete={props.handleDelete}
			showDeleteBtn={() => displayDeleteBtn(id, 'inline-block')}
			hideDeleteBtn={() => displayDeleteBtn(id, 'none')}
		/>
	))

	return (
		<div
			id="cards-container"
			style={{ gridTemplateColumns: `repeat(${number}, 1fr)` }}
		>
			{cards}
		</div>
	)
}

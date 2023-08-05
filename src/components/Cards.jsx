import Card from './Card'
import '../styles/cards.css'
import { useState } from 'react'
export default function Cards(props) {
	const [width, setWidth] = useState(window.innerWidth)

	function changeWidth() {
		setWidth(window.innerWidth)
	}

	window.addEventListener('resize', changeWidth)

	let number = Math.floor(width / 300)

	const cards = props.workouts.map((workout) => (
		<Card
			key={workout.id}
			workout={workout}
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

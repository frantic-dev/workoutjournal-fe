import Star from './Star'

function StarRating(props) {
	function handleRating(e) {
		const stars = document.querySelectorAll(` #${props.rated} > span`)
		const index = [...stars].indexOf(e.target)
		console.log(index, stars, e.target)
		for (let i = 0; i <= index; i++) {
			stars[i].classList.add('checked')
			console.log(stars[i])
		}
		for (let i = index + 1; i <= 4; i++) {
			stars[i].classList.remove('checked')
		}
	}
	return (
		<div
			id={props.rated}
			onClick={handleRating}
		>
			<Star />
			<Star />
			<Star />
			<Star />
			<Star />
		</div>
	)
}

export default StarRating

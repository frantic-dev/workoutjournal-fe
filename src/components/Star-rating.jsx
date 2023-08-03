import Star from './Star'

function StarRating(props) {
	function getStar(elementClass, star) {
		const stars = ['fa-star', 'fa-star-half-o', 'fa-star-o', 'checked']
		for (let i = 0; i < 4; i++) {
			if (stars[i] !== star) elementClass.remove(stars[i])
		}
		elementClass.add(star)
	}

	function handleRating(e) {
		const stars = document.querySelectorAll(` #${props.rated} > span`)
		const index = [...stars].indexOf(e.target)
		for (let i = 0; i <= index; i++) {
			const starClassList = stars[i].classList
			if (i === index && starClassList.contains('fa-star')) {
				getStar(starClassList, 'fa-star-half-o')
			} else {
				getStar(starClassList, 'fa-star')
			}
			starClassList.add('checked')
		}
		for (let i = index + 1; i <= 4; i++) {
			const starClassList = stars[i].classList
			getStar(starClassList, 'fa-star-o')
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
			<br />
		</div>
	)
}

export default StarRating

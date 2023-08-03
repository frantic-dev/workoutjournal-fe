import StarRating from './Star-rating'
import '../styles/form.css'

function Form(props) {
	return (
		<form>
			<label htmlFor="url">Youtube video url</label>
			<input
				type="text"
				id="url"
				name="url"
				value={props.workout.url}
				onChange={props.changeWorkout}
			/>
			<br />
			<img src={props.workout.thumbnail} />
			<br />
			<label htmlFor="intensity">intensity</label>
			<StarRating
				rated="intensity"
				name="intensity"
			/>
			<label htmlFor="variety">variety</label>
			<StarRating
				rated="variety"
				name="variety"
			/>
			<label htmlFor="fatigue">fatigue</label>
			<StarRating
				rated="fatigue"
				name="fatigue"
			/>
			<label htmlFor="enjoyment">enjoyment</label>
			<StarRating
				rated="enjoyment"
				name="enjoyment"
			/>
		</form>
	)
}

export default Form

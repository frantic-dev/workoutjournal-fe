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
		
			<StarRating rated="intensity" />
		</form>
	)
}

export default Form

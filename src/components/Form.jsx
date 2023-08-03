import StarRating from './Star-rating'
import '../styles/form.css'

function Form(props) {
	const questions = ['intensity', 'variety', 'fatigue', 'enjoyment'].map(
		(question) => (
			<label htmlFor={question} key={question}>
				{question}
				<StarRating
					rated={question}
					name={question}
					changeRating={props.changeRating}
				/>
			</label>
		)
	)
	return (
		<form>
			<label htmlFor="url">Youtube video url</label>
			<input
				type="text"
				id="url"
				name="url"
				value={props.workout.url}
				onChange={props.changeUrl}
			/>
			<br />
			<img src={props.workout.thumbnail} />
			<br />
			{questions}
		</form>
	)
}

export default Form

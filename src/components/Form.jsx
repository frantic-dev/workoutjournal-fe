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
		<form onSubmit={props.handleSubmit} autoComplete='off'>
			<label htmlFor="url">Youtube video url: </label>
			<input
				type="text"
				id="url"
				name="url"
				value={props.workout.url}
				onChange={props.changeUrl}
			/>
			<br />
			<hr />
			{props.workout.thumbnail && <img src={props.workout.thumbnail} />}
			{props.workout.title && <h3>{props.workout.title}</h3>}
			<br />
			{questions}
			<button type="submit">Submit</button>
		</form>
	)
}

export default Form

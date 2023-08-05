export default function Card(props) {
	return (
		<div key={props.workout.id}>
			<img src={props.workout.thumbnail} />
			<div className="workout-title">
				<b>{props.workout.title}</b>
			</div>
			<div className="workout-intensity">
				intensity: {props.workout.intensity} <i className="fa fa-star"></i>
			</div>
			<div className="workout-variety">
				variety: {props.workout.variety} <i className="fa fa-star"></i>
			</div>
			<div className="workout-fatigue">
				fatigue: {props.workout.fatigue} <i className="fa fa-star"></i>
			</div>
			<div className="workout-enjoyment">
				enjoyment: {props.workout.enjoyment} <i className="fa fa-star"></i>
			</div>
		</div>
	)
}

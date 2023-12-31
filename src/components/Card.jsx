export default function Card(props) {
	return (
		<div
			key={props.workout.id}
			className="card"
			onMouseOver={props.showDeleteBtn}
			onMouseOut={props.hideDeleteBtn}
		>
			<i
				className="fa fa-trash"
				aria-hidden="true"
				onClick={() => props.handleDelete(props.workout.id)}
			></i>
			<a
				href={props.workout.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={props.workout.thumbnail} />
				<div className="workout-title">
					<b>{props.workout.title}</b>
				</div>
			</a>
			<div className="workout-intensity">
				intensity:
				<span>
					{props.workout.intensity} <i className="fa fa-star"></i>
				</span>
			</div>
			<div className="workout-variety">
				variety:
				<span>
					{props.workout.variety} <i className="fa fa-star"></i>
				</span>
			</div>
			<div className="workout-fatigue">
				fatigue:
				<span>
					{props.workout.fatigue} <i className="fa fa-star"></i>
				</span>
			</div>
			<div className="workout-enjoyment">
				enjoyment:
				<span>
					{props.workout.enjoyment} <i className="fa fa-star"></i>
				</span>
			</div>
		</div>
	)
}

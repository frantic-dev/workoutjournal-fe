import Card from "./Card"
import '../styles/cards.css'
export default function Cards (props) {
  const cards = props.workouts.map(workout => <Card key={workout.id} workout={workout}/>)
  return(
    <div>
      {cards}
    </div>
  )
}
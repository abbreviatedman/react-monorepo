function ResultsCard(props) {
  return (
    <div style={{border: "2px solid gold"}}>
      <h3>Name: {props.name}</h3>
      <p>Question: {props.question.text}</p>
      <p>Answer: {props.question.answer}</p>
      <p>Your answer: {props.playerAnswer}</p>
      <p>{props.question.answer === props.playerAnswer ? "Correct!" : "Incorrect..."}</p>
    </div>
  )
}

export default ResultsCard;

import { useState } from "react";

function TriviaForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    answer: "",
  });

  function updateFormState(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.submitForm(formData);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Your Name:</label>
        <input type="text" name="name" onChange={updateFormState} />
      </div>
      <div>
        <label>Answer the following question:</label>
	<p>{props.question.text}</p>
      </div>
      <div>
        <label>Your Answer:</label>
        <input type="text" name="answer" onChange={updateFormState} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TriviaForm;

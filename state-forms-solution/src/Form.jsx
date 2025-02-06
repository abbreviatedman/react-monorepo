import { useState } from 'react';

function Form(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: 'female',
    isSubscribed: false,
  })

  function handleChange(event) {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} >
      <div>
	<label>Name:</label>
	<input type="text" name="name" onChange={handleChange} />
      </div>
      <div>
	<label>Email:</label>
	<input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
	<label>Age:</label>
	<input type="number" name="age" onChange={handleChange} />
      </div>
      <div>
	<label>Gender:</label>
	<div>
	  <label>
	    <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
	  </label>
	  <label>
	    <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
	  </label>
	  <label>
	    <input type="radio" name="gender" value="non-binary" onChange={handleChange} /> Non-binary
	  </label>
	  <label>
	    <input type="radio" name="gender" value="prefer-not-to-say" onChange={handleChange} /> Prefer not to say
	  </label>
	</div>
      </div>
      <div>
	<label>Subscribe to newsletter:</label>
	<input type="checkbox" name="isSubscribed" onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;

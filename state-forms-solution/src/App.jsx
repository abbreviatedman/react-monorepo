import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Form from './Form';
import ContactCard from './ContactCard';

function App() {
  const [person, setPerson] = useState(null);

  function handleFormSubmit(formData) {
    setPerson(formData);
  }

  return (
    <div>
      <Form handleSubmit={handleFormSubmit} />
      {person && <ContactCard person={person} />}
    </div>
  )
}

export default App

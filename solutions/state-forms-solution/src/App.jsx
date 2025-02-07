import { useState } from 'react';

import questions from './questions-dev-mode.json';
import TriviaForm from './TriviaForm';
import ResultsCard from './ResultsCard';

function App() {
  const [question, setQuestion] = useState(getRandomQuestion(questions));
  const [results, setResults] = useState(null);

  function handleSubmit(formData) {
    setResults(formData);
  }

  function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);

    return questions[randomIndex];
  };

  return (
    <div>
      <TriviaForm question={question} submitForm={handleSubmit} />
      {results && <ResultsCard name={results.name} playerAnswer={results.answer} question={question} />}
    </div>
  )
}

export default App

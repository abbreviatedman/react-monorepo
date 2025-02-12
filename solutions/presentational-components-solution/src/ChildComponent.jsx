import { useEffect, useState } from "react";

import './ChildComponent.css';

function ChildComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      setData(data.results);
    }

    fetchData();
  }, []);

  return (
    <div>
      {data.map((character) => (
	<div key={character.name}>
          <h3>{character.name}</h3>
          <p>Height (in cm): {character.height}</p>
          <p>Mass (in kg): {character.mass}</p>
          <p>Hair color: {character.hair_color}</p>
        </div>
      ))}
    </div>
  );
}

export default ChildComponent;

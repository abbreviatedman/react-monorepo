import { useState, useEffect } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');
  const [isFront, setIsFront] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPokemonImage = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
        setMessage('Pokemon not found');

	return;
      }

      const pokemon = await response.json();
      setPokemonImage(pokemon.sprites[isFront ? "front_default" : "back_default"]);
      setMessage('');
      setIsFront(true);
    };

    if (pokemonName) {
      fetchPokemonImage();
    }
  }, [isFront, pokemonName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(searchQuery.toLowerCase());
  }
  
  return (
    <>
      <h1>Flippymon</h1>
      <form onSubmit={handleSubmit}>
	<input
	  type="text"
	  value={searchQuery}
	  onChange={(e) => setSearchQuery(e.target.value)}
	  placeholder="Search PokeMon by name..."
	/>

        <button type="submit">Search</button>
      </form>

      {message && <p>{message}</p>}
      <div onClick={() => setIsFront((prevIsFront) => !prevIsFront)}>
	<img src={pokemonImage} alt={pokemonName} />
      </div>
    </>
  )
}

export default App

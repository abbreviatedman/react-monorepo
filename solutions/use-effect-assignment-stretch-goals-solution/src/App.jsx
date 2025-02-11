import { useState, useEffect } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [isFront, setIsFront] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPokemonImage = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
        setMessage('Pokemon not found');
        setPokemon(null);

	return;
      }

      const newPokemon = await response.json();
      setPokemon(newPokemon);
      setIsFront(true);
      setMessage('');
    };

    if (pokemonName) {
      fetchPokemonImage();
    }
  }, [pokemonName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(searchQuery.toLowerCase());
  }

  const flipPokemonImage = () => {
    setPokemonImage((previousImage) => {
      return previousImage === pokemon.sprites["front_default"]
        ? pokemon.sprites["back_default"]
        : pokemon.sprites["front_default"]
    })
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
      <div onClick={() => setIsFront((i) => !i)}>
	{
          pokemon && <img
		       src={isFront ? pokemon.sprites["front_default"] : pokemon.sprites["back_default"]}
		       alt={pokemonName}
		     />
        }
      </div>
    </>
  )
}

export default App

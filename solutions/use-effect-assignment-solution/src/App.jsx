import { useState, useEffect } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');
  const [isFront, setIsFront] = useState(true);

  useEffect(() => {
    const fetchPokemonImage = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pokemon = await response.json();
      setPokemonImage(pokemon.sprites[isFront ? "front_default" : "back_default"]);
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

      <div onClick={() => setIsFront((prevIsFront) => !prevIsFront)}>
	<img src={pokemonImage} alt={pokemonName} />
      </div>
    </>
  )
}

export default App

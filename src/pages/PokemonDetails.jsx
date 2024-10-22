import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 capitalize">{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-48 h-48 mb-4"
      />
      <p className="text-lg">Height: {pokemon.height}</p>
      <p className="text-lg">Weight: {pokemon.weight}</p>
      <p className="text-lg">Base Experience: {pokemon.base_experience}</p>
    </div>
  );
};

export default PokemonDetails;
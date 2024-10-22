import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Pokémon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.name} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2 capitalize">{pokemon.name}</h2>
            <Link to={`/pokemon/${pokemon.name}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
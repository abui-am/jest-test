import axios from 'axios';

export const getPokemonDetailById = (pokeId) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);

export const getAllPokemon = () =>
  axios.get('https://pokeapi.co/api/v2/pokemon');

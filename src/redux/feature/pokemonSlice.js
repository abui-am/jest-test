import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { getAllPokemon } from '../../services/pokemonApi';

const initialState = {
  pokemons: [],
  isLoading: false,
};

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async () => {
    const response = await getAllPokemon();
    const resultAll = await Promise.all(
      response.data.results.map(async (poke) => {
        const res = await axios.get(poke.url);
        return res.data;
      }),
    );
    return resultAll;
  },
);

export const searchPokemon = createAsyncThunk(
  'pokemon/searchPokemon',
  async (type) => {
    const response = await getAllPokemon();

    const resultAll = await Promise.all(
      response.data.results.map(async (poke) => {
        const res = await axios.get(poke.url);
        return res.data;
      }),
    );

    if (type) {
      return type
        ? resultAll.filter((value) => {
            const typeNames = value.types.map((pokeType) => pokeType.type.name);
            return typeNames.includes(type);
          })
        : resultAll;
    }
    return resultAll;
  },
);

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPokemon.pending]: (state) => {
      state.isLoading = true;
    },

    [fetchPokemon.fulfilled]: (state, action) => {
      state.pokemons = action.payload;
      state.isLoading = false;
    },
    [fetchPokemon.rejected]: (state) => {
      state.isLoading = false ;
    },
    [searchPokemon.pending]: (state) => {
      state.isLoading = true;
    },
    [searchPokemon.fulfilled]: (state, action) => {
      state.pokemons = action.payload;
    },
    [searchPokemon.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default counterSlice.reducer;

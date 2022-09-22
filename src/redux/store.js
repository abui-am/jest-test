import { configureStore } from '@reduxjs/toolkit';

import pokemonSlice from './feature/pokemonSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
});

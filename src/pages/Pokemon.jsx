import React from 'react';

import CustomNavbar from '../components/Navbar';
import SearchPokemon from '../components/SearchPokemon';
import Title from '../components/Title';

function Home() {
  return (
    <div>
      <CustomNavbar />
      <Title />
      <SearchPokemon />
    </div>
  );
}

export default Home;

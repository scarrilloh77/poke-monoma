import Paginate from '@/components/Paginate/Paginate';
import { ShopLayout } from '@/components/layouts/DashboardLayout';
import { PokemonCard } from '@/components/pokemons/PokemonCard';
import * as SC from '@/styles/dashboard.style';
import React, { useState } from 'react';

const DashboardPage = () => {
  const [pokemons, setPokemon] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(10 / 10)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <ShopLayout title='PokeMonoma' pageDescription='Listado de pokemons'>
      <SC.PokemonList>
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} />
        ))}
      </SC.PokemonList>
      <SC.PaginationContainer>
        <Paginate
          postsPerPage={3}
          totalPosts={pokemons.length}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </SC.PaginationContainer>
    </ShopLayout>
  );
};

export default DashboardPage;

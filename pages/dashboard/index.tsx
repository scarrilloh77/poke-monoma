import pokeApi from '@/api/pokeApi';
import Paginate from '@/components/Paginate/Paginate';
import { ShopLayout } from '@/components/layouts/DashboardLayout';
import { PokemonCard } from '@/components/pokemons/PokemonCard';
import { PokemonData, PokemonListData } from '@/interface';
import * as SC from '@/styles/dashboard.style';
import React, { useEffect, useState } from 'react';

const DashboardPage = () => {
  const [pokemons, setPokemon] = useState<PokemonData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getPokemonList = async () => {
      const { data } = await pokeApi.get<PokemonListData>('/pokemons');
      const { results } = data;
      setPokemon(results);
    };
    getPokemonList().catch(console.error);
  }, []);

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
        {pokemons?.map((pokemon, index) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
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

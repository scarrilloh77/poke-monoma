import { ShopLayout } from '@/components/layouts/DashboardLayout';
import { PokemonCard } from '@/components/pokemons/PokemonCard';
import * as SC from '@/styles/dashboard.style';
import React from 'react';

const DashboardPage = () => {
  return (
    <ShopLayout title='PokeMonoma' pageDescription='Listado de pokemons'>
      <SC.PokemonList>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((pokemon, index) => (
          <PokemonCard key={index} />
        ))}
      </SC.PokemonList>
      <SC.PaginationContainer>Pagination</SC.PaginationContainer>
    </ShopLayout>
  );
};

export default DashboardPage;

import React, { useContext, useEffect, useRef, useState } from 'react';
import pokeApi from '@/api/pokeApi';
import Paginate from '@/components/Paginate/Paginate';
import { MainLayout } from '@/components/layouts/MainLayout';
import { PokemonCard } from '@/components/PokemonCard/PokemonCard';
import { PokemonData, PokemonListData } from '@/interfaces';
import * as SC from '@/styles/DashboardPage.styles';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context';

const DashboardPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);
  const [keeperPokemons, setKeeperPokemons] = useState<PokemonData[]>([]);
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const isLoadingRef = useRef(false);

  const offset = (currentPage - 1) * 10;
  const visiblePokemons = keeperPokemons.slice(offset, offset + 10);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
    }
  }, [router]);

  useEffect(() => {
    const offsetPage = currentPage * 10 - 10;

    if (isLoadingRef.current || keeperPokemons.length > offsetPage) {
      return;
    }

    isLoadingRef.current = true;

    const getPokemonList = async () => {
      try {
        const { data } = await pokeApi.get<PokemonListData>(
          `/pokemons?offset=${offsetPage}`
        );
        const { count, results } = data;
        setKeeperPokemons((prevPokemons) => [...prevPokemons, ...results]);
        setTotalPokemons(count);
      } catch (error) {
        console.error(error);
      } finally {
        isLoadingRef.current = false;
      }
    };
    getPokemonList().catch(console.error);
  }, [currentPage, keeperPokemons]);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(totalPokemons / 10)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {isLoggedIn && (
        <MainLayout title='PokeMonoma' pageDescription='Listado de pokemons'>
          <SC.PokemonList>
            {visiblePokemons?.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </SC.PokemonList>
          <SC.PaginationContainer>
            <Paginate
              pokemonsPerPage={10}
              totalPokemons={totalPokemons}
              currentPage={currentPage}
              previousPage={previousPage}
              nextPage={nextPage}
            />
          </SC.PaginationContainer>
        </MainLayout>
      )}
    </>
  );
};

export default DashboardPage;

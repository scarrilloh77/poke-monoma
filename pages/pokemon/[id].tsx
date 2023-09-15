import React, { useContext, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import { Pokemon } from '@/interfaces';
import * as SC from '../../styles/pokemon-detail.style';
import { ShopLayout } from '@/components/layouts/DashboardLayout';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage = ({ pokemon }: Props) => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
    }
  }, [router]);

  return (
    <>
      {isLoggedIn && (
        <ShopLayout title='PokeDetail' pageDescription='Detalle del Pokemon'>
          <SC.DetailContainer>
            <SC.DetailVisualContainer>
              <SC.DetailImageContainer>
                <SC.Image
                  src={`${pokemon.sprites.other?.dream_world.front_default}`}
                />
              </SC.DetailImageContainer>
              <SC.DetailInfoContainer>
                <SC.DetailNameContainer data-testid='pokemon-name'>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </SC.DetailNameContainer>
                <SC.SmallPropertyContainer>
                  <SC.SmallSubTitle>Weight:</SC.SmallSubTitle>
                  <span>{pokemon.weight / 10} kg</span>
                </SC.SmallPropertyContainer>
                <SC.SmallPropertyContainer>
                  <SC.SmallSubTitle>Height:</SC.SmallSubTitle>
                  <span>{pokemon.height * 10} cm</span>
                </SC.SmallPropertyContainer>
                <SC.MediumPropertyContainer>
                  <SC.MediumSubTitle>Habilidades</SC.MediumSubTitle>
                  <div>
                    {pokemon.abilities.slice(0, 5).map(({ ability }, index) => (
                      <div key={index}>{ability.name}</div>
                    ))}
                  </div>
                </SC.MediumPropertyContainer>
                <SC.MediumPropertyContainer>
                  <SC.MediumSubTitle>Movimientos</SC.MediumSubTitle>
                  <div>
                    {pokemon.moves.slice(0, 5).map(({ move }, index) => (
                      <div key={index}>{move.name}</div>
                    ))}
                  </div>
                </SC.MediumPropertyContainer>
                <SC.MediumPropertyContainer>
                  <SC.MediumSubTitle>Tipos</SC.MediumSubTitle>
                  <div>
                    {pokemon.types.slice(0, 5).map(({ type }, index) => (
                      <div key={index}>{type.name}</div>
                    ))}
                  </div>
                </SC.MediumPropertyContainer>
              </SC.DetailInfoContainer>
            </SC.DetailVisualContainer>
          </SC.DetailContainer>
        </ShopLayout>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons51 = [...Array(51)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons51.map((id) => ({
      params: { id },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const getPokemonInfo = async (id: string) => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      return {
        id: data.id,
        name: data.name,
        abilities: data.abilities,
        height: data.height,
        moves: data.moves,
        sprites: data.sprites,
        types: data.types,
        weight: data.weight,
      };
    } catch (error) {
      return null;
    }
  };

  const pokemon = await getPokemonInfo(id);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPage;

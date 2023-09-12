import { FC, useMemo, useState } from 'react';
import NextLink from 'next/link';
import * as SC from './PokemonCard.style';

interface Props {
  pokemon: any;
}

export const PokemonCard = () => {
  return (
    <SC.CardContainer>
      <SC.PokeVisual>
        <SC.PokeImage>
          <SC.Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/571.svg' />
        </SC.PokeImage>
        <SC.PokeWeight>
          <span>53 Kg</span>
        </SC.PokeWeight>
      </SC.PokeVisual>
      <SC.PokeInfo>
        <SC.PokeTitle>Charmander</SC.PokeTitle>
        <SC.PokeMoves>
          <div>#Fuego</div>
          <div>#Aire</div>
        </SC.PokeMoves>
      </SC.PokeInfo>
    </SC.CardContainer>
  );
};

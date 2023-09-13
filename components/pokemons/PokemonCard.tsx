import * as SC from './PokemonCard.style';
import { PokemonData } from '@/interface';

interface Props {
  pokemon: PokemonData;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const hectogramToKilogram = (hgWeight: number) => hgWeight / 10;

  return (
    <SC.CardContainer>
      <SC.PokeVisual>
        <SC.PokeImage>
          <SC.Image src={`${pokemon.imgUrl}`} />
        </SC.PokeImage>
        <SC.PokeWeight>
          <span>{hectogramToKilogram(pokemon.weight)} Kg</span>
        </SC.PokeWeight>
      </SC.PokeVisual>
      <SC.PokeInfo>
        <SC.PokeTitle>{pokemon.name}</SC.PokeTitle>
        <SC.PokeMoves>
          {pokemon.movements?.map((move, index) => (
            <div key={index}>#{move.name}</div>
          ))}
        </SC.PokeMoves>
      </SC.PokeInfo>
    </SC.CardContainer>
  );
};

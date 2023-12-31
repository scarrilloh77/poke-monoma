import { useRouter } from 'next/router';
import * as SC from './PokemonCard.styles';
import { PokemonData } from '@/interfaces';

interface Props {
  pokemon: PokemonData;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const router = useRouter();
  const hectogramToKilogram = (hgWeight: number) => hgWeight / 10;

  const seeDetail = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <SC.CardContainer
      onClick={seeDetail}
      data-testid={`pokemon-card-${pokemon.id}`}
    >
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

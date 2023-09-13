export interface PokemonListData {
  count: number;
  results: PokemonData[];
}

export interface PokemonData {
  id: number;
  name: string;
  weight: number;
  imgUrl: string;
  movements: { name: string }[];
}

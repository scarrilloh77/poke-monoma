import { PokemonListData } from '@/interfaces';
import type { NextApiRequest, NextApiResponse } from 'next';
import pokemonListData from '@/database/pokemons.json';

type Data = { message: string } | PokemonListData;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getPokemons(req, res);

    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

const getPokemons = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const offset = parseInt(req.query.offset as string, 10) || 0;
  const paginatedResults = pokemonListData.results.slice(offset, offset + 10);
  return res.status(200).json({
    count: pokemonListData.count,
    results: paginatedResults,
  });
};

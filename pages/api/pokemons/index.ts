import { pokemonListData } from '@/database';
import { PokemonListData } from '@/interface';
import type { NextApiRequest, NextApiResponse } from 'next';

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
  return res.status(200).json(pokemonListData);
};

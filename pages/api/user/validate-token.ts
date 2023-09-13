import type { NextApiRequest, NextApiResponse } from 'next';
import { isValidToken, signToken } from '@/utils';
import usersData from '@/database/users.json';

type Data =
  | { message: string }
  | {
      token: string;
      user: {
        name: string;
        email: string;
      };
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return checkJWT(req, res);

    default:
      res.status(400).json({
        message: 'Bad request',
      });
  }
}

const checkJWT = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      message: 'Token de autorización no es válido',
    });
  }

  const token = authHeader.substring(7);

  let userId = '';

  try {
    userId = await isValidToken(token!);
  } catch (error) {
    return res.status(401).json({
      message: 'Token de autorización no es válido',
    });
  }

  const user = usersData.find((user) => user.id === Number(userId));

  if (!user) {
    return res.status(400).json({ message: 'No existe usuario con ese id' });
  }

  const { id, email, name } = user;

  return res.status(200).json({
    token: signToken(id.toString(), email),
    user: {
      name,
      email,
    },
  });
};

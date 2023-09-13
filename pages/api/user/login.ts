import type { NextApiRequest, NextApiResponse } from 'next';
import usersData from '@/database/users.json';
import { signToken } from '@/utils';

type Data =
  | { message: string }
  | {
      token: string;
      user: { name: string; email: string };
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return loginAuth(req, res);

    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

const loginAuth = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email: emailReq, password } = req.body;

  const user = usersData.find(
    (user) => user.email === emailReq && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const { id, name, email } = user;

  const token = signToken(id.toString(), email);

  return res.status(200).json({
    token,
    user: {
      name,
      email,
    },
  });
};

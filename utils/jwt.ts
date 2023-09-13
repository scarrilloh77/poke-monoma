import jwt from 'jsonwebtoken';

export const signToken = (id: string, email: string) =>
  jwt.sign({ id, email }, 'SeedToken@123', { expiresIn: '3h' });

export const isValidToken = (token: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, 'SeedToken@123', (err, payload) => {
        if (err) return reject('Invalid JWT!');
        const { id } = payload as { id: string };
        resolve(id);
      });
    } catch (error) {
      reject('Invalid JWT!');
    }
  });
};

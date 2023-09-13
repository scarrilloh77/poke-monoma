import { createContext } from 'react';
import { User } from '@/interfaces';

interface ContextProps {
  isLoggedIn: boolean;
  user?: User;
  loginUser: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext({} as ContextProps);

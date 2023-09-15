import { FC, useReducer, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import pokeApi from '@/api/pokeApi';
import { User } from '@/interfaces';
import { AuthContext, authReducer } from '.';
import { errorAlert, successAlert } from '@/utils/alerts';

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthState {
  isLoggedIn: boolean;
  user?: User;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
  const router = useRouter();

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const prevToken = localStorage.getItem('token');

    if (!prevToken) {
      return;
    }

    try {
      const { data } = await pokeApi.get('/user/validate-token', {
        headers: {
          Authorization: `Bearer ${prevToken}`,
        },
      });
      const { token, user } = data;
      localStorage.setItem('token', token);
      dispatch({ type: '[Auth] - Login', payload: user });
    } catch (error) {
      console.error(error);
      router.reload();
      localStorage.removeItem('token');
    }
  };

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const { data } = await pokeApi.post('/user/login', { email, password });
      const { token, user } = data;
      localStorage.setItem('token', token);
      dispatch({ type: '[Auth] - Login', payload: user });
      successAlert('Bienvenido!');
      return true;
    } catch (error) {
      errorAlert('Credenciales incorrectas!');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    router.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

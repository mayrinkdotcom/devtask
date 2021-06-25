/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';
import { api } from '../services/api';

type SignInCredentials = {
  email: string;
  password: string;
};

type UserData = {
  id: number;
  email: string;
  fullName: string;
  role: string;
};

type AuthState = {
  user: UserData;
  token: string;
};

type AuthContextState = {
  user: UserData;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@devtask:token');
    const user = localStorage.getItem('@devtask:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = async (credentials: SignInCredentials) => {
    const response = await api.post('/auth/login', credentials);

    const user = {
      id: response.data.id,
      email: response.data.email,
      fullName: response.data.fullName,
      role: response.data.role === 1 ? 'dev' : 'business',
    };
    const { token } = response.data;

    localStorage.setItem('@devtask:token', token);
    localStorage.setItem('@devtask:user', JSON.stringify(user));

    setData({ token, user });
  };

  const signOut = async () => {
    await api.post('/auth/logout');

    localStorage.removeItem('@devtask:token');
    localStorage.removeItem('@devtask:user');

    setData({} as AuthState);
  };

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);

  return context;
};

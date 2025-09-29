import React, { createContext, useState, useEffect } from 'react';
import { Q } from '@nozbe/watermelondb'; // Importando query builder do WatermelonDB
import { database } from '../database'; 

// Interface para o contexto de autenticação
interface AuthContextProps {
  isAuthenticated: boolean | null;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkLoggedUser() {
      try {
        const users = await database.get('users').query(Q.where('is_logged_in', true)).fetch();
        setIsAuthenticated(users.length > 0);

      } catch (error) {
        console.error('Erro ao verificar usuário logado: ', error);
        setIsAuthenticated(false);
      }
    }
    checkLoggedUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

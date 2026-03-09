import React, { createContext, useState, useContext } from 'react';

// 1. Definimos qué datos tendrá el contexto
interface AuthContextData {
  isLoggedIn: boolean;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = () => setIsLoggedIn(true);
  const signOut = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto fácil
export const useAuth = () => useContext(AuthContext);
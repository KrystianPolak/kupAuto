import React, { createContext, useState, useContext, useEffect } from 'react';
import { refreshAccessToken as refresh, logout as performLogout } from './api/auth'; // Importowanie funkcji z api/auth.js

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('accessToken')); 

  const login = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await performLogout(); 
    localStorage.removeItem('accessToken'); 
    setIsAuthenticated(false);
  };

  const refreshSession = async () => {
    try {
      await refresh(); 
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Błąd odświeżania sesji', error);
      logout(); 
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAuthenticated) {
        refreshSession();
      }
    }, 50 * 60 * 1000); 

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

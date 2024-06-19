import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

// const BASE_URL = 'https://jwt-backend-8pow.onrender.com';
const BASE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://jwt-backend-8pow.onrender.com';

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(false);

  const handleLogout = () => {
    setUser(false);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const isToken = localStorage.getItem('token');
    if (isToken) setUser(true);
  }, []);

  return <AuthContext.Provider value={{ BASE_URL, user, setUser, handleLogout }}>{children}</AuthContext.Provider>;
}

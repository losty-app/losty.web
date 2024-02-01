// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    if (profile?.id) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [profile]);

  return <AuthContext.Provider value={{ isLoggedIn }}>{children}</AuthContext.Provider>;
};

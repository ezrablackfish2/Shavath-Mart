import React, { createContext, useState, ReactNode } from "react";

// Define the type for your authentication context value
type AuthContextType = {
  auth: Record<string, any>; // You can replace 'Record<string, any>' with the specific type for auth
  setAuth: React.Dispatch<React.SetStateAction<Record<string, any>>>;
};

// Initialize the context with its initial value
const AuthContext = createContext<AuthContextType>({
  auth: {},
  setAuth: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<Record<string, any>>({}); // You can replace 'Record<string, any>' with the specific type for auth

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


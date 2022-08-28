import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();

export default function AppContextProvider({ children }) {
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState(null);

 const login = (tokn) => {
    setAuth(!isAuth);
    setToken(tokn);
 }


  return (
    <AppContext.Provider
      value={{
        isAuth,
        token,
        login
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
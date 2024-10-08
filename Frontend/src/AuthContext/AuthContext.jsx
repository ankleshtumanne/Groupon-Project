import React, { useState,createContext} from "react";

export const AuthContext=createContext()

export function AuthContextProvider({ children }) {
    const [isAuth, setisAuth] = React.useState(false);
    
      return (
      <AuthContext.Provider value={{ isAuth,setisAuth }}>
        {children}
      </AuthContext.Provider>
    );
  }

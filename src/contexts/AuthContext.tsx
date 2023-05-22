import { PropsWithChildren, createContext, useEffect, useState } from "react";

type AuthContextType = {
  key: string | null;
  setKey: (key: string) => void;
  isAuthenticated: boolean | null;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

export const AuthContext = createContext<AuthContextType>({
  key: "",
  setKey: () => null,
  isAuthenticated: false,
  setIsAuthenticated: () => null
});

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [key, setKey] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const storedKey = localStorage.getItem("key");
    const storedIsAuthenticated = localStorage.getItem("isAuthenticated");

    if (storedKey) {
      setKey(storedKey);
    }

    if (storedIsAuthenticated) {
      setIsAuthenticated(Boolean(storedIsAuthenticated));
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    if (key !== null && isAuthenticated !== null) {
      localStorage.setItem("key", key);
      localStorage.setItem("isAuthenticated", String(isAuthenticated));
    }
  }, [key, isAuthenticated]);

  const value = { key, setKey, isAuthenticated, setIsAuthenticated };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

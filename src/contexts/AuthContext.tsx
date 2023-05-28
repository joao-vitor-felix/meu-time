import { PropsWithChildren, createContext, useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";

type AuthContextType = {
  key: string;
  setKey: (key: string) => void;
};

export const AuthContext = createContext<AuthContextType>({
  key: "",
  setKey: () => null
});

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [key, setKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedKey = localStorage.getItem("key");

    if (storedKey) {
      setKey(storedKey);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("key", key);
    }, 0);
  }, [key]);

  const value = { key, setKey };

  return isLoading ? (
    <Spinner />
  ) : (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

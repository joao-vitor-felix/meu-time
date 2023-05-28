import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../Country/Country.styles";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import useAuthContext from "../../hooks/useAuthContext";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Error } from "./Auth.styles";

const Auth = () => {
  useDocumentTitle("Login | Meu Time");
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { setKey } = useAuthContext();
  const navigate = useNavigate();

  const handleKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = async (value: string) => {
    setIsLoading(true);
    const response = await axios.get(
      "https://v3.football.api-sports.io/countries",
      {
        headers: {
          "x-apisports-key": value
        }
      }
    );

    if (response.data.response.length > 0) {
      setKey(value);
      setIsLoading(false);
      navigate("/");
    }

    if (response.data.errors.token) {
      console.error("Error authenticating:", error);
      setError("Key inválida. Insira uma key válida.");
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <Logo />
      <S.Title>Informe sua Key</S.Title>
      <Input
        type="text"
        placeholder="Digite sua key"
        id="key"
        onChange={handleKey}
      />
      {error && <Error>{error}</Error>}
      <Button
        onClick={() => handleClick(value)}
        disabled={isLoading}
        isLoading={isLoading}
        small={true}
      >
        Confirmar
      </Button>
    </S.Container>
  );
};

export default Auth;

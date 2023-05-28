import { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "../Country/Country.styles";
import SelectLeague from "../../components/SelectLeague/SelectLeague";
import Logo from "../../components/Logo/Logo";
import Input from "../../components/Input/Input";
import useLeague from "../../hooks/useLeague";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useAuthContext from "../../hooks/useAuthContext";

const League = () => {
  useDocumentTitle("Selecione a liga | Meu Time");

  const { countryName } = useParams();

  const { key, setKey } = useAuthContext();

  const validKey = typeof key === "string" ? key : "";
  const validCountryName = typeof countryName === "string" ? countryName : "";

  const { data, isError } = useLeague(validKey, validCountryName);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const handleLogout = () => {
    setKey("");
  };

  return (
    <S.Container>
      <Logo />
      <S.ButtonStyled children="Sair" onClick={handleLogout} />
      <S.Title>Digite a temporada e selecione a liga</S.Title>
      <Input
        placeholder="Exemplo: 2022"
        type="number"
        min="4"
        max="4"
        id="season"
        onChange={handleChange}
      />
      {isError && <S.Error as="h3">{data?.error}</S.Error>}
      {data && data.leagues.length > 0 && (
        <S.Box>
          {data &&
            data.leagues.map(league => (
              <SelectLeague
                key={league.league.id}
                id={league.league.id}
                name={league.league.name}
                logo={league.league.logo}
                season={value}
              />
            ))}
        </S.Box>
      )}
    </S.Container>
  );
};

export default League;

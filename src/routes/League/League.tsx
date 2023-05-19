import * as S from "../Country/Country.styles";
import useLeague from "../../hooks/useLeague";
import SelectLeague from "../../components/SelectLeague/SelectLeague";
import { useParams } from "react-router-dom";

const League = () => {
  const { countryName } = useParams();

  const validCountryName = typeof countryName === "string" ? countryName : "";

  const { data, isError } = useLeague(
    "ae7fb7d2e733a93339ce809414adc04b",
    validCountryName
  );

  return (
    <S.Container>
      <S.Title>Selecione a liga</S.Title>
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
              />
            ))}
        </S.Box>
      )}
    </S.Container>
  );
};

export default League;

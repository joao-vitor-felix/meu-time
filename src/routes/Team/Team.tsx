import SelectTeam from "../../components/SelectTeam/SelectTeam";
import * as S from "../Country/Country.styles";
import useTeam from "../../hooks/useTeam";
import Logo from "../../components/Logo/Logo";
import { useParams } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useAuthContext from "../../hooks/useAuthContext";

const Team = () => {
  useDocumentTitle("Selecione o time | Meu Time");

  const { key } = useAuthContext();

  const { leagueId, seasonId } = useParams();

  const validKey = typeof key === "string" ? key : "";
  const validLeague = Number(leagueId);
  const validSeason = Number(seasonId);

  const { data, isError } = useTeam(validKey, validLeague, validSeason);

  return (
    <S.Container>
      <Logo />
      <S.Title>Selecione o time</S.Title>
      {isError && <S.Error as="h3">{data?.error}</S.Error>}
      {data && data.teams.length > 0 && (
        <S.Box>
          {data &&
            data.teams.map(team => (
              <SelectTeam
                logo={team.team.logo}
                name={team.team.name}
                key={team.team.id}
                id={team.team.id}
              />
            ))}
        </S.Box>
      )}
    </S.Container>
  );
};

export default Team;

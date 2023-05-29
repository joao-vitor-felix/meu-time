import Navbar from "../../components/Navbar/Navbar";
import TeamData from "../../components/TeamData/TeamData";
import useAuthContext from "../../hooks/useAuthContext";
import useTeamData from "../../hooks/useTeamData";
import usePlayers from "../../hooks/usePlayers";
import { useParams } from "react-router-dom";
import * as S from "./Details.styles";
import LineChart from "../../components/LineChart/LineChart";
import TeamPlayersTable from "../../components/TeamPlayersTable/TeamPlayersTable";
import ResultsFormationTable from "../../components/ResultsFormationTable/ResultsFormationTable";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Spinner from "../../components/Spinner/Spinner";

const Details = () => {
  const { key } = useAuthContext();

  const { leagueId, seasonId, teamId } = useParams();

  const validKey = typeof key === "string" ? key : "";
  const validLeagueId = Number(leagueId);
  const validSeasonId = Number(seasonId);
  const validTeamId = Number(teamId);

  const { data, isError } = useTeamData(
    validKey,
    validLeagueId,
    validSeasonId,
    validTeamId
  );

  useDocumentTitle(`${data?.teamData?.team?.name} | Meu time`);

  const { players, playersError } = usePlayers(
    validKey,
    validSeasonId,
    validTeamId
  );

  return (
    <>
      <Navbar />
      <S.Container>
        {(data && data?.teamData && (
          <TeamData
            name={data.teamData.team.name}
            logo={data.teamData.team.logo}
            season={data.teamData.league.season}
          />
        )) || <Spinner />}
        {isError && (
          <S.Error>Erro ao carregar dados do time. Tente novamente!</S.Error>
        )}
        <S.TableGraphContainer>
          {(data && data?.teamData && (
            <ResultsFormationTable teamData={data?.teamData} />
          )) || <Spinner />}
          <S.Graph>
            {(data && data?.teamData && (
              <>
                <S.Title>Quantidade de gols marcados por tempo de jogo</S.Title>
                <LineChart goalsData={{ goals: data?.teamData.goals }} />
              </>
            )) || <Spinner />}
          </S.Graph>
        </S.TableGraphContainer>
        {(players && (
          <>
            <S.Title>Lista de jogadores</S.Title>
            <TeamPlayersTable playerData={players.playerData} />
          </>
        )) || <Spinner />}
        {playersError && (
          <S.Error>
            Erro ao carregar dados dos jogadores. Tente novamente!
          </S.Error>
        )}
      </S.Container>
    </>
  );
};

export default Details;

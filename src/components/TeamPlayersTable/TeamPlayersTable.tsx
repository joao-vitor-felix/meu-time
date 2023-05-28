import { PlayerData } from "../../api/api";
import TeamPlayers from "../TeamPlayers/TeamPlayers";
import * as S from "./TeamPlayersTable.styles";

type TeamPlayersProps = {
  playerData: PlayerData[];
};

const TeamPlayersTable = ({ playerData }: TeamPlayersProps) => {
  return (
    <S.TeamTable>
      <thead>
        <S.TableRow>
          <S.TableHeader>Nome</S.TableHeader>
          <S.TableHeader>Idade</S.TableHeader>
          <S.TableHeader>Nacionalidade</S.TableHeader>
        </S.TableRow>
      </thead>
      <tbody>
        {playerData.map(player => (
          <TeamPlayers
            key={player.player.id}
            name={player.player.name}
            age={player.player.age}
            nationality={player.player.nationality}
          />
        ))}
      </tbody>
    </S.TeamTable>
  );
};

export default TeamPlayersTable;

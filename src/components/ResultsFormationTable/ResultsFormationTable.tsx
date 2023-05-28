import Formation from "../Formation/Formation";
import Results from "../Results/Results";
import * as S from "../TeamPlayersTable/TeamPlayersTable.styles";

type ResultsFormationTableProps = {
  teamData: {
    fixtures: {
      played: {
        home: number;
        away: number;
        total: number;
      };
      wins: {
        home: number;
        away: number;
        total: number;
      };
      draws: {
        home: number;
        away: number;
        total: number;
      };
      loses: {
        home: number;
        away: number;
        total: number;
      };
    };
    lineups: {
      formation: string;
      played: number;
    }[];
  };
};

const ResultsFormationTable = ({ teamData }: ResultsFormationTableProps) => {
  return (
    <S.Table>
      <thead>
        <S.TableRow>
          <S.TableHeader>Resultados e Formação</S.TableHeader>
        </S.TableRow>
      </thead>
      <tbody>
        <Results fixtures={teamData.fixtures} />
        <Formation lineups={teamData.lineups} />
      </tbody>
    </S.Table>
  );
};

export default ResultsFormationTable;

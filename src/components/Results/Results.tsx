import {
  TableRow,
  TableCell
} from "../TeamPlayersTable/TeamPlayersTable.styles";

type ResultsProps = {
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
};

const Results = ({ fixtures }: ResultsProps) => {
  return (
    <>
      <TableRow>
        <TableCell>Total de jogos: {fixtures.played.total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Vitórias: {fixtures.wins.total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Derrotas: {fixtures.loses.total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Empates: {fixtures.draws.total}</TableCell>
      </TableRow>

      {/* </TableRow> */}
    </>
  );
};

export default Results;

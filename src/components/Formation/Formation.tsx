import {
  TableCell,
  TableRow
} from "../TeamPlayersTable/TeamPlayersTable.styles";

type FormationProps = {
  lineups: {
    formation: string;
    played: number;
  }[];
};

const Formation = ({ lineups }: FormationProps) => {
  let maxPlayed = 0;
  let mostUsedFormation = "";

  for (const lineup of lineups) {
    const played = lineup.played;
    if (played > maxPlayed) {
      maxPlayed = played;
      mostUsedFormation = lineup.formation;
    }
  }

  return (
    <TableRow>
      {mostUsedFormation && maxPlayed ? (
        <TableCell>
          Formação mais utilizada: {mostUsedFormation}, {maxPlayed} vezes
          utilizada.
        </TableCell>
      ) : (
        <TableCell>Não há formações disponíveis</TableCell>
      )}
    </TableRow>
  );
};

export default Formation;

import * as S from "../TeamPlayersTable/TeamPlayersTable.styles";

type TeamPlayersProps = {
  name: string;
  age: number;
  nationality: string;
};

const TeamPlayers = ({ name, age, nationality }: TeamPlayersProps) => {
  return (
    <S.TableRow>
      <S.TableCell>{name}</S.TableCell>
      <S.TableCell>{age}</S.TableCell>
      <S.TableCell>{nationality}</S.TableCell>
    </S.TableRow>
  );
};

export default TeamPlayers;

import * as S from "../SelectCountry/SelectCountry.styles";
import { LeagueLogo, Wrapper } from "./SelectLeague.styles";

type SelectLeagueProps = {
  name: string;
  logo: string;
  id: number;
  season: number;
};

const SelectLeague = ({ name, logo, id, season }: SelectLeagueProps) => {
  return (
    <Wrapper season={season}>
      <LeagueLogo to={`${id}/${season}`} season={season}>
        <S.Flag src={logo} alt={`Imagem da liga ${name}`} />
        <S.Name>{name}</S.Name>
      </LeagueLogo>
    </Wrapper>
  );
};

export default SelectLeague;

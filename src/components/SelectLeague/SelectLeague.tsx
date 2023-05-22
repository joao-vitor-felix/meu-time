import * as S from "../SelectCountry/SelectCountry.styles";

type SelectLeagueProps = {
  name: string;
  logo: string;
  id: number;
  season: number;
};

const SelectLeague = ({ name, logo, id, season }: SelectLeagueProps) => {
  return (
    <S.Item to={`${id}/${season}`}>
      <S.Flag src={logo} alt={`Imagem da liga ${name}`} />
      <S.Name>{name}</S.Name>
    </S.Item>
  );
};

export default SelectLeague;

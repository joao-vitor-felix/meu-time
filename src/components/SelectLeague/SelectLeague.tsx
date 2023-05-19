import * as S from "../SelectCountry/SelectCountry.styles";

type SelectLeagueProps = {
  name: string;
  logo: string;
  id: number;
};

const SelectLeague = ({ name, logo }: SelectLeagueProps) => {
  return (
    <S.Item to="#">
      <S.Flag src={logo} alt={`Imagem da liga ${name}`} />
      <S.Name>{name}</S.Name>
    </S.Item>
  );
};

export default SelectLeague;

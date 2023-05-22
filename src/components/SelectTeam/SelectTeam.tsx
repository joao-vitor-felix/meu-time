import * as S from "../SelectCountry/SelectCountry.styles";

type SelectTeamProps = {
  name: string;
  logo: string;
  id: number;
};

const SelectTeam = ({ name, logo }: SelectTeamProps) => {
  return (
    <S.Item to="#">
      <S.Flag src={logo} alt={`Imagem do time ${name}`} />
      <S.Name>{name}</S.Name>
    </S.Item>
  );
};

export default SelectTeam;

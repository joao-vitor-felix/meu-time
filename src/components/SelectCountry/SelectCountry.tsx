import * as S from "./SelectCountry.styles";
import { Countries } from "../../api/api";

const SelectCountry = ({ flag, name }: Countries) => {
  return (
    <S.Item to={`/${name.toLowerCase()}`}>
      <S.Flag src={flag} alt={`Imagem da bandeira ${name}`} />
      <S.Name>{name}</S.Name>
    </S.Item>
  );
};

export default SelectCountry;

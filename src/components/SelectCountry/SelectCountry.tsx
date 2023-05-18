import * as S from "./SelectCountry.styles";
import { Countries } from "../../api/api";

const SelectBox = ({ flag, name }: Countries) => {
  return (
    <S.Item>
      <S.Flag src={flag} alt={`imagem da bandeira ${name}`} />
      <S.Name>{name}</S.Name>
    </S.Item>
  );
};

export default SelectBox;

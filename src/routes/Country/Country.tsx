import SelectCountry from "../../components/SelectCountry/SelectCountry";
import * as S from "./Country.styles";
import useCountry from "../../hooks/useCountry";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Logo from "../../components/Logo/Logo";
import useAuthContext from "../../hooks/useAuthContext";
import Spinner from "../../components/Spinner/Spinner";

const Country = () => {
  const { key, setKey } = useAuthContext();

  const validKey = typeof key === "string" ? key : "";

  const { data, isError } = useCountry(validKey);
  useDocumentTitle("Selecione o país | Meu Time");

  const handleLogout = () => {
    setKey("");
  };

  return (
    <S.Container>
      <Logo />
      <S.ButtonStyled children="Sair" onClick={handleLogout} />
      <S.Title>Selecione o país</S.Title>
      {isError && <S.Error as="h3">{data?.error}</S.Error>}
      {(data && data.countries.length > 0 && (
        <S.Box>
          {data &&
            data.countries.map(country => (
              <SelectCountry
                flag={country.flag}
                name={country.name}
                key={country.name}
              />
            ))}
        </S.Box>
      )) || <Spinner />}
    </S.Container>
  );
};

export default Country;

import SelectCountry from "../../components/SelectCountry/SelectCountry";
import * as S from "./Country.styles";
import useCountry from "../../hooks/useCountry";
const Country = () => {
  const { data, isError } = useCountry("ae7fb7d2e733a93339ce809414adc04b");

  return (
    <S.Container>
      <S.Title>Selecione o país</S.Title>
      {isError && <S.Error as="h3">{data?.error}</S.Error>}
      {data && data.countries.length > 0 && (
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
      )}
    </S.Container>
  );
};

export default Country;

import { fetchCountries } from "../api/api";
import { useEffect, useState } from "react";
import SelectCountry from "../components/SelectCountry/SelectCountry";
import * as S from "./Country.styles";
import { Countries } from "../api/api";

const Country = () => {
  const [data, setData] = useState<Countries[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCountries();
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      <S.Title>Selecione o país</S.Title>
      <S.Box>
        {data.map(country => (
          <SelectCountry
            flag={country.flag}
            name={country.name}
            key={country.name}
          />
        ))}
      </S.Box>
    </S.Container>
  );
};

export default Country;

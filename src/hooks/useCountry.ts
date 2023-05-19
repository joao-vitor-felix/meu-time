import { useQuery } from "react-query";
import { Countries } from "./../api/api";
import { fetchCountries } from "../api/api";

const useCountries = (key: string) => {
  const { data, isFetching, isError } = useQuery<
    {
      countries: Countries[];
      error: string;
    },
    Error
  >({
    queryKey: ["countries", key],
    queryFn: () => fetchCountries(key),
    refetchOnWindowFocus: false
  });
  return { data, isFetching, isError };
};

export default useCountries;

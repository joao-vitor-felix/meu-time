import { useQuery } from "react-query";
import { League } from "../api/api";
import { fetchLeagues } from "../api/api";

const useLeague = (key: string, country: string) => {
  const { data, isFetching, isError } = useQuery<
    {
      leagues: League[];
      error: string;
    },
    Error
  >({
    queryKey: ["leagues", key, country],
    queryFn: () => fetchLeagues(key, country),
    refetchOnWindowFocus: false
  });
  return { data, isFetching, isError };
};

export default useLeague;

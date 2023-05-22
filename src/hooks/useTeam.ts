import { useQuery } from "react-query";
import { Teams } from "../api/api";
import { fetchTeams } from "../api/api";

const useTeam = (key: string, league: number, season: number) => {
  const { data, isFetching, isError } = useQuery<
    {
      teams: Teams[];
      error: string;
    },
    Error
  >({
    queryKey: ["team", key, league, season],
    queryFn: () => fetchTeams(key, league, season),
    refetchOnWindowFocus: false
  });
  return { data, isFetching, isError };
};

export default useTeam;

import { useQuery } from "react-query";
import { TeamData } from "../api/api";
import { fetchTeamData } from "../api/api";

const useTeamData = (
  key: string,
  league: number,
  season: number,
  team: number
) => {
  const { data, isFetching, isError } = useQuery<
    {
      teamData: TeamData;
      error: string;
    },
    Error
  >({
    queryKey: ["teamData", key, league, season, team],
    queryFn: () => fetchTeamData(key, league, season, team),
    refetchOnWindowFocus: false
  });
  return { data, isFetching, isError };
};

export default useTeamData;

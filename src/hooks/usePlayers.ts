import { useQuery } from "react-query";
import { PlayerData } from "../api/api";
import { fetchTeamPlayers } from "../api/api";

const usePlayers = (key: string, season: number, team: number) => {
  const { data, isFetching, isError } = useQuery<
    {
      playerData: PlayerData[];
      error: string;
    },
    Error
  >({
    queryKey: ["players", key, season, team],
    queryFn: () => fetchTeamPlayers(key, season, team),
    refetchOnWindowFocus: false
  });

  const players = data;
  const playersError = isError;
  return { players, isFetching, playersError };
};

export default usePlayers;

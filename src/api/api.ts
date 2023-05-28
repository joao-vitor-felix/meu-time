import axios from "axios";

export type Countries = {
  code?: string;
  flag: string;
  name: string;
};

export type League = {
  league: {
    id: number;
    name: string;
    type?: string;
    logo: string;
  };
  country?: {
    name: string;
    code: string;
    flag: string;
  };
  seasons?: {
    year: number;
    start: string;
    end: string;
    current: boolean;
    coverage: {
      fixtures: {
        events: boolean;
        lineups: boolean;
        statistics_fixtures: boolean;
        statistics_players: boolean;
      };
      standings: boolean;
      players: boolean;
      top_scorers: boolean;
      top_assists: boolean;
      top_cards: boolean;
      injuries: boolean;
      predictions: boolean;
      odds: boolean;
    };
  };
};

export type Teams = {
  team: {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
  };
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  };
};

export type TeamData = {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  form: string;
  fixtures: {
    played: {
      home: number;
      away: number;
      total: number;
    };
    wins: {
      home: number;
      away: number;
      total: number;
    };
    draws: {
      home: number;
      away: number;
      total: number;
    };
    loses: {
      home: number;
      away: number;
      total: number;
    };
  };
  goals: {
    for: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
      minute: {
        "0-15": {
          total: number;
          percentage: string;
        };
        "16-30": {
          total: number;
          percentage: string;
        };
        "31-45": {
          total: number;
          percentage: string;
        };
        "46-60": {
          total: number;
          percentage: string;
        };
        "61-75": {
          total: number;
          percentage: string;
        };
        "76-90": {
          total: number;
          percentage: string;
        };
        "91-105": {
          total: number;
          percentage: string;
        };
        "106-120": {
          total: number;
          percentage: string;
        };
      };
    };
    against: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
      minute: {
        "0-15": {
          total: number;
          percentage: string;
        };
        "16-30": {
          total: number;
          percentage: string;
        };
        "31-45": {
          total: number;
          percentage: string;
        };
        "46-60": {
          total: number;
          percentage: string;
        };
        "61-75": {
          total: number;
          percentage: string;
        };
        "76-90": {
          total: number;
          percentage: string;
        };
        "91-105": {
          total: number;
          percentage: string;
        };
        "106-120": {
          total: number;
          percentage: string;
        };
      };
    };
  };
  biggest: {
    streak: {
      wins: number;
      draws: number;
      loses: number;
    };
    wins: {
      home: string;
      away: string;
    };
    loses: {
      home: string;
      away: string;
    };
    goals: {
      for: {
        home: number;
        away: number;
      };
      against: {
        home: number;
        away: number;
      };
    };
  };
  clean_sheet: {
    home: number;
    away: number;
    total: number;
  };
  failed_to_score: {
    home: number;
    away: number;
    total: number;
  };
  penalty: {
    scored: {
      total: number;
      percentage: string;
    };
    missed: {
      total: number;
      percentage: string;
    };
    total: number;
  };
  lineups: {
    formation: string;
    played: number;
  }[];
  cards: {
    yellow: {
      "0-15": {
        total: number;
        percentage: string;
      };
      "16-30": {
        total: number;
        percentage: string;
      };
      "31-45": {
        total: number;
        percentage: string;
      };
      "46-60": {
        total: number;
        percentage: string;
      };
      "61-75": {
        total: number;
        percentage: string;
      };
      "76-90": {
        total: number;
        percentage: string;
      };
      "91-105": {
        total: number;
        percentage: string;
      };
      "106-120": {
        total: number;
        percentage: string;
      };
    };
    red: {
      "0-15": {
        total: number;
        percentage: string;
      };
      "16-30": {
        total: number;
        percentage: string;
      };
      "31-45": {
        total: number;
        percentage: string;
      };
      "46-60": {
        total: number;
        percentage: string;
      };
      "61-75": {
        total: number;
        percentage: string;
      };
      "76-90": {
        total: number;
        percentage: string;
      };
      "91-105": {
        total: number;
        percentage: string;
      };
      "106-120": {
        total: number;
        percentage: string;
      };
    };
  };
};

export type PlayerData = {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string;
      place: string;
      country: string;
    };
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
  };
  statistics: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string;
      season: number;
    };
    games: {
      appearences: number;
      lineups: number;
      minutes: number;
      number: number;
      position: string;
      rating: string;
      captain: boolean;
    };
    substitutes: {
      in: number;
      out: number;
      bench: number;
    };
    shots: {
      total: number;
      on: number;
    };
    goals: {
      total: number;
      conceded: number;
      assists: number;
      saves: number;
    };
    passes: {
      total: number;
      key: number;
      accuracy: number;
    };
    tackles: {
      total: number;
      blocks: number;
      interceptions: number;
    };
    duels: {
      total: number;
      won: number;
    };
    dribbles: {
      attempts: number;
      success: number;
      past: number;
    };
    fouls: {
      drawn: number;
      committed: number;
    };
    cards: {
      yellow: number;
      yellowred: number;
      red: number;
    };
    penalty: {
      won: number;
      commited: number;
      scored: number;
      missed: number;
      saved: number;
    };
  }[];
};

export const fetchCountries = async (
  key: string
): Promise<{
  countries: Countries[];
  error: string;
}> => {
  const response = await axios.get(
    "https://v3.football.api-sports.io/countries",
    {
      headers: {
        "x-apisports-key": key
      }
    }
  );

  return {
    countries: response.data.response,
    error: response.data.errors?.token
  };
};

export const fetchLeagues = async (
  key: string,
  country: string
): Promise<{ leagues: League[]; error: string }> => {
  const response = await axios.get(
    `https://v3.football.api-sports.io/leagues?country=${country}`,
    {
      headers: {
        "x-apisports-key": key
      }
    }
  );

  return {
    leagues: response.data.response,
    error: response.data.errors?.token
  };
};

export const fetchTeams = async (
  key: string,
  league: number,
  season: number
): Promise<{ teams: Teams[]; error: string }> => {
  const response = await axios.get(
    `https://v3.football.api-sports.io/teams?league=${league}&season=${season}`,
    {
      headers: {
        "x-apisports-key": key
      }
    }
  );

  return {
    teams: response.data.response,
    error: response.data.errors?.token
  };
};

export const fetchTeamData = async (
  key: string,
  league: number,
  season: number,
  team: number
): Promise<{ teamData: TeamData; error: string }> => {
  const response = await axios.get(
    `https://v3.football.api-sports.io/teams/statistics?season=${season}&team=${team}&league=${league}`,
    {
      headers: {
        "x-apisports-key": key
      }
    }
  );

  return {
    teamData: response.data.response,
    error: response.data.errors?.token
  };
};

export const fetchTeamPlayers = async (
  key: string,
  season: number,
  team: number
): Promise<{ playerData: PlayerData[]; error: string }> => {
  const response = await axios.get(
    `https://v3.football.api-sports.io/players?season=${season}&team=${team}`,
    {
      headers: {
        "x-apisports-key": key
      }
    }
  );

  return {
    playerData: response.data.response,
    error: response.data.errors?.token
  };
};

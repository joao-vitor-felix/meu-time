import axios from "axios";

// export const api = axios.create({
//   baseURL: "https://v3.football.api-sports.io",
//   headers: {
//     "x-apisports-key": "ae7fb7d2e733a93339ce809414adc04b"
//   }
// });

export type Countries = {
  code?: string;
  flag: string;
  name: string;
};

type League = {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: {
    name: string;
    code: string;
    flag: string;
  };
  seasons: {
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

type Teams = {
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

type TeamData = {
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

export const fetchCountries = async (
  key = "ae7fb7d2e733a93339ce809414adc04b"
): Promise<Countries[]> => {
  const response = await axios.get(
    process.env.NODE_ENV !== "production"
      ? "../../mocks/countries.json"
      : "https://v3.football.api-sports.io/countries",
    {
      headers: {
        "x-apisports-key": key
      }
    }
  );

  console.log(response.data.response);
  return response.data.response;
};

export const fetchLeagues = async (
  key = "ae7fb7d2e733a93339ce809414adc04b",
  country: string
): Promise<League[]> => {
  const response = await axios.get(
    `https://v3.football.api-sports.io/leagues?country=${country}`,
    {
      headers: {
        "x-apisports-key": key
      }
    }
  );

  console.log(response.data.response);
  return response.data.response;
};

export const fetchTeams = async (
  key = "ae7fb7d2e733a93339ce809414adc04b",
  league: number,
  season: number
): Promise<Teams[]> => {
  const response = await axios.get(
    `https://v3.football.api-sports.io/teams?league=${league}&season=${season}`,
    {
      headers: {
        "x-apisports-key": key
      }
    }
  );

  console.log(response.data.response);
  return response.data.response;
};

export const fetchTeamData = async (
  key = "ae7fb7d2e733a93339ce809414adc04b",
  league: number,
  season: number,
  team: number
): Promise<TeamData[]> => {
  const response = await axios.get(
    `https://v3.football.api-sports.io/teams/statistics?season=${season}&team=${team}&league=${league}`,
    {
      headers: {
        "x-apisports-key": key
      }
    }
  );

  console.log(response.data.response);
  return response.data.response;
};

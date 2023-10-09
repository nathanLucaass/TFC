import { Match, getAllMatchesService } from './matches.services';

type TeamStats = {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
};
const createStats = (teamStatsMap: Map<number, TeamStats>, match: Match) => teamStatsMap
  .get(match.homeTeamId) || {
  name: match.homeTeam.teamName,
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
};

const homeTeamsPerfomaceService = async (): Promise<TeamStats[]> => {
  const matches = await getAllMatchesService();
  const teamStatsMap = new Map<number, TeamStats>();
  const filteredMatches = matches.data.filter((match) => match.homeTeamId && !match.inProgress);
  filteredMatches.forEach((match) => {
    const teamStats = createStats(teamStatsMap, match);
    teamStats.totalGames += 1;
    teamStats.goalsFavor += match.homeTeamGoals;
    teamStats.goalsOwn += match.awayTeamGoals;
    if (match.homeTeamGoals > match.awayTeamGoals) {
      teamStats.totalPoints += 3;
      teamStats.totalVictories += 1;
    } else if (match.homeTeamGoals === match.awayTeamGoals) {
      teamStats.totalPoints += 1;
      teamStats.totalDraws += 1;
    } else { teamStats.totalLosses += 1; }
    teamStatsMap.set(match.homeTeamId, teamStats);
  });
  return Array.from(teamStatsMap.values());
};

export default homeTeamsPerfomaceService;

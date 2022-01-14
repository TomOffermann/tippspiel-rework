interface User {
  _id?: string;
  userId: number;
  name: string;
  email: string;
  password?: string;
}

interface Bet {
  date: Date;
  gameId: number;
  userId: string;
  scoreA: number;
  scoreB: number;
}

interface Team {
  name: string;
  score: number;
  flagUrl: string;
}

interface Game {
  date: Date;
  gameId: number;
  teamA: Team;
  teamB: Team;
}

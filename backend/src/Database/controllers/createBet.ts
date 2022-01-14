import BetModel from "../models/BetModel";

export default async function createBet(bet: Bet) {
  let newBet = new BetModel({
    date: bet.date,
    gameId: bet.gameId,
    userId: bet.userId,
    scoreA: bet.scoreA,
    scoreB: bet.scoreB,
  });
  newBet.save((err: any) => {
    if (err) throw err;
  });
}

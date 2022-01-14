import BetModel from "../models/BetModel";

export default async function deleteBet(bet: Bet) {
  await BetModel.deleteOne({
    gameId: bet.gameId,
    userId: bet.userId,
  });
}

import BetModel from "../../Database/models/BetModel";
import { Request, Response } from "express";

export default async function (req: Request, res: Response) {
  const gameId = req?.params?.gameId ?? "";
  const userId = req?.params?.userId ?? "";
  let bets: Bet[] = await BetModel.find({ gameId: gameId, userId: userId });
  let singleBet: Bet = bets?.[0];
  if (singleBet) {
    singleBet = {
      date: singleBet.date,
      gameId: singleBet.gameId,
      userId: singleBet.userId,
      scoreA: singleBet.scoreA,
      scoreB: singleBet.scoreB,
    };
    res.status(200).json({ singleBet });
  } else {
    res.sendStatus(404);
  }
}

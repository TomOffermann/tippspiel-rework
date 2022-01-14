import BetModel from "../../Database/models/BetModel";
import { Request, Response } from "express";

export default async function (req: Request, res: Response) {
  let bets: Bet[] = await BetModel.find({});
  bets = bets.map((e) => {
    return {
      date: e.date,
      gameId: e.gameId,
      userId: e.userId,
      scoreA: e.scoreA,
      scoreB: e.scoreB,
    };
  });
  if (bets) {
    res.status(200).json({ bets });
  } else {
    res.sendStatus(404);
  }
}

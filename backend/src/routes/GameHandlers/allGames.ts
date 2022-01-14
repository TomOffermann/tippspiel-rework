import GameModel from "../../Database/models/GameModel";
import { Request, Response } from "express";

export default async function (req: Request, res: Response) {
  let games: Game[] = await GameModel.find({});
  games = games.map((e) => {
    return {
      gameId: e.gameId,
      date: e.date,
      teamA: e.teamA,
      teamB: e.teamB,
    };
  });
  if (games) {
    res.status(200).json({ games });
  } else {
    res.sendStatus(404);
  }
}

import GameModel from "../../Database/models/GameModel";
import { Request, Response } from "express";

export default async function (req: Request, res: Response) {
  const gameId = req?.params?.gameId ?? "";
  let games: Game[] = await GameModel.find({ gameId: gameId });
  let singleGame: Game = games?.[0];
  singleGame = {
    gameId: singleGame.gameId,
    date: singleGame.date,
    teamA: singleGame.teamA,
    teamB: singleGame.teamB,
  };
  if (singleGame) {
    res.status(200).json({ singleGame });
  } else {
    res.sendStatus(404);
  }
}

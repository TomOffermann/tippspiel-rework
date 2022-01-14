import UserModel from "../../Database/models/UserModel";
import { Request, Response } from "express";

export default async function (req: Request, res: Response) {
  let users: User[] = await UserModel.find({});
  users = users.map((e) => {
    return {
      userId: e.userId,
      name: e.name,
      email: e.email,
    };
  });
  if (users) {
    res.status(200).json({ users });
  } else {
    res.sendStatus(404);
  }
}

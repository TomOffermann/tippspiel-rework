import UserModel from "../../Database/models/UserModel";
import { Request, Response } from "express";

export default async function (req: Request, res: Response) {
  const userId = req?.params?.userId ?? "";
  let singleUser: User = await UserModel.findOne({ userId: userId });
  if (singleUser) {
    singleUser = {
      userId: singleUser.userId,
      name: singleUser.name,
      email: singleUser.email,
    };
    res.status(200).json({ singleUser });
  } else {
    res.sendStatus(404);
  }
}

import UserModel from "../models/UserModel";
import Auth from "../../Auth/authFunctions";

export default async function createMultipleUsers(users: User[]) {
  const currentUserId =
    (await UserModel.find({})
      ?.sort({ userId: -1 })
      ?.limit(1)
      ?.then((e) => e?.[0]?.userId)) ?? -1;
  for (let i = 0; i < users.length; i++) {
    users[i].userId = currentUserId + 1 + i;
    users[i].password = await Auth.hash(users[i]?.password ?? "");
  }
  await UserModel.insertMany(users);
}

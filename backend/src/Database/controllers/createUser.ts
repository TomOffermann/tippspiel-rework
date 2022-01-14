import UserModel from "../models/UserModel";
import Auth from "../../Auth/authFunctions";

export default async function createUser(user: User) {
  const currentUserId =
    (await UserModel.find({})
      ?.sort({ userId: -1 })
      ?.limit(1)
      ?.then((e) => e?.[0]?.userId)) ?? -1;
  let hashedPassword = await Auth.hash(user?.password ?? "");
  console.log(currentUserId)
  let newUser = new UserModel({
    userId: currentUserId + 1,
    name: user.name,
    email: user.email,
    password: hashedPassword,
  });
  newUser.save((err: any) => {
    if (err) throw err;
  });
}

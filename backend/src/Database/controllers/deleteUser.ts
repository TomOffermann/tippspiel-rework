import UserModel from "../models/UserModel";

export default async function deleteUser(user: User) {
  if (user._id) {
    await UserModel.findByIdAndDelete(user._id);
  } else {
    await UserModel.deleteOne({
      name: user.name,
      userId: user.userId,
      email: user.email,
    });
  }
}

interface User {
  _id?: string;
  userId: number;
  name: string;
  email: string;
  password?: string;
}

export type {
  User
}
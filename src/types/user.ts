export type UserRequestBody = {
  email: string;
  nickname: string;
  password: string;
};

export type UserLoginBody = Omit<UserRequestBody, "email">;

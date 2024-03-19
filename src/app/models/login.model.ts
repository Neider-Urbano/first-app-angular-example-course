export interface login {
  name: string;
  email: string;
}

export type LoginData = login;

export type TokenData = {
  token: string;
};

import UserStore from "../store/userStore";

export interface IUser {}
export interface IUserStore {
  user: UserStore;
}
export interface ILoginData {
  username: string;
  password: string;
}
export interface IRegistrationData {
  username: string;
  password: string;
  name: string;
  lastname: string;
  email: string;
}

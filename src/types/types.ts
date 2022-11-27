export interface IUser {
  id: string;
  fullname?: string;
  email: string;
  dateReg: string;
  lastLogin: string;
  status: string;
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
export interface IUserApi {
  id: string;
  name: string | null;
  lastname: string | null;
  email: string;
  dateregistration: string;
  lastlogin: string;
  status: string;
}
export interface IDataApi {
  users: IUserApi[];
}

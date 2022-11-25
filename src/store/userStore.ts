import { makeAutoObservable } from "mobx";
import { IUser } from "../types/types";
class UserStore {
  isAuth: boolean = false;
  user: IUser | {} = {};
  users: IUser[] = [
    {
      id: "1",
      fullname: "Pavel Ch",
      email: "hui",
      dateReg: "20.20.20",
      lastLogin: "20.20.20",
      status: "online",
    },
    {
      id: "2",
      fullname: "Pavel Ch",
      email: "hui",
      dateReg: "20.20.20",
      lastLogin: "20.20.20",
      status: "online",
    },
    {
      id: "3",
      fullname: "Pavel Ch",
      email: "hui",
      dateReg: "20.20.20",
      lastLogin: "20.20.20",
      status: "online",
    },
  ];
  usersSelect: string[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  selectUser(id: string) {
    this.usersSelect.push(id);
  }
  unSelectUser(id: string) {
    this.usersSelect = this.usersSelect.filter((userId) => userId !== id);
  }
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  get auth() {
    return this.isAuth;
  }
}

export default new UserStore();

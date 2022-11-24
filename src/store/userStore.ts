import { makeAutoObservable } from "mobx";
import { IUser } from "../types/types";

export default class UserStore {
  private _isAuth: boolean;
  private _user: {};
  private _users: IUser[];
  constructor() {
    this._isAuth = true;
    this._user = {};
    this._users = [];
    makeAutoObservable(this);
  }
  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }
  setUser(user: IUser) {
    this._user = user;
  }
  setUsers(users: IUser[]) {
    this._users = users;
  }
  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
  get users() {
    return this._users;
  }
}

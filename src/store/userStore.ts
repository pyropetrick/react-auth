import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IDataApi, IUser, IUserApi } from "../types/types";
import jwt_decode from "jwt-decode";

const regX = new RegExp(/[TZ]/g);
const url = `${process.env.REACT_APP_API_URL}api/`;

const findUserIdx = (id: string, users: IUser[]): number =>
  users.findIndex((user) => id === user.id);
class UserStore {
  isAuth: boolean = false;
  users: IUser[] = [];
  usersSelect: string[] = [];
  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
        deep: true,
      },
    );
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
  setUsers(data: IDataApi) {
    const { users } = data;
    this.users = users.map(({ id, name, lastname, datereg, lastlogin, email, status }) => ({
      id,
      fullname: `${name ? name : ""} ${lastname ? lastname : ""}`,
      lastLogin: lastlogin.replaceAll(regX, " "),
      dateReg: datereg.replaceAll(regX, " "),
      email,
      status,
    }));
  }
  *deleteUser(usersId: string[]) {
    yield axios
      .delete(`${url}user/delete`, { params: { usersId } })
      .then((res) => {
        const idxs: number[] = usersId.map((id) => findUserIdx(id, this.users));
        idxs.forEach((idx: number) => this.users.splice(idx));
        this.users = this.users.map((user) => user);
      })
      .catch((e) => alert(e.response.data.message));
  }
  *blockUser(usersId: string[]) {
    yield axios
      .put(`${url}user/block`, { usersId })
      .then((res) => {
        const idxs: number[] = usersId.map((id) => findUserIdx(id, this.users));
        idxs.forEach((idx: number) => (this.users[idx].status = "blocked"));
        this.users = this.users.map((user) => user);
      })
      .catch((e) => console.log(e));
  }
  *unBlockUser(usersId: string[]) {
    yield axios
      .put(`${url}user/unblock`, { usersId })
      .then((res) => {
        const idxs: number[] = usersId.map((id) => findUserIdx(id, this.users));
        idxs.forEach((idx: number) => (this.users[idx].status = "offline"));
        this.users = this.users.map((user) => user);
      })
      .catch((e) => console.log(e));
  }
  *logoutUser(usersId: string[]) {
    yield axios
      .put(`${url}user/logout`, { usersId })
      .then((res) => {
        const token: any = localStorage.getItem("token");
        const tokenDecode: any = jwt_decode(token);
        usersId.forEach((id) => {
          if (tokenDecode.id === id) {
            this.setAuth(false);
            alert(res.data.message);
          }
        });
      })
      .catch((e) => console.log(e));
  }

  *getUsers() {
    yield axios
      .get(url + "users")
      .then((res) => this.setUsers(res.data))
      .catch((e) => console.log(e));
  }

  get isAuthificate() {
    return this.isAuth;
  }
}

export default new UserStore();

import { ChangeEvent } from "react";
import { IUser } from "../types/types";

interface IProps {
  user: IUser;
  setUser: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TableRow = ({ user, setUser }: IProps) => {
  const { id, fullname, email, dateReg, lastLogin, status } = user;
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          className="form-check-input"
          value={id}
          id="inputRow"
          onChange={setUser}
          name="inputRow"
        />
      </td>
      <td>{id}</td>
      <td>{fullname}</td>
      <td>{email}</td>
      <td>{dateReg}</td>
      <td>{lastLogin}</td>
      <td>{status}</td>
    </tr>
  );
};

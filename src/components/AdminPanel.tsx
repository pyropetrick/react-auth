import { observer } from "mobx-react-lite";
import { ChangeEvent } from "react";
import { Table } from "react-bootstrap";
import { TableRow } from ".";
import userStore from "../store/userStore";

export const AdminPanel = observer(() => {
  const handleUser = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked
      ? userStore.selectUser(event.target.value)
      : userStore.unSelectUser(event.target.value);
  };

  return (
    <Table striped bordered className="w-75 mx-auto">
      <thead>
        <tr>
          <th></th>
          <th>id</th>
          <th>Full name</th>
          <th>Email</th>
          <th>Date Registration</th>
          <th>Last Login</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {userStore.users.map((user) => (
          <TableRow user={user} key={user.id} setUser={handleUser} />
        ))}
      </tbody>
    </Table>
  );
});

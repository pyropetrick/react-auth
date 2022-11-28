import { observer } from "mobx-react-lite";
import { ChangeEvent, useEffect } from "react";
import { Table } from "react-bootstrap";
import { TableRow } from ".";
import userStore from "../store/userStore";

export const AdminPanel = observer(() => {
  const { selectUser, unSelectUser, getUsers } = userStore;
  const handleUser = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? selectUser(event.target.value) : unSelectUser(event.target.value);
  };
  const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    const inputs: NodeListOf<HTMLElement> = document.getElementsByName("inputRow");
    event.target.checked
      ? inputs.forEach((input: any) => {
          selectUser(input.value);
          input.checked = true;
        })
      : inputs.forEach((input: any) => {
          unSelectUser(input.value);
          input.checked = false;
        });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Table striped bordered className="w-75 mx-auto">
      <thead>
        <tr>
          <th>
            <input type="checkbox" onChange={handleSelectAll} />
          </th>
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

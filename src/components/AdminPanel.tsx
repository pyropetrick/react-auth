import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { TableRow } from ".";

export const AdminPanel = () => {
  const [usersSelect, setUserSelect] = useState();
  const users = [
    {
      id: "1",
      fullname: "Pavel Ch",
      email: "hui",
      dateReg: "20.20.20",
      lastLogin: "20.20.20",
      status: "online",
    },
  ];
  const handleUser = (event: any) => {
    console.log(event.target.value);
    console.log(event.target.checked);
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
        {users.map((user) => (
          <TableRow user={user} key={user.id} setUser={handleUser} />
        ))}
      </tbody>
    </Table>
  );
};

import React from "react";

const UserRow = ({ userData }) => {
  const { fullName, _id, email, role, phone, age } = userData;
  return (
    <tr>
      <th>{_id}</th>
      <td>{fullName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{age}</td>
      <td>{role}</td>
    </tr>
  );
};

export default UserRow;

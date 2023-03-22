import React from "react";

const UserRow = ({ userData, setSelectedIds, selectedIds }) => {
  const { fullName, _id, email, role, phone, age } = userData;
  const handleCheckboxClick = () => {
    if (selectedIds.includes(_id)) {
      setSelectedIds(selectedIds.filter((id) => id !== _id));
    } else {
      setSelectedIds([...selectedIds, _id]);
    }
  };
  return (
    <tr>
      <th>
        <input
          onChange={() => handleCheckboxClick(_id)}
          type="checkbox"
          className="checkbox"
        />
      </th>
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

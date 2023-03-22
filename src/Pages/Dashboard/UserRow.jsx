import React from "react";

const UserRow = ({ userData, setSelectedIds, selectedIds }) => {
  const { fullName, _id, email, role, phone, age, isBlocked } = userData;
  const handleCheckboxClick = () => {
    if (selectedIds.includes(_id)) {
      setSelectedIds(selectedIds.filter((id) => id !== _id));
    } else {
      setSelectedIds([...selectedIds, _id]);
    }
  };
  return (
    <tr className={`${isBlocked && "text-red-600"}`}>
      <th>
        {!isBlocked && (
          <input
            onChange={() => handleCheckboxClick(_id)}
            type="checkbox"
            className="checkbox"
          />
        )}
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

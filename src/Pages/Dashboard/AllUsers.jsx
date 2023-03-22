import React, { useEffect, useState } from "react";
import { axiosInstace } from "../../utils/axiosInstance";
import UserRow from "./UserRow";

const AllUsers = () => {
  // I will update the url based on condition such as if the other queries are present or not
  const [allUsers, setAllUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // bulk selection
  const [selectedIds, setSelectedIds] = useState([]);
  let queryString = "";
  if (fullName) {
    queryString += `fName=${fullName}&`;
  }
  if (email) queryString += `email=${email}&`;
  if (phone) queryString += `phone=${phone}&`;

  const token = localStorage.getItem("token");
  let queryUrl = `/all-users?page=${currentPage}&limit=10&${queryString}`;
  // Function to fetch the users data
  let response;
  async function fetchUsers() {
    response = await axiosInstace(queryUrl, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setTotalUsers(response?.data?.total);
    setAllUsers(response.data?.data);
  }

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);
  const handleSearchFormSubmit = async (e) => {
    e.preventDefault();
    try {
      response = await axiosInstace(queryUrl, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (response?.status === 200) {
        const usersExceptAdmin = response?.data?.data.filter(
          (user) => user.role !== "admin"
        );
        setAllUsers(usersExceptAdmin);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(selectedIds);
  //   pagination
  const totalPages = Math.ceil(totalUsers / 10);
  //   console.log(totalPages);
  //   console.log(allUsers);
  return (
    <div>
      <div className="bg-gray-800 text-white px-8 py-2">
        <h2 className="text-2xl">All Users</h2>
      </div>

      {/* search container */}
      <form
        onSubmit={handleSearchFormSubmit}
        className="my-6 flex justify-end px-6"
      >
        <input
          onChange={(e) => setFullName(e.target.value.toLowerCase())}
          type="text"
          value={fullName}
          placeholder="Search by Full Name"
          className="input input-bordered mx-2 w-full max-w-xs"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="tel"
          placeholder="Search by Phone"
          className="input input-bordered mx-2 w-full max-w-xs"
        />
        <input
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          value={email}
          type="email"
          placeholder="Search by Email"
          className="input input-bordered mx-2 w-full max-w-xs"
        />

        <button
          disabled={!fullName && !email && !phone}
          type="submit"
          className="btn mx-2"
        >
          Search
        </button>
      </form>

      {/* table */}
      {selectedIds.length > 0 && (
        <div>
          <button className="btn btn-error btn-sm text-white mx-6 my-3">
            Block Selected Users
          </button>
        </div>
      )}
      <div className="overflow-x-auto mx-7">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Select</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((userData) => (
              <UserRow
                userData={userData}
                setSelectedIds={setSelectedIds}
                selectedIds={selectedIds}
              />
            ))}
          </tbody>
        </table>
        <div className="flex justify-end">
          <div className="btn-group">
            {[...Array(totalPages).keys()].map((number) => (
              <button
                onClick={() => setCurrentPage(number + 1)}
                className={`btn mx-1 btn-sm ${
                  number + 1 === currentPage && "btn-active"
                }`}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

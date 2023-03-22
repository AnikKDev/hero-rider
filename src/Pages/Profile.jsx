import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstace } from "../utils/axiosInstance";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      const fetchProfileData = async () => {
        const { data } = await axiosInstace("/me", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUserData(data);
      };
      fetchProfileData();
    } else {
      navigate("/signin");
    }
  }, [token]);
  console.log(userData);
  const {
    address,
    age,
    area,
    drivingLicencePicture,
    email,
    role,
    nidPicture,
    phone,
    fullName,
    profilePicture,
    carInformation,
    vehicleType,
  } = userData || {};
  /* address
: 
"123 Main Street"
age
: 
23
area
: 
"New York"
carInformation
: 
{name: 'Toyota', model: 'Camry', plateNumber: 'ABC123'}
createdAt
: 
"2023-03-21T14:37:36.510Z"
drivingLicencePicture
: 
"https://example.com/images/license.jpg"
email
: 
"johndosase@example.com"
fullName
: 
"anik kanti dev"
isAdmin
: 
false
nidPicture
: 
"https://example.com/images/nid.jpg"
password
: 
"$2b$10$fy0wBBs8BpAFqodazekdcOPbDEh8rW6ujyisHxKU4fQDVfbbq5Jwu"
phone
: 
"555-555-1212"
profilePicture
: 
"https://example.com/images/profile.jpg"
role
: 
"rider"
updatedAt
: 
"2023-03-21T14:37:36.510Z"
vehicleType
: 
"car"
__v
: 
0
_id
: 
"6419c130a31729a2dd5bc7f1"
   */
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Personal Information */}
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="profilePicture"
                  className="block text-sm font-medium text-gray-700"
                >
                  Profile Picture
                </label>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={profilePicture} />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <p
                  id="name"
                  className="mt-1 block text-lg font-medium text-gray-900"
                >
                  {fullName}
                </p>
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700"
                >
                  Age
                </label>
                <p
                  id="age"
                  className="mt-1 block text-lg font-medium text-gray-900"
                >
                  {age}
                </p>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <p
                  id="email"
                  className="mt-1 block text-lg font-medium text-gray-900"
                >
                  {email}
                </p>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <p
                  id="phone"
                  className="mt-1 block text-lg font-medium text-gray-900"
                >
                  {phone}
                </p>
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <p
                  id="role"
                  className="mt-1 block text-lg font-medium text-gray-900 capitalize"
                >
                  {role}
                </p>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <p
                  id="address"
                  className="mt-1 block text-lg font-medium text-gray-900 capitalize"
                >
                  {address}
                </p>
              </div>
              {userData?.role === "rider" && (
                <div>
                  <label
                    htmlFor="area"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Area
                  </label>
                  <p
                    id="area"
                    className="mt-1 block text-lg font-medium text-gray-900 capitalize"
                  >
                    {area}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Car Information */}
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Car Information
            </h3>
            {userData?.role === "rider" ? (
              <div className="mt-5 flex flex-col space-y-4">
                <div>
                  <label
                    htmlFor="make"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <p
                    id="make"
                    className="mt-1 block text-lg font-medium text-gray-900 capitalize"
                  >
                    {carInformation?.name}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="model"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Model
                  </label>
                  <p
                    id="model"
                    className="mt-1 block text-lg font-medium text-gray-900"
                  >
                    {carInformation?.model}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name Palate
                  </label>
                  <p
                    id="year"
                    className="mt-1 block text-lg font-medium text-gray-900"
                  >
                    {carInformation?.plateNumber}
                  </p>
                </div>
              </div>
            ) : (
              <h3 className="text-2xl">
                You must need to be registered as a rider to see your car
                information
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

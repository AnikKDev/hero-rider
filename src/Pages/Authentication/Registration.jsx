import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useEffect } from "react";
import { JOIN_STATE_CONTEXT } from "../../App";
import axios from "axios";
import { axiosInstace } from "../../utils/axiosInstance";
import { toast } from "react-hot-toast";
import Loading from "../../utils/Loading";
// import useToken from '../../hooks/useToken';
const Registration = () => {
  // accessing join state

  const { joinState, setIsLoggedIn, isLoggedIn } =
    useContext(JOIN_STATE_CONTEXT);
  const [isRider, setIsRider] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (joinState !== "rider") setIsRider(false);
  }, [joinState]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  // image uploading function
  async function uploadImage(form, image) {
    form.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${
      import.meta.env.VITE_IMGBB_API
    }`;
    setIsLoading(true);
    const { data } = await axios.post(url, form);
    return data.data.url;
  }
  const onSubmit = async (formData) => {
    let userInformation = {};
    if (joinState === "rider") {
      const {
        licensePicture,
        NID,
        area,
        profilePicture,
        name,
        email,
        phone,
        age,
        address,
        vehicleType,
        vehicleName,
        vehicleModel,
        namePalete,
        password,
        confirmPassword,
      } = formData || {};
      const nidImage = NID[0];
      const licenseImage = licensePicture[0];
      const profileImage = profilePicture[0];

      const imgbbForm = new FormData();

      // Upload all images to ImgBB using Promise.all
      const uploads = Promise.all([
        uploadImage(imgbbForm, nidImage),
        uploadImage(imgbbForm, licenseImage),
        uploadImage(imgbbForm, profileImage),
      ]);

      // Wait for all uploads to complete and store the URLs in an array or an object
      const [nidUrl, licenseUrl, profileUrl] = await uploads;
      // const imageUrls = { nidUrl, licenseUrl, profileUrl };

      // Do something with the imageUrls object
      // console.log(imageUrls);
      userInformation = {
        fullName: name,
        email,
        address,
        phone,
        age,
        role: "rider",
        drivingLicencePicture: licenseUrl,
        area,
        nidPicture: nidUrl,
        profilePicture: profileUrl,
        carInformation: {
          name: vehicleName,
          model: vehicleModel,
          plateNumber: namePalete,
        },
        vehicleType,
        password,
        confirmPassword,
      };
    } else if (joinState === "learner") {
      const {
        NID,
        profilePicture,
        name,
        email,
        phone,
        age,
        address,
        vehicleType,
        password,
        confirmPassword,
      } = formData || {};
      const nidImage = NID[0];
      const profileImage = profilePicture[0];

      const imgbbForm = new FormData();

      // Upload all images to ImgBB using Promise.all
      const uploads = Promise.all([
        uploadImage(imgbbForm, nidImage),
        uploadImage(imgbbForm, profileImage),
      ]);

      // Wait for all uploads to complete and store the URLs in an array or an object
      const [nidUrl, profileUrl] = await uploads;
      // const imageUrls = { nidUrl, licenseUrl, profileUrl };

      // Do something with the imageUrls object
      // console.log(imageUrls);
      userInformation = {
        fullName: name,
        email,
        address,
        phone,
        age,
        role: "learner",
        nidPicture: nidUrl,
        profilePicture: profileUrl,
        vehicleType,
        password,
        confirmPassword,
      };
    }
    // posting user
    try {
      setIsLoading(true);
      const response = await axiosInstace.post("/register", userInformation);

      localStorage.setItem("token", response.data?.data?.token);
      setIsLoggedIn(true);
      setIsLoading(false);
      navigate("/profile");
    } catch (err) {
      setIsLoading(false);
      toast.error(err?.response?.data?.message);
    }
  };

  if (isLoading) return <Loading />;
  return (
    <div className=" flex justify-center items-center">
      <div className="card w-full md:w-2/4 items-center shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
          <h1 className="text-center text-3xl text-primary font-bold font-sans">
            Join as {isRider ? "Rider" : "Learner"}
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.email?.type === "required" && "Name is required"}
            </span>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.email?.type === "required" && "Email is required"}
            </span>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <input
              {...register("profilePicture", { required: true })}
              type="file"
              placeholder="Profile Picture"
              className="file-input file-input-bordered"
            />
            <span className="label-text text-error">
              {errors.profilePicture?.type === "required" &&
                "Profile Picture is required"}
            </span>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              {...register("phone", { required: true })}
              type="tel"
              placeholder="phone"
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.phone?.type === "required" && "phone is required"}
            </span>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              {...register("age", { required: true })}
              type="number"
              placeholder="age"
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.age?.type === "required" && "phone is required"}
            </span>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <textarea
              {...register("address", { required: true })}
              type="text"
              placeholder="address"
              className="textarea textarea-bordered"
            />
            <span className="label-text text-error">
              {errors.address?.type === "required" && "Address is required"}
            </span>
          </div>
          {/* vehicle info */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Vehicle Type</span>
            </label>
            <select
              {...register("vehicleType")}
              className="select select-bordered w-full"
            >
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>
            {errors.phone?.type === "vehicleType" && "Vehicle type is required"}
          </div>

          {isRider && (
            <>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Area</span>
                </label>
                <textarea
                  {...register("area", { required: true })}
                  type="text"
                  placeholder="area"
                  className="textarea textarea-bordered"
                />
                <span className="label-text text-error">
                  {errors.area?.type === "required" && "Area is required"}
                </span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Driving License Picture</span>
                </label>
                <input
                  {...register("licensePicture", { required: true })}
                  type="file"
                  placeholder="Driving License Picture"
                  className="file-input file-input-bordered"
                />
                <span className="label-text text-error">
                  {errors.licensePicture?.type === "required" &&
                    "Driving License Picture is required"}
                </span>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Vehicle Name</span>
                </label>
                <input
                  {...register("vehicleName", { required: true })}
                  type="text"
                  placeholder="Vehicle Name"
                  className="input input-bordered"
                />
                <span className="label-text text-error">
                  {errors.vehicleName?.type === "required" &&
                    "Vehicle Name is required"}
                </span>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Vehicle Model</span>
                </label>
                <input
                  {...register("vehicleModel", { required: true })}
                  type="text"
                  placeholder="Vehicle Model"
                  className="input input-bordered"
                />
                <span className="label-text text-error">
                  {errors.vehicleModel?.type === "required" &&
                    "Vehicle Model is required"}
                </span>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name Palete</span>
                </label>
                <input
                  {...register("namePalete", { required: true })}
                  type="text"
                  placeholder="Name Palete"
                  className="input input-bordered"
                />
                <span className="label-text text-error">
                  {errors.namePalete?.type === "required" &&
                    "Name Palete is required"}
                </span>
              </div>
            </>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text">NID Picture</span>
            </label>
            <input
              {...register("NID", { required: true })}
              type="file"
              placeholder="NID Picture"
              className="file-input file-input-bordered"
            />
            <span className="label-text text-error">
              {errors.NID?.type === "required" && "NID Picture is required"}
            </span>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.password && "Password is required"}
            </span>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              {...register("confirmPassword", { required: true })}
              type="password"
              placeholder="re-type password"
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.confirmPassword && "Password is required"}
            </span>
          </div>
          <div className="form-control mt-6">
            <button disabled={isLoading} type="submit" className="btn">
              Register
            </button>
          </div>
        </form>

        <label className="mt-2">
          Already have an account?{" "}
          <Link to="/signin" className="btn btn-link text-black underline px-0">
            Login
          </Link>
        </label>
      </div>
    </div>
  );
};

export default Registration;

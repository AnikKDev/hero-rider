import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { JOIN_STATE_CONTEXT } from "../../App";
import { axiosInstace } from "../../utils/axiosInstance";
import Loading from "../../utils/Loading";
// import useToken from '../../hooks/useToken';
const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn, isLoggedIn, setRefreshStatus } =
    useContext(JOIN_STATE_CONTEXT);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (formData) => {
    try {
      setIsLoading(true);
      const loginInfo = {
        email: formData.email,
        password: formData.password,
      };
      const response = await axiosInstace.post("/signin", loginInfo);
      // console.log(response);
      if (response?.data?.success) {
        setIsLoading(false);
        localStorage.setItem("token", response?.data?.data?.token);
        setIsLoggedIn(true);
        setRefreshStatus(true);
        console.log(response);
        if (response?.data?.data?.others?.role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/profile");
        }
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      toast.error(err?.response?.data?.message || "Server error");
    }
  };

  if (isLoading) return <Loading />;
  return (
    <div className=" flex justify-center lg:min-h-screen items-center">
      <div className="card w-full md:w-96 items-center shadow-2xl bg-base-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body w-full lg:w-96"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            <span className="label-text text-error">
              {errors.email?.type === "required" && "Email is required"}
            </span>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            <span className="label-text text-error">
              {errors.password?.type === "required" && "Password is required"}
            </span>
          </div>
          <div className="form-control mt-6">
            <button disabled={isLoading} type="submit" className="btn ">
              Login
            </button>
          </div>
        </form>

        <label className="mt-2">
          Don't have an account?{" "}
          <Link
            to="/join-as"
            className="btn btn-link text-black underline px-0"
          >
            JOIN
          </Link>
        </label>
      </div>
    </div>
  );
};

export default Signin;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { JOIN_STATE_CONTEXT } from "../../App";

const ChooseJoinState = () => {
  const { setJoinState } = useContext(JOIN_STATE_CONTEXT);
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center lg:min-h-screen items-center">
      <div className="card w-full md:w-96 items-center shadow-2xl bg-base-100">
        <div className="card-body w-full lg:w-96">
          <div className="">
            <button
              onClick={() => {
                navigate("/register");
                setJoinState("rider");
              }}
              className="w-full btn-primary btn text-white font-bold"
            >
              Join As Rider
            </button>
            <button
              onClick={() => {
                navigate("/register");
                setJoinState("learner");
              }}
              className="w-full my-6 btn-primary btn text-white font-bold"
            >
              Join as a Driving Lesson Learner
            </button>
            Already have an account?{" "}
            <Link
              to="/signin"
              className="btn btn-link text-black underline px-0"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseJoinState;

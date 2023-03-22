import React, { useContext, useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { JOIN_STATE_CONTEXT } from "../../App";
import { axiosInstace } from "../../utils/axiosInstance";
import useGetValidation from "../Authentication/getValidation";
const Navbar = () => {
  const token = localStorage.getItem("token");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setIsLoggedIn, isLoggedIn } = useContext(JOIN_STATE_CONTEXT);
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);
  const navContents = (
    <>
      <li>
        <NavLink className="mx-1" to="/">
          Home
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar bg-base-200 px-4 rounded-lg w-[90%] mx-auto sticky top-0 z-50`}
    >
      <div className="flex-1 ">
        <ul className="menu menu-horizontal px-1">{navContents}</ul>
      </div>
      {/* social links */}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/">
              <BsFacebook
                className="mx-3 cursor-pointer hover:text-secondary transition-all"
                size={30}
              />{" "}
              Facebook
            </Link>
          </li>

          <li>
            <a href="">
              <BsInstagram
                className="mx-3 cursor-pointer hover:text-secondary transition-all"
                size={30}
              />{" "}
              Instagram
            </a>
          </li>
          <li>
            <Link to="/">
              <BsWhatsapp
                className="mx-3 cursor-pointer hover:text-secondary transition-all"
                size={30}
              />{" "}
              Linkedin
            </Link>
          </li>
        </ul>
      </div>
      <div className="lg:flex flex-none h-full hidden">
        {/* dropdown */}
        <BsFacebook
          className="mx-3 cursor-pointer hover:text-secondary transition-all"
          size={30}
        />
        <BsInstagram
          className="mx-3 cursor-pointer hover:text-secondary transition-all"
          size={30}
        />
        <BsWhatsapp
          className="mx-3 cursor-pointer hover:text-secondary transition-all"
          size={30}
        />
        {isLoggedIn ? (
          <>
            <button className="btn btn-primary btn-sm">
              <NavLink className="mx-1" to="/profile">
                Profile
              </NavLink>
            </button>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                localStorage.removeItem("token");
              }}
              className="btn mx-2 btn-primary btn-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <button className="btn btn-primary btn-sm">
            <NavLink className="mx-1" to="/join-as">
              Join
            </NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

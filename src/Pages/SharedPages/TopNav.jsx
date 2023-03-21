import React, { useEffect, useRef, useState } from "react";
import { BiCart, BiSearchAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

import styles from "./TopNav.module.css";
import { Link, useNavigate } from "react-router-dom";
const TopNav = () => {
  const [inputContainerClass, setInputContainerClass] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setInputContainerClass(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);
  const searchBar = (
    <>
      <div
        className={`border-2 border-gray-200 rounded-md w-96 h-10 flex justify-between px-4 items-center ${
          inputContainerClass && styles.topNav__searchContainer
        }`}
      >
        <input
          ref={inputRef}
          onClick={() => setInputContainerClass(true)}
          type="text"
          placeholder="Search..."
          className={`w-10/12 h-full border-none outline-none focus-visible:border-none focus:border-none bg-transparent ${styles.topNav__searchBar}`}
        />
        <div className="cursor-pointer">
          <BiSearchAlt2 size={25} />
        </div>
      </div>
    </>
  );
  return (
    <div className="navbar px-10 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
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
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ${styles.topNav__dropDownSearch}`}
          >
            <li>{searchBar}</li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          MyBookShop
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* search input */}
        {searchBar}
      </div>
      {/* {user?.displayName ? (
        <div className="navbar-end">
          <div>
            <div
              className={`flex justify-center items-center cursor-pointer ${styles.topNav__register}`}
            >
              <div className={`${styles.topNav__registerIcon} mx-2`}>
                <CgProfile className="text-secondary" size={30} />
              </div>
              <p className="transition-all"> Profile</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <div onClick={() => navigate("/signin")}>
            <div
              className={`flex justify-center items-center cursor-pointer ${styles.topNav__register}`}
            >
              <div className={`${styles.topNav__registerIcon} mx-2`}>
                <CgProfile className="text-secondary" size={30} />
              </div>
              <p className="transition-all"> Register</p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default TopNav;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

const NavBar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const { assets } = useContext(AppContext);
  return (
    <nav>
      <div className="ml-6 mr-6 mb-2 flex flex-row justify-between items-center md:mb-5 py-4 xl:ml-24 xl:mr-24">
        <div>
          <Link to="/">
            <img
              className="w-24 md:w-44 cursor-pointer"
              src={assets.logo}
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <ul
            className="flex flex-col text-sm  md:flex md:flex-row items-center md:gap-x-4  text-;
       list-none capitalize text-gray-950 md:text-lg"
          >
            <NavLink to="/">
              <li>Home</li>
              <hr className="border-none outline-none h-0.5  bg-blue-500 w-3/5 m-auto hidden" />
            </NavLink>

            <NavLink to="/doctors">
              <li>All Doctors</li>
              <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
            </NavLink>

            <NavLink to="/about">
              <li>About</li>
              <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
            </NavLink>

            <NavLink to="/contactus">
              <li>Contact</li>
              <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
            </NavLink>
          </ul>
        </div>
        {token ? (
          <div className="flex items-center cursor-pointer gap-3 group relative">
            <img
              className=" w-8 h-8 md:w-12 md:h-12 rounded-full"
              src={assets.profile_pic}
              alt="profile picture"
            />
            <img src={assets.dropdown_icon} alt="drop-down icon" />
            <div className="absolute right-0 top-0 pt-14 font-semibold text-base text-gray-600 z-20 hidden group-hover:block">
              <div className="w-36 h-24 text-sm gap-2 p-2 md:min-w-52 md:h-36 bg-stone-100 rounded-sm flex flex-col md:gap-4 md:p-4">
                <p
                  onClick={() => {
                    navigate("profle");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("my-appointment");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    setToken(false);
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="w-24 h-8 text-xs md:w-[195px] md:h-[44px]  md:text-lg rounded-3xl outline-none bg-blue-500 text-white"
          >
            Create Account
          </button>
        )}
      </div>
      <hr className="w-full ml-24 mr-24 h-4 text-slate-700" />
    </nav>
  );
};

export default NavBar;

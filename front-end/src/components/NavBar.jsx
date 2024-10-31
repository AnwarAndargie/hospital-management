import React, { useState } from "react";
import { assets } from "../../public/assets/assets_frontend/assets";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  return (
    <nav>
      <div className="flex flex-row justify-between items-center mb-5 py-4 ml-12 mr-12">
        <div>
          <Link to="/">
            <img className="w-44 cursor-pointer" src={assets.logo} alt="logo" />
          </Link>
        </div>
        <div>
          <ul
            className="flex flex-row items-center gap-x-4  text-;
       list-none capitalize text-gray-950 text-lg"
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

            <NavLink to="/contact">
              <li>Contact</li>
              <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
            </NavLink>
          </ul>
        </div>
        {token ? (
          <div className="flex items-center cursor-pointer gap-3 group relative">
            <img
              className="w-12 h-12 rounded-full"
              src={assets.profile_pic}
              alt="profile picture"
            />
            <img src={assets.dropdown_icon} alt="drop-down icon" />
            <div className="absolute right-0 top-0 pt-14 font-semibold text-base text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-52 h-36 bg-stone-100 rounded-sm flex flex-col gap-4 p-4">
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
            className="w-[195px] h-[44px]  text-lg rounded-3xl outline-none bg-blue-500 text-white"
          >
            Create Account
          </button>
        )}
      </div>
      <hr className="w-full ml-12 mr-12 h-4 text-slate-700" />
    </nav>
  );
};

export default NavBar;

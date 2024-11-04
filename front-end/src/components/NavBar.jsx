import React, { useContext, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

const NavBar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const { assets } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <div className="ml-6 mr-6 mb-2 flex flex-row justify-between items-center md:mb-5 py-4 xl:ml-24 xl:mr-24">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              className="w-24 md:w-44 cursor-pointer"
              src={assets.logo}
              alt="logo"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex md:flex-row items-center gap-x-4 text-gray-950 md:text-lg capitalize">
          <NavLink to="/" className="hover:text-blue-500">
            <li>Home</li>
            <hr className="hidden w-8 h-0.5 bg-blue-500 ml-2" />
          </NavLink>
          <NavLink to="/doctors" className="hover:text-blue-500">
            <li>All Doctors</li>
            <hr className="hidden w-8 h-0.5 bg-blue-500 ml-2" />
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-500">
            <li>About</li>
            <hr className="hidden w-8 h-0.5 bg-blue-500 ml-2" />
          </NavLink>
          <NavLink to="/contactus" className="hover:text-blue-500">
            <li>Contact</li>
            <hr className="hidden w-8 h-0.5 bg-blue-500 ml-2" />
          </NavLink>
        </ul>

        {/* Profile Section or Signup Button */}
        {token ? (
          <div className="flex items-center cursor-pointer gap-3 group relative">
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-full"
              src={assets.profile_pic}
              alt="profile picture"
            />
            <img src={assets.dropdown_icon} alt="dropdown icon" />
            <div className="absolute right-0 top-0 pt-14 font-semibold text-base text-gray-600 z-20 hidden group-hover:block">
              <div className="w-36 h-24 p-2 text-sm bg-stone-100 rounded-sm flex flex-col gap-2">
                <p
                  onClick={() => navigate("profile")}
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointment")}
                  className="cursor-pointer hover:text-black"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/signup")}
            className="w-24 h-8 md:w-[195px] md:h-[44px] text-xs md:text-lg rounded-3xl bg-blue-500 text-white"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="menu icon"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          showMenu ? "fixed inset-0 z-20 bg-white" : "hidden"
        } md:hidden flex flex-col items-center p-4`}
      >
        <div className="flex items-center justify-between w-full px-5 py-6">
          <img className="w-36" src={assets.logo} alt="logo" />
          <img
            onClick={() => setShowMenu(false)}
            className="w-7 cursor-pointer"
            src={assets.cross_icon}
            alt="close icon"
          />
        </div>
        <ul className="flex flex-col items-center gap-4 text-lg mt-4">
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/"
            className="hover:text-blue-500"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/doctors"
            className="hover:text-blue-500"
          >
            <li>All Doctors</li>
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/about"
            className="hover:text-blue-500"
          >
            <li>About</li>
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/contactus"
            className="border p-2 outline-none hover:text-blue-500"
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>

      <hr className="w-full mx-auto h-0.5 bg-slate-300" />
    </nav>
  );
};

export default NavBar;

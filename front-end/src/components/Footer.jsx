import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

function Footer() {
  const {assets} = useContext(AppContext)
  return (
    <footer className="ml-24 mt-24 mr-24 relative">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  text-sm  ">
        <div className="flex flex-col gap-4 ">
          <img className=" w-1/3" src={assets.logo} alt="prescripto logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-gray-700 font-bold ">COMPANY</h1>
          <ul className="list-none flex flex-col gap-y-2 mt-2 ">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-3 ">
          <h1 className="text-gray-700 font-bold">GET IN TOUCH</h1>{" "}
          <div className="text-lg gap-2 mt-2">
            <p>+1-212-456-7890</p>
            <p>greatstackdev@gmail.com</p>
          </div>
        </div>
      </div>
      <hr className="w-full  mr-24 mt-4 h-16 text-slate-900" />
      <p className="text-center">
        Copyright © 2024 GreatStack - All Right Reserved.
      </p>
    </footer>
  );
}

export default Footer;

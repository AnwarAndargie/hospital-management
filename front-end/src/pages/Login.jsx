import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center mt-4 mb-12 lg:mt-12 lg:mb-32">
      <div className="w-3/4 lg:w-1/4 lg:h-[50vh] border rounded-xl p-6 shadow-xl">
        <h1 className="text-2xl font-semibold text-gray-700">Login</h1>
        <p className="text-gray-700">Please login to book appointment</p>
        <form
          action="
        "
          className="flex flex-col gap-y-2 text-gray-700"
        >
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            className="w-full outline-none ring-1 focus:ring-1 focus:ring-blue-700 focus:shadow-sm "
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            className="w-full outline-none ring-1 focus:ring-1 focus:ring-blue-700 focus:shadow-sm "
          />
          <button className="w-full h-10 rounded-xl outline-none bg-blue-500 text-white text-sm mt-4 ">
            Login
          </button>
        </form>
        <p className="text-sm text-gray-700 mt-2 mb-2">
          Don't have an account?
          <p
            onClick={() => {
              navigate("/signup");
              scrollTo(0, 0);
            }}
            className="inline mt-4 mb-2 text-xs text-blue-500 cursor-pointer"
          >
            signup here
          </p>
        </p>
      </div>
    </section>
  );
};

export default Login;

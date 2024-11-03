import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContextProvider";

function Profile() {
  const { assets } = useContext(AppContext);
  const [isEdit, setEdit] = useState(false);
  const [data, setData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email_id: "richardjameswap@gmail.com",
    phone: "+1  123 456 7890",
    address: {
      line1: "57th cross, Richmond",
      line2: "Circle,Churchil Road,London",
    },
    sex: "Male",
    dob: "20 July, 2024",
  });
  return (
    <section className="ml-24 mt-4">
      <div className="flex flex-col gap-y-3">
        {" "}
        <img className="w-24 h-24" src={data.image} alt="profile image" />
        <p className="text-xl font-bold text-gray-700">{data.name}</p>
        <hr className="w-1/3 h-8 text-gray-900" />
      </div>
      <div className="space-y-2">
        <h1 className="text-sm underline font-medium text-gray-700">
          CONTACT INFORMATION
        </h1>
        <p className="text-sm font-medium text-gray-700">
          Email Id:{" "}
          {isEdit ? (
            <input
              className="w-64 h-6 rounded-xl p-4 ring-1 ring-blue-500 outline-none"
              type="email"
              defaultValue={data.email_id}
              onChange={(e) => {
                setData((prev) => ({ ...prev, email_id: e.target.value }));
              }}
            />
          ) : (
            <p className="text-blue-500 inline">{data.email_id}</p>
          )}{" "}
        </p>
        <p className="text-sm font-medium text-gray-700">
          Phone:{" "}
          {isEdit ? (
            <input
              className="w-64 h-6 rounded-xl p-4 ring-1 ring-blue-500 outline-none"
              type="email"
              defaultValue={data.phone}
              onChange={(e) => {
                setData((prev) => ({ ...prev, phone: e.target.value }));
              }}
            />
          ) : (
            <p className="text-blue-500 inline">{data.phone} </p>
          )}{" "}
        </p>

        <p className="text-sm font-medium text-gray-700">
          Address:{" "}
          {isEdit ? (
            <input
              className="w-64 h-6 rounded-xl p-4 ring-1 ring-blue-500 outline-none"
              type="email"
              defaultValue={data.address.line1}
              onChange={(e) => {
                setData((prev) => ({ ...prev, address: e.target.value }));
              }}
            />
          ) : (
            <p className="inline text-gray-500">{data.address.line1}</p>
          )}{" "}
        </p>
      </div>
      <div className="space-y-2 mb-4 mt-4">
        <h1 className="text-sm underline font-medium text-gray-700">
          BASIC INFORMATION
        </h1>
        <p className="text-sm font-medium text-gray-700">
          Gender:
          {isEdit ? (
            <select
              name="sex"
              id=""
              onChange={(e) => {
                setData((prev) => ({ ...prev, sex: e.target.value }));
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          ) : (
            <p className="inline text-gray-500"> {data.sex} </p>
          )}
        </p>
        <p className="text-sm font-medium text-gray-700">
          Date of Birth:{" "}
          {isEdit ? (
            <input
              className="w-64 h-6 rounded-xl p-4 ring-1 ring-blue-500 outline-none"
              type="email"
              defaultValue={data.dob}
              onChange={(e) => {
                setData((prev) => ({ ...prev, dob: e.target.value }));
              }}
            />
          ) : (
            <p className="inline text-gray-500">{data.dob}</p>
          )}{" "}
        </p>
      </div>
      <div className="space-x-4">
        <button
          onClick={() => {
            setEdit(true);
          }}
          className="w-32 h-12 bprder rounded-3xl outline-none bg-blue-500 text-white"
        >
          Edit
        </button>
        <button
          onClick={() => {
            setEdit(false);
          }}
          className="w-52 h-12 bprder rounded-3xl outline-none bg-blue-500 text-white"
        >
          Save Information
        </button>
      </div>
    </section>
  );
}

export default Profile;

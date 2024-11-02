import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

function ContactUs() {
  const { assets } = useContext(AppContext);
  return (
    <section className="ml-44">
      <h1 className="text-2xl text-center font-semibold mt-6 mb-6 text-gray-700">
        CONTACT US
      </h1>
      <div className="flex gap-8">
        <img className="w-1/3 " src={assets.contact_image} alt="contact" />
        <div>
          <h1 className="text-xl font-semibold text-gray-700 mt-6 mb-4 ">
            OUR OFFICE
          </h1>
          <div>
            <p>
              54709 Willms Station <br /> Suite 350, Washington, USA
            </p>
          </div>
          <div className="text-sm mt-4 mb-4">
            <p>Tel: (415) 555‑0132</p>
            <p>Email: greatstackdev@gmail.com</p>
          </div>

          <h1 className="text-xl font-semibold text-gray-700 mt-6 mb-4 ">
            CAREERS AT PRESCRIPTO
          </h1>
          <p>Learn more about our teams and job openings.</p>
          <button className="border outline w-44 h-12 p-2 text-xs text-gray-700 mt-6">
            Explore Jobs
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

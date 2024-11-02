import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

const About = () => {
  const { assets } = useContext(AppContext);
  return (
    <section className="ml-24 mr-24 mt-8">
      <div>
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          About Us
        </h1>
        <div className="flex flex-row gap-10 mb-12">
          <img
            className="w-1/4 h-[55vh]"
            src={assets.about_image}
            alt="about"
          />
          <div className="flex flex-col gap-y-6 w-1/2">
            <p classN ame="">
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p>
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, Prescripto is here to support you every
              step of the way.
            </p>
            <h1 className="font-semibold text-gray-700 text-xl">Our Vision</h1>
            <p>
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
        <h1 className="text-2xl mb-4 font-semibold text-gray-700">
          Why Choose Us
        </h1>
        <div className="flex flex-row ">
          <div className="border p-8">
            <h1 className="text-xl font-bold  text-zinc-900 mb-2 ">
              Efficiency:
            </h1>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border p-8">
            <h1 className="text-xl font-bold  text-zinc-900 mb-2 ">
              Convenience:
            </h1>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="border p-8">
            <h1 className="text-xl font-bold  text-zinc-900 mb-2 ">
              Personalization:
            </h1>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

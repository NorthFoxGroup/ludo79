import React from "react";
import Banner from "../Assets/bg/contact.webp";
import { FaEnvelope, FaGlobe, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <img
        src={Banner}
        alt=""
        className="h-80 w-screen block object-cover shadow-lg"
      />
      <div className="px-40 py-10">
        <p className="font-medium text-slate-500">
          For any kind of queries, please contact us on the below mention
          details
        </p>
        <p className="uppercase text-2xl my-5 text-accent flex items-center gap-3 drop-shadow-lg font-medium">
          <FaPhoneAlt className="text-lg" /> Contact :
        </p>
        <p className="flex items-center gap-2">
          <FaEnvelope className="text-accent" />
          Mail Us :{" "}
          <a
            href="mailto:northfoxgroup@hotmail.com"
            className="hover:text-accent"
          >
            northfoxgroup@hotmail.com
          </a>
        </p>
        <p className="flex items-center gap-2 my-5">
          <FaGlobe className="text-accent" />
          Our Website :{" "}
          <a
            href="mailto:northfoxgroup@hotmail.com"
            className="hover:text-accent"
          >
            www.ludo79.com
          </a>
        </p>
        <hr className="my-10"/>
        <p className="text-lg font-medium my-3">
          To submit your game write to us :
        </p>
        <a
          href="mailto:northfoxgroup@hotmail.com"
          className="hover:text-accent flex items-center gap-3"
        >
          <FaEnvelope className="text-accent" />
          northfoxgroup@hotmail.com
        </a>
      </div>
    </>
  );
};

export default Contact;

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaBehance,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col justify-between items-center mx-auto">
      <a
        className="bg-blue-700 px-2 py-1 rounded-lg text-3xl "
        href="https://github.com/pciruelos/redux-toolkit"
      >
        Repositorie & Info
      </a>
      {/* Social  */}
      <div className="text-5xl pt-10">
        <h1 className="">My Contact Links:</h1>
        <div className="flex justify-around text-3xl p-4">
          <a
            className="py-2 hover:text-blue-700"
            href="https://github.com/pciruelos"
          >
            <FaGithub />
          </a>
          <a
            className="py-2 hover:text-blue-700"
            href="https://www.linkedin.com/in/pablociruelos/"
          >
            <FaLinkedin />
          </a>
          <a
            className="py-2 hover:text-blue-700"
            href="https://www.youtube.com/c/luppo2007"
          >
            <FaYoutube />
          </a>
          <a
            className="py-2 hover:text-blue-700"
            href="https://www.behance.net/elchicoprodigio"
          >
            <FaBehance />
          </a>
          <a
            className="py-2 hover:text-blue-700"
            href="mailto:pciruelos@yahoo.com"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      <h1>
        <a href="https://www.pablociruelos.com">www.pablociruelos.com</a>
      </h1>
    </div>
  );
};

export default Contact;

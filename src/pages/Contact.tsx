import React from "react";
import SocialLinks from "../components/SocialLinks";
import GDSCHangingLetters from "../components/GDSCHanging";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-12 sm:pt-24 font-['Open_Sans']">
      <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between">
        <div className="w-full sm:w-2/5 md:w-2/5 z-10 mt-12 sm:mt-0 px-4 sm:px-6 md:px-8 lg:px-16 mb-20 sm:mb-0 relative">
          <SocialLinks />
        </div>
        <div className="w-full sm:w-3/5 md:w-3/5 flex justify-center sm:justify-end relative">
          <GDSCHangingLetters />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import DiversityImage from "../icons/diversity 1.svg";

const Diversity = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={DiversityImage}
        alt="Diversity"
        className="w-full max-w-md h-auto"
      />
    </div>
  );
};

export default Diversity;

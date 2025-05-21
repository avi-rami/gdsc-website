import React from "react";
import topRight from "../icons/Vector 2.png";
import topLeft from "../icons/Vector 4.png";

const HeaderShapes = () => {
  return (
    <>
      <div className="absolute -top-5 -left-5 hidden md:block">
        <img src={topLeft} alt="topLeft" className="w-[250px]" />
      </div>
      <div className="absolute -top-5 -right-5 hidden md:block">
        <img src={topRight} alt="topRight" className="w-[250px]" />
      </div>
    </>
  );
};

export default HeaderShapes;

import React from "react";

const GDSCDavis = () => {
  return (
    <div className="w-full max-w-[90vw] sm:max-w-[320px] md:max-w-[340px] flex flex-col text-5xl xs:text-6xl sm:text-7xl md:text-7xl lg:text-6xl xl:text-6xl font-bold font-['Open_Sans'] items-start sm:items-center space-y-3 pl-1 sm:pl-0">
      <div className="flex flex-row text-left w-full tracking-wider">
        <span className="text-red-500">G</span>
        <span className="text-[#BBBBBB]">oogle </span>
      </div>
      <div className="flex flex-row text-left w-full tracking-wider">
        <span className="text-green-500">D</span>
        <span className="text-[#BBBBBB]">eveloper</span>
      </div>
      <div className="flex flex-row text-left w-full tracking-wider">
        <span className="text-blue-500">S</span>
        <span className="text-[#BBBBBB]">tudent</span>
      </div>
      <div className="flex flex-row text-left w-full tracking-wider">
        <span className="text-yellow-500">C</span>
        <span className="text-[#BBBBBB]">lub</span>
      </div>
      <div className="flex flex-row text-left w-full text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] font-semibold">
        <span className="text-[#00D3C7]">UC</span>
        <span className="text-[#BBBBBB] ml-2">Davis</span>
      </div>
    </div>
  );
};

export default GDSCDavis;

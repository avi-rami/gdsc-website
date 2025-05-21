import React from "react";
import GDSCDavis from "../components/GDSCDavis";
import Diversity from "../components/Diversity";
import HeroWords from "../components/HeroWords";
import Shapes from "../components/Shapes";

import ValuePropositionPage from "./ValuePropositions";

const Hero = () => {
  return (
    <div className="min-h-screen relative">
      {/* Main content container */}
      <div className="container mx-auto px-8 md:px-16 lg:px-28 xl:px-36 2xl:px-44">
        {/* Top section with GDSC Davis and Diversity */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-[100px] md:mt-[210px] lg:mt-[250px] xl:mt-[280px] gap-8 md:gap-16 lg:gap-32 xl:gap-48 2xl:gap-64">
          {/* GDSC Davis logo */}
          <div className="flex justify-center w-full md:w-auto md:justify-start">
            <div className="w-[45%] max-w-[300px] md:w-[45%] lg:w-auto lg:max-w-none lg:transform lg:scale-100 xl:scale-110 2xl:scale-125 mx-auto md:mx-0 pl-0 md:pl-8 lg:pl-12">
              <GDSCDavis />
            </div>
          </div>

          {/* Diversity diagram */}
          <div className="w-[45%] max-w-[280px] md:w-[45%] lg:w-auto lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px]">
            <Diversity />
          </div>
        </div>

        {/* Hero words section */}
        <div className="mt-12 md:mt-24 lg:mt-32 xl:mt-36">
          <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
            <HeroWords />
          </div>
        </div>
        {/* Value proposition secion */}
        <div className="my-[50px] md:my-[75px] lg:my-[100px]">
          <ValuePropositionPage />
        </div>
        
      </div>

      {/* Only show shapes on md and up */}
      <div className="hidden md:block">
        <Shapes />
      </div>
    </div>
  );
};

export default Hero;

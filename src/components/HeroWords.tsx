import React from "react";
import HeroWordsImage from "../icons/heroWords.svg";

const HeroWords = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={HeroWordsImage}
        alt="HeroWords"
        className="w-full max-w-lg h-auto"
      />
    </div>
  );
};

export default HeroWords;

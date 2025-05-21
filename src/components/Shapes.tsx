import React from "react";
import bottomRight1 from "../icons/Ellipse 28.png";
import bottomRight2 from "../icons/Ellipse 27.png";
import bottomLeft1 from "../icons/Rectangle 23.png";
import bottomLeft2 from "../icons/Rectangle 24.png";
import Left from "../icons/Rectangle 25.png";
import Right from "../icons/Ellipse 29.svg";

const Shapes = () => {
  return (
    <div className="absolute inset-0 -top-20">
      {/* Top shapes - hidden on mobile */}

      {/* Bottom shapes - visible on all screens */}
      <div className="absolute bottom-7 right-0">
        <img src={bottomRight1} alt="bottomRight1" />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={bottomRight2} alt="bottomRight2" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img src={bottomLeft1} alt="bottomLeft1" />
      </div>
      <div className="absolute bottom-5 left-0">
        <img src={bottomLeft2} alt="bottomLeft2" />
      </div>

      {/* Decorative shapes - hidden on mobile */}
      <div
        className="absolute hidden lg:block"
        style={{ top: "calc(50px + 5vh)", left: "40px" }}
      >
        <img src={Left} alt="Left" className="w-12 h-12" />
      </div>
      <div
        className="absolute hidden lg:block"
        style={{ top: "calc(-50px + 2vh)", right: "calc(175px + 10vw)" }}
      >
        <img src={Right} alt="Right" />
      </div>
    </div>
  );
};

export default Shapes;

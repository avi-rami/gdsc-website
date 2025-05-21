import Letters from "../icons/Group-48.png";

const GDSCHangingLetters = () => {
  return (
    <div className="w-full h-full relative">
      <div className="flex justify-center sm:justify-end pr-0 sm:pr-4 md:pr-6 lg:pr-8">
        <img
          src={Letters}
          alt="GDSC"
          className="w-[90%] sm:w-[100%] md:w-[110%] h-[45vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] object-contain 
          max-w-[500px] sm:max-w-none 
          transform translate-y-[-20vh] sm:translate-y-[-30vh] md:translate-y-[-40vh] lg:translate-y-[-45vh] 
          translate-x-0 sm:translate-x-[5%] md:translate-x-[10%]"
        />
      </div>
    </div>
  );
};

export default GDSCHangingLetters;

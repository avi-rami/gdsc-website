import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import logoIcon from "../assets/icons/logoIcon.svg";
import HeaderShapes from "./HeaderShapes";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative p-5">
      {/* Only show shapes on home page */}
      {isHomePage && <HeaderShapes />}

      {/* only show hamburger icon on small screens */}
      <div className="inline-block md:hidden pt-4 pl-4 group z-10 relative">
        <div className="flex justify-center">
          <button onClick={handleClick}>
            <img src={hamburger} alt="hamburger icon" />
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-4 text-primary bg-white left-0 pt-4">
            <Link to="/" className="hover:text-blue-600">
              <img src={logoIcon} alt="GDSC logo" className="w-[3rem] ml-2" />
            </Link>
            <div className="flex flex-col gap-4 ml-3">
              <Link to="/projects" className="hover:text-blue-600">
                Projects
              </Link>
              <Link to="/team" className="hover:text-blue-600">
                Team
              </Link>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
      {/* otherwise show logo and page names in header */}
      <div className="hidden md:flex items-center justify-between p-4 pr-12 gap-4 relative z-10">
        <Link to="/" className="hover:text-blue-600 mr-10">
          <img src={logo} alt="GDSC logo" className="h-9 w-auto mt-4" />
        </Link>
        <nav className="flex gap-20 text-primary text-[1.2rem]">
          <Link to="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link to="/team" className="hover:text-blue-600">
            Team
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;

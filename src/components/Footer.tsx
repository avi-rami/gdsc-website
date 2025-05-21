import logo from "../assets/logo.svg";
import divider from "../assets/divider.png";
import airplane from "../assets/icons/airplane.svg";
import mail from "../assets/icons/mail.svg";
import instagram from "../assets/icons/instagram.svg";
import logoIcon from "../assets/icons/logoIcon.svg";
import FooterIcon from "./FooterIcon";

const Footer = () => {
  return (
    <>
      {/* footer on wider screens */}
      <div className="hidden md:block">
        <img src={divider} alt="Colorful line divider" width="100%"/>
        <div className="flex justify-between px-36 gap-12 text-secondary">
          <div className="flex-1">
            <h3 className="font-semibold my-8 text-primary">Explore</h3>
            <ul>
              <li><a href="">Events</a></li>
              <li><a href="">Blogs</a></li>
              <li><a href="">Proposition</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold my-8 text-primary min-w-40">About</h3>
            <ul>
              <li><a href="">GDSC UC Davis</a></li>
              <li><a href="">Team Members</a></li>
            </ul>
            
          </div>
          <div className="flex flex-col flex-[2]">
            <h3 className="font-semibold my-8 text-primary text-center">Contact Us</h3>
            <div className="flex flex-col gap-3 self-center">
              <FooterIcon icon={airplane} desc="airplane icon"/>
              <FooterIcon icon={mail} desc="envelope icon"/>
              <FooterIcon icon={instagram} desc="instagram icon"/>
            </div>
          </div>
        </div>
        <img src={logo} alt="GDSC logo" className="h-9 w-auto ml-16 mb-12"/>
      </div>

      {/* footer on narrower screens */}
      <div className="block md:hidden">
        <img src={divider} alt="Colorful line divider" width="100%"/>
        <div className="flex flex-col justify-center items-center gap-4 text-secondary text-center">
          <div>
            <h3 className="font-semibold my-4 text-primary">Explore</h3>
            <ul>
              <li><a href="">Events</a></li>
              <li><a href="">Blogs</a></li>
              <li><a href="">Proposition</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold my-4 text-primary">About</h3>
            <ul>
              <li><a href="">GDSC UC Davis</a></li>
              <li><a href="">Team Members</a></li>
            </ul>
            
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold my-4 text-primary text-center">Contact Us</h3>
            <div className="flex gap-3 self-center">
              <FooterIcon icon={airplane} desc="airplane icon"/>
              <FooterIcon icon={mail} desc="envelope icon"/>
              <FooterIcon icon={instagram} desc="instagram icon"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-4 text-primary">
          <img src={logoIcon} alt="GDSC logo" className="w-100 m-0"/>
          <p>Google Developers Students Club</p>
          <p>UC Davis</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
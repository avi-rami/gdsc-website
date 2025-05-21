import telegramIcon from "../icons/telegram.svg";
import twitterIcon from "../icons/twitter.svg";
import linkedinIcon from "../icons/linkedin.svg";
import instagramIcon from "../icons/instagram.svg";

const SocialLinks = () => {
  const socialLinks = [
    { name: "Email", icon: telegramIcon, url: "https://telegram.org/" },
    { name: "Bento", icon: twitterIcon, url: "https://x.com/i/timeline" },
    { name: "LinkedIn", icon: linkedinIcon, url: "https://www.linkedin.com/" },
    {
      name: "Instagram",
      icon: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px] flex flex-col items-center px-4 sm:px-0">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#91969F] mb-8 sm:mb-10 md:mb-12 lg:mb-14 text-center">
          Find us on
        </h2>
        <div className="w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-9 pl-12 sm:pl-16 md:pl-20 lg:pl-24">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 sm:gap-6 md:gap-6 hover:scale-105 transition-transform duration-200"
            >
              <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-[4.5rem] md:h-[4.5rem] lg:w-20 lg:h-20 bg-[#F3F4F6] rounded-xl flex items-center justify-center">
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-2xl sm:text-2xl md:text-[1.75rem] lg:text-4xl text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;

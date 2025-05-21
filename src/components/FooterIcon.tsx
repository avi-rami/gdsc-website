type FooterIconProps = {
    icon: string;
    desc: string;
  };

const FooterIcon = ({ icon, desc }: FooterIconProps) => (
    <button className="bg-tertiary p-3 rounded-full bg-opacity-50 w-fit hover:bg-opacity-100">
        <img src={icon} alt={desc} className="w-8 h-8"/>
    </button>
);

export default FooterIcon;
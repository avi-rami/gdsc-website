// personal notes
// layout decisions -> tailwind utility classes on parent elements (grid-*, flex-*, gap-*, etc.)
// sizing and shrinking -> width / height utilities: aspect-square, w-full, max-w-[300px] sm:max-w-[350px] lg:max-w-[400px]
// responsive changes -> same utilities prefixed with breakpoint labels (sm:, lg:, etc.)
// typography tweaks -> text-[20px] sm:text-[24px] lg:text-[32px], negative/positive margins (sm:-mt-4, lg:-mt-8)

import React from 'react';
import shape1 from '../assets/team_images/shape1.svg';
import shape2 from '../assets/team_images/shape2.svg';
import shape3 from '../assets/team_images/shape3.svg';
import shape4 from '../assets/team_images/shape4.svg';
import shape5 from '../assets/team_images/shape5.svg';
import shape6 from '../assets/team_images/shape6.svg';
import shape7 from '../assets/team_images/shape7.svg';
import shape8 from '../assets/team_images/shape8.svg';

// This is a reusable component that creates a card for each team member
// It takes three props:
// - shape: the SVG icon to display
// - name: the team member's name (defaults to "Name" if not provided)
// - role: the team member's role (defaults to "Team" if not provided)
const TeamMember = ({ shape, name = "Name", role = "Team" }: { 
  shape: string; 
  name?: string; 
  role?: string;
}) => (
  // Container for each team member card, centers everything vertically
  <div className="flex flex-col items-center"> {/* flex flex-col makes the card itself a flexbox laid vertically (image, then name, then role). items-center centers all children horizontally in that column */}
    {/* Responsive container that scales with screen size */}
    <div className="w-full aspect-square max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] flex items-center justify-center mb-2"> {/* Added mb-2 for more space between shape and name */}
      <img 
        src={shape} 
        alt="Team member shape" 
        className={`${shape === shape1 ? 'w-[100%] h-[100%]' : 'w-[90%] h-[90%]'} object-contain ${shape === shape8 ? 'w-[77%] h-[77%]' : ''}`} // Changed shape8 to 77%
      />
    </div>
    {/* Responsive text sizes */}
    <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold font-['Open_Sans'] -mt-2 sm:-mt-4 lg:-mt-6 text-black">{name}</h3> {/* Reduced negative margins to increase gap */}
    <p className="text-base sm:text-lg lg:text-[20px] font-normal font-['Open_Sans'] mt-0 text-[#1E1E1E]">{role}</p> 
  </div>
);

// Main Team page component
const Team = () => {
  return (
    // Main container with responsive padding
    <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10 font-['Open_Sans']"> {/* Reduced padding */}
      {/* Responsive page title */}
      <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-center mb-12 sm:mb-16 lg:mb-24 text-[#91969F]">Meet the Team...</h1>
      
      {/* Responsive grid layout that adjusts columns based on screen size */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-8 max-w-[90rem] mx-auto"> {/* Reduced gaps */}
        {/* The shapes are arranged in order: yellow, red, green, blue (Google colors) */}
        <TeamMember shape={shape1} />  {/* Yellow circles */}
        <TeamMember shape={shape2} />  {/* Red trapezoid */}
        <TeamMember shape={shape3} />  {/* Green arrow */}
        <TeamMember shape={shape4} />  {/* Blue pentagon */}
        <TeamMember shape={shape5} />  {/* Green stack */}
        <TeamMember shape={shape6} />  {/* Blue bubbles */}
        <TeamMember shape={shape7} />  {/* Red curve */}
        <TeamMember shape={shape8} />  {/* Yellow triangle */}
      </div>
    </div>
  );
};

export default Team;

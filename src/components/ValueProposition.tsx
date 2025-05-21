import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

interface ValuePropositionProps {
  image: string;
  upperText: string;
  value: number;
  lowerText: string;
  valueColor: string;
}

const ValueProposition: React.FC<ValuePropositionProps> = ({
  image,
  upperText,
  value,
  lowerText,
  valueColor,
}) => {
  const countUpRef = useRef<HTMLDivElement | null>(null); // Ref for the count-up element
  const [inView, setInView] = useState(false); // State to track if the component is in view

  useEffect(() => {
    // Store the current value of the ref in a variable to avoid accessing it in the cleanup
    const currentRef = countUpRef.current;

    // Create an IntersectionObserver to detect when the component is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Trigger the count-up when the component is in view
          observer.unobserve(entry.target); // Stop observing once it's in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is in view
      }
    );

    // Start observing the element
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="flex flex-col md:flex-row items-center my-5 w-full md:w-auto h-auto md:h-[300px]">
      <div className="w-[320px] h-full md:mr-[100px] flex justify-center items-center">
        <img
          src={image}
          alt="Value proposition"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
      <div
        className="w-[300px] h-[300px] md:h-full flex flex-col justify-center items-center text-center"
        ref={countUpRef} // Attach the ref to the div
      >
        <div className="text-[30px] md:text-[22px] mb-[-10px] text-secondary">
          {upperText}
        </div>
        <div
          className="text-[80px] md:text-[60px] mb-[-10px] font-semibold"
          style={{ color: valueColor }}
        >
          {inView && <CountUp start={0} end={value} duration={1} />}+
        </div>
        <div className="text-[30px] md:text-[22px] mb-[-10px] text-secondary">
          {lowerText}
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;

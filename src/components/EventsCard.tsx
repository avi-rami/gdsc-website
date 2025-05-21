import React from "react";

interface EventsCardProps {
    image: string;
    description: string;
    title: string;
    date: string;
    color: string;
}

const EventsCard : React.FC<EventsCardProps> = ({
    image, 
    description, 
    title, 
    date,
    color
}) => {
    return (
        <div className="w-[17rem] min-w-[15rem] border-2 rounded-xl overflow-hidden" style={{ borderColor: color }}>
            <img src={image} alt={description}/>
            <div className="p-5">
                <p className="font-semibold font-sans text-[1.8rem]">{title}</p>
                <p className="font-sans text-[1.1rem]">{date}</p>
            </div>
            
        </div>
    );
}

export default EventsCard;
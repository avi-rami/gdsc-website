import eventsBg from "../assets/events_images/eventsBg.png";
import EventsCard from "./EventsCard";
import cloud from "../assets/events_images/cloud.png";
import android from "../assets/events_images/android.png";
import flutter from "../assets/events_images/flutter.png";

const Events = () => {
  return (
    <div>
        <div className="relative w-full p-10 min-h-[32rem]">
            <img src={eventsBg} alt="photo of the panel at the empowerHER event"
                className="w-full z-0 rounded-3xl min-h-[32rem] md:object-cover object-none"/>
            <div className="flex justify-center items-center absolute inset-10 bg-googleBlue bg-opacity-40 z-10 rounded-3xl">
                <p className="text-white font-bold text-[5rem]">Events</p>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center font-semibold text-[2.5rem] mt-10 mb-5">
            <p>Upcoming</p>
            <p>Events</p>
        </div>
        <div className="flex flex-wrap gap-[3rem] justify-center mx- mb-[5rem]">
            <EventsCard image={cloud} description="Google Cloud Logo" title="30 Days of Google Cloud" date="December 6" color="#FABD03"/>
            <EventsCard image={android} description="Android Logo" title="Android Study Jam" date="December 6" color="#EA4235"/>
            <EventsCard image={flutter} description="Flutter Logo" title="Flutter Festival 2022" date="December 6" color="#109D58"/>
        </div>
    </div>
  )
}

export default Events

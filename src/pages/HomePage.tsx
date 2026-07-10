import HeroSection from "../component/hero/HeroSection.tsx";
import AboutSection from "../component/about/AboutSection.tsx";
import ProgramSection from "../component/program/ProgramSection.tsx";
import EventsSection from "../component/events/EventsSection.tsx";
import LocationsSection from "../component/locations/LocationsSection.tsx";

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <ProgramSection/>
            <EventsSection/>
            <LocationsSection/>
        </>
    );
};

export default HomePage;
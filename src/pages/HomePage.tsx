import HeroSection from "../component/hero/HeroSection.tsx";
import AboutSection from "../component/about/AboutSection.tsx";
import ProgramSection from "../component/program/ProgramSection.tsx";
import EventsSection from "../component/events/EventsSection.tsx";
import LocationsSection from "../component/locations/LocationsSection.tsx";
import CoachesSection from "../component/coaches/CoachesSection.tsx";
import PricingSection from "../component/pricing/PricingSection.tsx";

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <ProgramSection/>
            <EventsSection/>
            <LocationsSection/>
            <CoachesSection/>
            <PricingSection/>
        </>
    );
};

export default HomePage;
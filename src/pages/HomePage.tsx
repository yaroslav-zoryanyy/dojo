import HeroSection from "../component/hero/HeroSection.tsx";
import AboutSection from "../component/about/AboutSection.tsx";
import ProgramSection from "../component/program/ProgramSection.tsx";

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <ProgramSection/>
        </>
    );
};

export default HomePage;
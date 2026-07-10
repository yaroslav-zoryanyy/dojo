import LocationsSwiperComponent from "./swiper/LocationsSwiperComponent.tsx";

const LocationsSection = () => {
    return (
        <section id='locations'>
            <div className="container">
                <div className="locations_inner">
                    <h3 className="locations_inner--title m-eb">Наші Локації</h3>
                    <div className="locations_inner--slider">
                        <LocationsSwiperComponent/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationsSection;
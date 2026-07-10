import EventsSwiperComponent from "./swiper/EventsSwiperComponent.tsx";

const EventsSection = () => {
    return (
        <section id={'events'}>
            <div className="container">
                <div className="events_inner">
                    <div className="events_inner--top">
                        <div className="events_top--left">
                            <h3 className='events_left--title m-eb'>Останні події</h3>
                            <p className='events_left--subtitle'>Будьте в курсі життя нашого клубу та не пропустіть важливі заходи.</p>
                        </div>
                        <div className="events_top--right">
                            <hr className='events_right--line'/>
                        </div>
                    </div>
                    <div className="events_inner--bottom">
                        <EventsSwiperComponent/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
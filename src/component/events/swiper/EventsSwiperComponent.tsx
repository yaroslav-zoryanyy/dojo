import images from '../../../assets/img/swiper_img_test.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const EventsSwiperComponent = () => {
    return (
        <Swiper
            spaceBetween={32}
            slidesPerView={3}
        >
            <SwiperSlide>
                <div className="events_slide">
                    <div className="events_slide--top">
                        <img src={images} alt="test"/>
                        <div className="events_top--accent m-b">
                            Новинки
                        </div>
                    </div>
                    <div className="events_slide--bottom">
                        <h6 className='events-bottom--title'>Відкрите тренування</h6>
                        <p className="events-bottom--subtitle">
                            Приходьте познайомитися з нашими
                            тренерами та відчути атмосферу
                            професійного спорту.
                        </p>
                        <a className='events-bottom--link' href="#">
                            15 Червня, 2024
                        </a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="events_slide">
                    <div className="events_slide--top">
                        <img src={images} alt="test"/>
                        <div className="events_top--accent m-b">
                            Новинки
                        </div>
                    </div>
                    <div className="events_slide--bottom">
                        <h6 className='events-bottom--title'>Відкрите тренування</h6>
                        <p className="events-bottom--subtitle">
                            Приходьте познайомитися з нашими
                            тренерами та відчути атмосферу
                            професійного спорту.
                        </p>
                        <a className='events-bottom--link' href="#">
                            15 Червня, 2024
                        </a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="events_slide">
                    <div className="events_slide--top">
                        <img src={images} alt="test"/>
                        <div className="events_top--accent m-b">
                            Новинки
                        </div>
                    </div>
                    <div className="events_slide--bottom">
                        <h6 className='events-bottom--title'>Відкрите тренування</h6>
                        <p className="events-bottom--subtitle">
                            Приходьте познайомитися з нашими
                            тренерами та відчути атмосферу
                            професійного спорту.
                        </p>
                        <a className='events-bottom--link' href="#">
                            15 Червня, 2024
                        </a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="events_slide">
                    <div className="events_slide--top">
                        <img src={images} alt="test"/>
                        <div className="events_top--accent m-b">
                            Новинки
                        </div>
                    </div>
                    <div className="events_slide--bottom">
                        <h6 className='events-bottom--title'>Відкрите тренування</h6>
                        <p className="events-bottom--subtitle">
                            Приходьте познайомитися з нашими
                            тренерами та відчути атмосферу
                            професійного спорту.
                        </p>
                        <a className='events-bottom--link' href="#">
                            15 Червня, 2024
                        </a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="events_slide">
                    <div className="events_slide--top">
                        <img src={images} alt="test"/>
                        <div className="events_top--accent m-b">
                            Новинки
                        </div>
                    </div>
                    <div className="events_slide--bottom">
                        <h6 className='events-bottom--title'>Відкрите тренування</h6>
                        <p className="events-bottom--subtitle">
                            Приходьте познайомитися з нашими
                            тренерами та відчути атмосферу
                            професійного спорту.
                        </p>
                        <a className='events-bottom--link' href="#">
                            15 Червня, 2024
                        </a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="events_slide">
                    <div className="events_slide--top">
                        <img src={images} alt="test"/>
                        <div className="events_top--accent m-b">
                            Новинки
                        </div>
                    </div>
                    <div className="events_slide--bottom">
                        <h6 className='events-bottom--title'>Відкрите тренування</h6>
                        <p className="events-bottom--subtitle">
                            Приходьте познайомитися з нашими
                            тренерами та відчути атмосферу
                            професійного спорту.
                        </p>
                        <a className='events-bottom--link' href="#">
                            15 Червня, 2024
                        </a>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default EventsSwiperComponent;
import blonie_img from '../../../assets/img/błonie_location.jpg'
import pruszkow_img from '../../../assets/img/pruszków_location.jpg'
import none_img from '../../../assets/img/none_locanion.png'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const LocationsSwiperComponent = () => {
    return (
        <Swiper
            spaceBetween={24}
            slidesPerView={3}
        >
            <SwiperSlide>
                <div className="location_slide">
                    <img src={blonie_img} alt="Błonie"/>
                    <div className="location_slide--content">
                        <h4 className="location-content--title m-eb">Błonie</h4>
                        <p className="location-content--subtitle">Великий комплекс для тренувань</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="location_slide">
                    <img src={pruszkow_img} alt="Pruszków"/>
                    <div className="location_slide--content">
                        <h4 className="location-content--title m-eb">Pruszków</h4>
                        <p className="location-content--subtitle">Професійний спортивний комплекс</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="location_slide">
                    <img src={none_img} alt="None image"/>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default LocationsSwiperComponent;
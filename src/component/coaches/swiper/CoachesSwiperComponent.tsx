import {Swiper, SwiperSlide} from "swiper/react";
import coac_1 from '../../../assets/img/coach_1.svg'

const CoachesSwiperComponent = () => {
    return (
        <Swiper
            spaceBetween={48}
            slidesPerView={3}
        >
            <SwiperSlide>
                <div className="coaches_slide">
                    <div className="coaches_slide--img">
                        <img src={coac_1} alt="trener"/>
                    </div>
                    <div className="coaches_slide--content">
                        <h4 className="coaches_content--title m-b" >Дмитро І.</h4>
                        <div className="coaches_content--btn m-b">FOUNDER</div>
                        <p className="coaches_content--subtitle">
                            Засновник клубу та тренер з
                            багаторічним досвідом. Володар 2 дана,
                            чемпіон України та вихователь
                            чемпіонів Європи й призерів світових
                            першостей. Спеціалізація: підготовка
                            дітей та підлітків у стилі Кіокушинкай
                            карате.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="coaches_slide">
                    <div className="coaches_slide--img">
                        <img src={coac_1} alt="trener"/>
                    </div>
                    <div className="coaches_slide--content">
                        <h4 className="coaches_content--title m-b" >Дмитро І.</h4>
                        <div className="coaches_content--btn m-b">FOUNDER</div>
                        <p className="coaches_content--subtitle">
                            Засновник клубу та тренер з
                            багаторічним досвідом. Володар 2 дана,
                            чемпіон України та вихователь
                            чемпіонів Європи й призерів світових
                            першостей. Спеціалізація: підготовка
                            дітей та підлітків у стилі Кіокушинкай
                            карате.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="coaches_slide">
                    <div className="coaches_slide--img">
                        <img src={coac_1} alt="trener"/>
                    </div>
                    <div className="coaches_slide--content">
                        <h4 className="coaches_content--title m-b" >Дмитро І.</h4>
                        <div className="coaches_content--btn m-b">FOUNDER</div>
                        <p className="coaches_content--subtitle">
                            Засновник клубу та тренер з
                            багаторічним досвідом. Володар 2 дана,
                            чемпіон України та вихователь
                            чемпіонів Європи й призерів світових
                            першостей. Спеціалізація: підготовка
                            дітей та підлітків у стилі Кіокушинкай
                            карате.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default CoachesSwiperComponent;
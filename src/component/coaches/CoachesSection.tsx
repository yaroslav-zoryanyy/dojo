import CoachesSwiperComponent from "./swiper/CoachesSwiperComponent.tsx";


const CoachesSection = () => {
    return (
        <section id='coaches'>
            <div className="container">
                <div className="coaches__inner">
                    <h3 className="coaches__inner--title m-eb">Наші Тренери</h3>
                    <p className="coaches__inner--subtitle">
                        Професіонали з європейським досвідом, які знають, як знайти ключ до
                        потенціалу кожної дитини.
                    </p>
                    <CoachesSwiperComponent/>
                </div>
            </div>
        </section>
    );
};

export default CoachesSection;
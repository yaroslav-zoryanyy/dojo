import about_img from '../../assets/img/about_img.png'
const AboutSection = () => {
    return (
        <section id={'about'}>
            <div className="container">
                <div className="about_inner">
                    <div className="about_inner--left">
                        <img src={about_img} alt="komanda"/>
                        <div className="about_btn">
                            Rising Stars Only
                        </div>
                    </div>
                    <div className="about_inner--right">
                        <h3 className={'about_right--title m-eb'}>Хто ми є?</h3>
                        <p className={'about_right--subtitle'}>
                            13 DOJO — це молодий, амбітний клуб, що стрімко
                            розвивається. Ми не просто тренуємо, ми будуємо
                            спільноту лідерів.
                        </p>
                        <p className={'about_right--subtitle'}>
                            Наша мета — дати кожній дитині інструменти для
                            досягнення пікової фізичної форми та ментальної стійкості,
                            незалежно від їхнього початкового рівня.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
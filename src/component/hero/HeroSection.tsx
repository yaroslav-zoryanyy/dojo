import icon from '../../assets/img/hero_icon.svg'
const HeroSection = () => {
    return (
        <section id={'hero'}>
            <div className="container">
                <div className="hero_inner">
                    <div className="hero_inner--left">
                        <h2 className="hero_left--title">
                            13 DOJO — <br/> <span className={'hero_accent'}>ФОРМУЄМО <br/> МАЙБУТНЄ</span> <br/> ЮНИХ <br/> ЧЕМПІОНІВ.
                        </h2>
                        <p className="hero_left--subtitle">
                            Кіокушинкай карате — це шлях найвищої істини та гарту
                            духу. Ми практикуємо найсильніше карате у світі, де кожен
                            тренувальний процес базується на дисципліні, повазі та
                            непохитній волі. Професійний підхід до розвитку вашої
                            дитини через філософію та техніку кіокушинкай.
                        </p>
                        <button className={'hero_left--btn'}>Записатися зараз</button>
                    </div>
                    <div className="hero_inner--right">
                        <img src={icon} alt="icon"/>
                        <h3 className={'hero_right--title m-b'}>Професійна Методологія</h3>
                        <p className={'hero_right--subtitle'}>
                            Ми використовуємо передові європейські стандарти
                            підготовки атлетів з раннього віку, спеціалізуючись на
                            стилі Кіокушинкай — найсильнішому виді контактного
                            карате, що виховує справжню силу духу та характер.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
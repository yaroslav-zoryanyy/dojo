import icon from '../../assets/img/pricing_icon.svg'
const PricingSection = () => {
    return (
        <section id="pricing">
            <div className="container">
                <div className="pricing__inner">
                    <h2 className="pricing__inner--title m-eb">Прозорість та Доступність</h2>
                    <div className="pricing__inner--content">
                        <div className="pricing__content--accentBtn">FIXED PRICE</div>
                        <h4 className="pricing__content--title m-b">Повний Абонемент</h4>
                        <div className="pricing__content--priceWrap">
                            <span className="pricing__priceWrap--price m-black">250</span>
                            <span className="pricing__priceWrap--valuta m-black">PLN/міс</span>
                        </div>
                        <div className="pricing__content--listWrap">
                            <img src={icon} alt="icon"/>
                            <p>Всі локації на вибір</p>
                        </div>
                        <div className="pricing__content--listWrap">
                            <img src={icon} alt="icon"/>
                            <p>8 тренувань на місяць</p>
                        </div>
                        <div className="pricing__content--listWrap">
                            <img src={icon} alt="icon"/>
                            <p>Повний страховий поліс</p>
                        </div>
                        <button className="pricing__content--btn">Приєднатися до клубу</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
import program_bl1 from '../../assets/img/program_bl1.svg'
import program_bl2 from '../../assets/img/program_bl2.svg'
import program_bl3 from '../../assets/img/program_bl3.svg'

const ProgramSection = () => {
    return (
        <section id={'program'}>
            <div className="container">
                <div className="program_inner">
                    <h2 className="program_inner--title m-eb">
                        Наша Програма
                    </h2>
                    <span className="program_inner--line"/>
                    <div className="program_inner--content">
                        <div className="program_content--bloc">
                            <img src={program_bl1} alt="icon"/>
                            <div className="program_bloc--title m-b">Вік 5-17 років</div>
                            <p className={"program_bloc--subtitle"}>
                                Адаптовані програми для різних
                                вікових груп, від базової координації
                                до професійної спеціалізації.
                            </p>
                        </div>
                        <div className="program_content--bloc">
                            <img src={program_bl2} alt="icon"/>
                            <div className="program_bloc--title m-b">Графік</div>
                            <p className={"program_bloc--subtitle"}>
                                2 тренування на тиждень по 1.5
                                години кожне. Оптимальний баланс
                                для розвитку без перевтоми.
                            </p>
                        </div>
                        <div className="program_content--bloc">
                            <img src={program_bl3} alt="icon"/>
                            <div className="program_bloc--title m-b">Методика</div>
                            <p className={"program_bloc--subtitle"}>
                                Професійний підхід до кіокушинкай,
                                де кожне тренування розвиває
                                техніку, дисципліну, силу духу та
                                впевненість у власних силах.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramSection;
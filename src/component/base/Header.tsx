import logo from '../../assets/img/header_logo.png'
const Header = () => {
    return (
        <header id={'header'}>
            <div className="container">
                <div className="header_inner">
                    <div className="header_icon">
                        <img src={logo} alt="logo"/>
                    </div>
                    <menu className={'header_menu'}>
                        <ul className={'header_menu__list'}>
                            <li className={'header_menu__item'}>
                                <a href="#">Програми</a>
                            </li>
                            <li className={'header_menu__item'}>
                                <a href="#">Події</a>
                            </li>
                            <li className={'header_menu__item'}>
                                <a href="#">Локації</a>
                            </li>
                            <li className={'header_menu__item'}>
                                <a href="#">Тренери</a>
                            </li>
                            <li className={'header_menu__item'}>
                                <a href="#">Ціни</a>
                            </li>
                        </ul>
                    </menu>
                    <button className={'header_btn'}>Безкоштовне Тренування</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
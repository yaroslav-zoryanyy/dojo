import {Outlet} from "react-router-dom";
import Footer from "../component/base/Footer.tsx";
import Header from "../component/base/Header.tsx";

const Layout = () => {
    return (
        <div className={'global'}>
            <Header/>
            <main id="main">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
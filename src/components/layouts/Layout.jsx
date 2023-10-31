
import Footer from './Footer';
import Header from './header/Header';
import MainContent from './MainContent';
import SideSocialIcon from './sideSocialIcon';
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const hideHeaderFooter = ['/contact-us'];
    const path = location.pathname
    const errorRoute = (location.key == 'default' && path != '/') ? true : false;
    return (
        <div>
            {hideHeaderFooter.includes(path) || errorRoute ? '' : <Header></Header>}
            <SideSocialIcon></SideSocialIcon>
            <MainContent></MainContent>
            {hideHeaderFooter.includes(path) || errorRoute ? '' : <Footer></Footer>}

        </div>
    );
};

export default Layout;
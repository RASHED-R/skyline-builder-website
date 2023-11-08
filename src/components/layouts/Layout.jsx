
import BackToTop from '../common-file/back-to-top/BackToTop';
import Footer from './Footer';
import Header from './header/Header';
import MainContent from './MainContent';
import SideSocialIcon from './sideSocialIcon';
import { useLocation } from 'react-router-dom';

const Layout = () => {

    // footer 
    const companyData = {
        name: 'Your Company',
        logo: '/src/assets/image/company-logo/Final-logo2.png',
        address: 'Jabbar tawer gulshan, Dhaka, Bangladesh.',
        email: 'email@skyline.com',
        fax: '+88 (0) 202 0000 001',
    };

    const sections = [
        {
            title: 'Special Links',
            links: [
                { url: '#', text: 'Trams & Condition' },
                { url: '#', text: 'Privacy Policy' },
                { url: '#', text: 'FAQ' },
                { url: '#', text: 'Projects' },
                // Add more links as needed
            ],
        },
        {
            title: 'Special Links',
            links: [
                { url: '#', text: 'About Us' },
                { url: '#', text: 'our Service' },
                { url: '#', text: 'News & Event ' },
                { url: '#', text: 'Projects' },
                // Add more links as needed
            ],
        },

        // Add more sections as needed
    ];

    const contactData = {
        title: 'Contact Us',
        address: 'Jabbar tawer gulshan, Dhaka, Bangladesh.',
        email: 'email@skyline.com',
        fax: '+88 (0) 202 0000 001',
    };

    const copyrightText = 'Infinity Infotech Ltd.';

    // header & footer with layout 
    const location = useLocation();
    const hideHeaderFooter = ['/contact-us'];
    const path = location.pathname
    const errorRoute = (location.key == 'default' && path != '/') ? true : false;
    return (
        <div>
            {hideHeaderFooter.includes(path) || errorRoute ? '' : <Header></Header>}
            {errorRoute ? '' : <BackToTop></BackToTop>}
            <SideSocialIcon></SideSocialIcon>
            <MainContent></MainContent>
            {hideHeaderFooter.includes(path) || errorRoute ? '' : <Footer companyData={companyData}
                sections={sections}
                contactData={contactData}
                copyrightText={copyrightText}></Footer>}

        </div>
    );
};

export default Layout;
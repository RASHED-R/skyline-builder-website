import React from 'react';
import OurTeamMain from './OurTeamMain';
import BannerSection from '../common-file/banner-section/BannerSection';

const ourTeamMainData = {
    title: "Our Brilliant ",
    subTitle: 'Experts',
    underLineHeading: 'Team',

    cards: [
        {
            socialLink: {
                facebookUrl: 'https://www.facebook.com/login/identify',
                instaUrl: 'https://www.facebook.com/login/identify',
                whatsAppUrl: 'https://www.facebook.com/login/identify',
                linkedinUrl: 'https://www.facebook.com/login/identify',
            },
            author: "A",
            image: '/src/assets/image/our-team/1.png',
            imageTitle: 'Gabriel Jackson-',
            imageDesignation: "Managing Director",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id."
        },
        {
            socialLink: {
                facebookUrl: 'https://www.facebook.com/login/identify',
                instaUrl: 'https://www.facebook.com/login/identify',
                whatsAppUrl: 'https://www.facebook.com/login/identify',
                linkedinUrl: 'https://www.facebook.com/login/identify',
            },
            author: "B",
            image: '/src/assets/image/our-team/2.png',
            imageTitle: 'Exterior-',
            imageDesignation: "Message From",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id."
        },
        {
            socialLink: {
                facebookUrl: 'https://www.facebook.com/login/identify',
                instaUrl: 'https://www.facebook.com/login/identify',
                whatsAppUrl: 'https://www.facebook.com/login/identify',
                linkedinUrl: 'https://www.facebook.com/login/identify',
            },
            author: "C",
            image: '/src/assets/image/our-team/3.png',
            imageTitle: 'Architecture-',
            imageDesignation: "Message From",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id."
        },
        {
            socialLink: {
                facebookUrl: 'https://www.facebook.com/login/identify',
                instaUrl: 'https://www.facebook.com/login/identify',
                whatsAppUrl: 'https://www.facebook.com/login/identify',
                linkedinUrl: 'https://www.facebook.com/login/identify',
            },
            author: "D",
            image: '/src/assets/image/our-team/1.png',
            imageTitle: 'Gabriel Jackson-',
            imageDesignation: "Message From",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id."
        },
        {
            socialLink: {
                facebookUrl: 'https://www.facebook.com/login/identify',
                instaUrl: 'https://www.facebook.com/login/identify',
                whatsAppUrl: 'https://www.facebook.com/login/identify',
                linkedinUrl: 'https://www.facebook.com/login/identify',
            },
            author: "A",
            image: '/src/assets/image/our-team/1.png',
            imageTitle: 'Gabriel Jackson-',
            imageDesignation: "Message From",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id."
        },
        {
            socialLink: {
                facebookUrl: 'https://www.facebook.com/login/identify',
                instaUrl: 'https://www.facebook.com/login/identify',
                whatsAppUrl: 'https://www.facebook.com/login/identify',
                linkedinUrl: 'https://www.facebook.com/login/identify',
            },
            author: "B",
            image: '/src/assets/image/our-team/2.png',
            imageTitle: 'Exterior-',
            imageDesignation: "Message From",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id."
        },
        {
            socialLink: {
                facebookUrl: 'https://www.facebook.com/login/identify',
                instaUrl: 'https://www.facebook.com/login/identify',
                whatsAppUrl: 'https://www.facebook.com/login/identify',
                linkedinUrl: 'https://www.facebook.com/login/identify',
            },
            author: "C",
            image: '/src/assets/image/our-team/3.png',
            imageTitle: 'Architecture-',
            imageDesignation: "Message From",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id."
        },
        {
            socialLink: {
                facebookUrl: 'https://chat.openai.com/c/6eb3be91-4da3-43fc-ad94-a25cbd53228f',
                instaUrl: 'https://www.facebook.com/login/identify',
                whatsAppUrl: 'https://www.facebook.com/login/identify',
                linkedinUrl: 'https://www.facebook.com/login/identify',
            },
            author: "D",
            image: '/src/assets/image/our-team/1.png',
            imageTitle: 'Gabriel Jackson-',
            imageDesignation: "Message From",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id."
        },
    ]
};
const bannerData = {
    subHeading: 'Home > Our Team',
    heading: 'Our Team ',
    imageUrl: '/src/assets/image/banner-image/teamBanner.png',
}
const OurTeam = () => {
    return (
        <div>
            <BannerSection bannerData={bannerData}></BannerSection>
            <OurTeamMain ourTeamMainData={ourTeamMainData}></OurTeamMain>
        </div>
    );
};

export default OurTeam;
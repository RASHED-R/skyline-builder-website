import BannerSection from "../common-file/banner-section/BannerSection";
import CommonContactUs from "../common-file/common-contact-us/CommonContactUs";
import Experience from "../common-file/experience/Experience";
import OurPassion from "../common-file/our-passion/OurPassion";
import WeOffer from "./we-offer/WeOffer";
const bannerData = {
    subHeading: 'Home > Our Service',
    heading: 'Our Service ',
    imageUrl: '/src/assets/image/banner-image/serviceBanner.png',
}

const weOfferData = {

    cards: [
        {
            image: '/src/assets/image/our-team/1.png',
            imageTitle: 'Interior',
            title: 'What Our ',
            subTitle: 'What We Offer',
            underLineHeading: 'customers say',
        },
        {
            image: '/src/assets/image/our-team/2.png',
            imageTitle: 'Exterior',
            title: 'What Our ',
        },
        {
            image: '/src/assets/image/our-team/3.png',
            imageTitle: 'Architecture',
            subTitle: 'What We Offer',
        },
        {
            image: '/src/assets/image/our-team/1.png',
            imageTitle: 'Architecture',
            underLineHeading: 'customers say',
            subTitle: 'What We Offer',
        },
    ]
}
const ourPassionData = {
    subTitle: 'WHY CHOOSE US',
    title: "Our",
    underLineHeading: 'Passion',

    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cards: [
        {
            image: '/src/assets/image/our-passion/icon1.png',
            imageTitle: 'Experience',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. text-whitetext-whitetext-white'
        },
        {
            image: '/src/assets/image/our-passion/icon2.png',
            imageTitle: 'High Quality Services',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. text-whitetext-whitetext-white'
        },
        {
            image: '/src/assets/image/our-passion/icon3.png',
            imageTitle: 'Development',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. text-whitetext-whitetext-white'
        },
    ],

};
const commonContactUsData = {
    title: 'Free ',
    subTitle: 'Contact us',
    underLineHeading: 'Consultation',
    description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.",
};
const OurService = () => {
    return (
        <div>
            <BannerSection bannerData={bannerData}></BannerSection>
            <WeOffer weOfferData={weOfferData}></WeOffer>
            <OurPassion ourPassionData={ourPassionData}></OurPassion>
            <CommonContactUs cardsItemsDes={commonContactUsData}></CommonContactUs>
            <Experience></Experience>
        </div>
    );
};

export default OurService;
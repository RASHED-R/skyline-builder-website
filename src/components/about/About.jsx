
import { Link, Outlet } from 'react-router-dom';
import BannerSection from '../common-file/banner-section/BannerSection';
import WhoWeAre from '../who-we-are/WhoWeAre';
import ExploreSkylineBuilders from '../explore-skyline-builders/ExploreSkylineBuilders';
import OurService from '../common-file/our-service/ourService';
import OurPassion from '../common-file/our-passion/OurPassion';
import CreativeEye from '../common-file/creative-eye/CreativeEye';
import OurTeam from './our-team/OurTeam';
import Experience from '../common-file/experience/Experience';
import Clients from '../common-file/clients/Clients';
import Testimonial from '../common-file/testimonial/Testimonial';
import CommonContactUs from '../common-file/common-contact-us/CommonContactUs';
import OurTeamMain from '../our-team-main/OurTeamMain';
// import OurService from '../common-file/our-service/ourService';
const bannerData = {
    subHeading: 'home > About Us',
    heading: 'About Us ',
    imageUrl: '/src/assets/image/banner-image/aboutBanner.png',
}
const whoWeAreData = {
    thumbnailText: "Where Ideas Meet Skills",
    subHeading: 'Who We Are',
    heading: 'ABOUT OUR ',
    imageUrl: '/src/assets/image/banner-image/aboutBanner.png',
    underLineHeading: 'COMPANY',
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sit repellendus nisi aperiam, iure mollitia incidunt voluptatem dolorum voluptate vel harum magnam similique, quis consectetur molestias velit numquam molestiae nihil officiis error. Eligendi reprehenderit natus atque, aspernatur cum aliquam dolore pariatur at magni repellendus consequatur explicabo velit optio aperiam ab enim dolores omnis repudiandae eaque rem quia consectetur inventore nulla harum. Autem consectetur incidunt nihil corrupti ea debitis, alias cumque necessitatibus dolorem aliquid soluta nemo, nobis eveniet dolores saepe et molestias eligendi fuga ipsam? Eius exercitationem minus, officiis natus sint saepe aspernatur hic! Error ea quam possimus sit iste sequi cupiditate obcaecati incidunt debitis laboriosam molestiae veritatis earum, necessitatibus eius minima esse sint reiciendis! Aspernatur non quibusdam at cupiditate blanditiis. Ullam aperiam aliquam reiciendis sint eius, voluptatem neque pariatur. Laborum modi nihil, reiciendis qui veritatis accusamus, dicta minima numquam consequuntur repellat pariatur explicabo sequi recusandae tempore, iusto eaque sunt consequatur labore. Quaerat pariatur nisi alias sequi eveniet, error ipsam numquam laudantium est molestiae eligendi similique perferendis cupiditate sed porro eius saepe hic ipsa quae veniam optio ut officia! Quas cupiditate quam inventore nihil, debitis ullam voluptas quibusdam omnis similique aliquam molestias totam. Cupiditate aliquid rerum expedita architecto animi odit enim."
}
const exploreSkylineBuilders = {
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sit repellendus nisi aperiam, iure mollitia incidunt voluptatem dolorum voluptate vel harum magnam similique",
    subTitle: 'ABout Us',
    title: "Explore Skyline ",
    underLineHeading: 'Builders',
    cards: [
        {
            image: '/src/assets/image/explore-skyline-builders/1.png',
            description: 'Commercial',
            imageTitle: 'The Shard'
        },
        {
            image: '/src/assets/image/explore-skyline-builders/2.png',
            description: 'Residential',
            imageTitle: 'One Square',
        },
        {
            image: '/src/assets/image/explore-skyline-builders/1.png',
            description: 'Commercial',
            imageTitle: 'Newfoundland'
        },
    ]
};
const ourServiceData = {
    subTitle: 'What we offer',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cards: [
        {
            image: '/src/assets/image/service/1.png',
            imageTitle: 'Interior'
        },
        {
            image: '/src/assets/image/service/1.png',
            imageTitle: 'Exterior',
        },
        {
            image: '/src/assets/image/service/1.png',
            imageTitle: 'Architecture'
        },
    ]
};

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
// creative eye
const creativeEyeData = {

    subTitle: 'new adventure',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/src/assets/image/home-carousel/1.png',
    cards: [
        {
            image: '/src/assets/image/service/1.png',
            imageTitle: 'Interior'
        },
        {
            image: '/src/assets/image/service/1.png',
            imageTitle: 'Exterior',
        },
        {
            image: '/src/assets/image/service/1.png',
            imageTitle: 'Architecture'
        },
    ]
};
// ourTeamData
const ourTeamData = {
    title: "Our Brilliant ",
    subTitle: 'Experts',
    underLineHeading: 'Team',
    cards: [
        {
            image: '/src/assets/image/our-team/1.png',
            imageTitle: 'Interior'
        },
        {
            image: '/src/assets/image/our-team/2.png',
            imageTitle: 'Exterior',
        },
        {
            image: '/src/assets/image/our-team/3.png',
            imageTitle: 'Architecture'
        },
        {
            image: '/src/assets/image/our-team/1.png',
            imageTitle: 'Architecture'
        },
    ]
};
const options = {
    items: 6,
    stagePadding: 0,
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    slidetransition: 'linear',
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3,
        },
        700: {
            items: 3,
        },
        992: {
            items: 6,

        }
    },
};
const cardsItemCarouselData = {
    subHeading: 'EXPERIENCE',
    heading: 'Create Digital ',
    underLineHeading: 'Experience',
    items: [
        {
            imageUrl: '/src/assets/image/clients-image/1.png',
        },
        {
            imageUrl: '/src/assets/image/clients-image/2.png',
        },
        {
            imageUrl: '/src/assets/image/clients-image/3.png',
        },
        {
            imageUrl: '/src/assets/image/clients-image/4.png',
        },
        {
            imageUrl: '/src/assets/image/clients-image/5.png',
        },
        {
            imageUrl: '/src/assets/image/clients-image/6.png',
        },
        {
            imageUrl: '/src/assets/image/clients-image/1.png',
        },
        {
            imageUrl: '/src/assets/image/clients-image/2.png',
        },
        {
            imageUrl: '/src/assets/image/clients-image/3.png',
        },
        {
            imageUrl: '/src/assets/image/clients-image/4.png',
        },
        {
            imageUrl: '/src/assets/image/clients-image/5.png',
        },
        {
            imageUrl: '/src/assets/image/clients-image/6.png',
        },

    ]
};
const testimonialData = {
    title: 'What Our ',
    subTitle: 'Testimonials',
    underLineHeading: 'customers say',
    items: [
        {
            image: '/src/assets/image/testimonial-image/1.png',
            imageTitle: 'Gabriel Jackson-',
            imageDesignation: "CEO",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id."
        },
        {
            image: '/src/assets/image/testimonial-image/1.png',
            imageTitle: 'Exterior-',
            imageDesignation: "CEO",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id."
        },
        {
            image: '/src/assets/image/testimonial-image/1.png',
            imageTitle: 'Architecture-',
            imageDesignation: "CEO",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id."
        },
    ]
};

const commonContactUsData = {
    title: 'Free ',
    subTitle: 'Contact us',
    underLineHeading: 'Consultation',
    description: "Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.",
};
const About = () => {

    return (
        <>
            <BannerSection bannerData={bannerData}></BannerSection>

            <WhoWeAre whoWeAreData={whoWeAreData}></WhoWeAre>

            <ExploreSkylineBuilders exploreSkylineBuilders={exploreSkylineBuilders}></ExploreSkylineBuilders>

            <OurService cardsItemsDes={ourServiceData}></OurService>
            <OurPassion ourPassionData={ourPassionData}></OurPassion>
            <CreativeEye cardsItemsDes={creativeEyeData}></CreativeEye>
            <OurTeam ourTeamData={ourTeamData}></OurTeam>
            <Experience></Experience>
            <Clients options={options} cardsItemsDes={cardsItemCarouselData} ></Clients>
            <Testimonial cardsItemsDes={testimonialData}></Testimonial>
            <CommonContactUs cardsItemsDes={commonContactUsData}></CommonContactUs>
            {/* <OurTeamMain ></OurTeamMain> */}

            {/* <Link to="job">job</Link>
            <br />
            <Link to="jab">jab</Link>
            <Outlet></Outlet> */}
        </>
    );
};

export default About;
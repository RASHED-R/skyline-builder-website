
import { Link, Outlet } from 'react-router-dom';
import BannerSection from '../banner-section/BannerSection';
import WhoWeAre from '../who-we-are/WhoWeAre';
import ExploreSkylineBuilders from '../explore-skyline-builders/ExploreSkylineBuilders';
import OurService from '../common-file/our-service/ourService';
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
const About = () => {

    return (
        <>
            <BannerSection bannerData={bannerData}></BannerSection>

            <WhoWeAre whoWeAreData={whoWeAreData}></WhoWeAre>

            <ExploreSkylineBuilders exploreSkylineBuilders={exploreSkylineBuilders}></ExploreSkylineBuilders>

            <OurService cardsItemsDes={ourServiceData}></OurService>

            {/* <Link to="job">job</Link>
            <br />
            <Link to="jab">jab</Link>
            <Outlet></Outlet> */}
        </>
    );
};

export default About;
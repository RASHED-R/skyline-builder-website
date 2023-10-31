
import { Link, Outlet } from 'react-router-dom';
// import OurService from '../common-file/our-service/ourService';

const About = () => {
    // const aboutData = {
    //     title: 'About Service',
    //     description: 'About Description',
    //     cards: [
    //         {
    //             image: '...',
    //             alt: '...',
    //             title: 'Card 1',
    //             text: 'This is card 1 content.',
    //             lastUpdated: 'Last updated 3 mins ago'
    //         },
    //     ]
    // };
    return (
        <div>
            <h2>about us</h2>
            {/* <OurService {...aboutData} ></OurService> */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sit repellendus nisi aperiam, iure mollitia incidunt voluptatem dolorum voluptate vel harum magnam similique, quis consectetur molestias velit numquam molestiae nihil officiis error. Eligendi reprehenderit natus atque, aspernatur cum aliquam dolore pariatur at magni repellendus consequatur explicabo velit optio aperiam ab enim dolores omnis repudiandae eaque rem quia consectetur inventore nulla harum. Autem consectetur incidunt nihil corrupti ea debitis, alias cumque necessitatibus dolorem aliquid soluta nemo, nobis eveniet dolores saepe et molestias eligendi fuga ipsam? Eius exercitationem minus, officiis natus sint saepe aspernatur hic! Error ea quam possimus sit iste sequi cupiditate obcaecati incidunt debitis laboriosam molestiae veritatis earum, necessitatibus eius minima esse sint reiciendis! Aspernatur non quibusdam at cupiditate blanditiis. Ullam aperiam aliquam reiciendis sint eius, voluptatem neque pariatur. Laborum modi nihil, reiciendis qui veritatis accusamus, dicta minima numquam consequuntur repellat pariatur explicabo sequi recusandae tempore, iusto eaque sunt consequatur labore. Quaerat pariatur nisi alias sequi eveniet, error ipsam numquam laudantium est molestiae eligendi similique perferendis cupiditate sed porro eius saepe hic ipsa quae veniam optio ut officia! Quas cupiditate quam inventore nihil, debitis ullam voluptas quibusdam omnis similique aliquam molestias totam. Cupiditate aliquid rerum expedita architecto animi odit enim.
            <Link to="job">job</Link>
            <br />
            <Link to="jab">jab</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default About;
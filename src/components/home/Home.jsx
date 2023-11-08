import OurService from "../common-file/our-service/ourService";
import background from "../../assets/image/background-image/bg.png";

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import WorkProcess from "../work-process/WorkProcess";
import OurArchitecture from "../our-architecture/OurArchitecture";
import CreativeEye from "../common-file/creative-eye/CreativeEye";
import Experience from "../common-file/experience/Experience";
import Clients from "../common-file/clients/Clients";
import Testimonial from "../common-file/testimonial/Testimonial";

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
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

    const ourArchitectureData = {
        subTitle: 'architecture firm',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cards: [
            {
                image: '/src/assets/image/architecture-img/1.png',
                description: 'Commercial',
                imageTitle: 'The Shard'
            },
            {
                image: '/src/assets/image/architecture-img/2.png',
                description: 'Residential',
                imageTitle: 'One Square',
            },
            {
                image: '/src/assets/image/architecture-img/3.png',
                description: 'Commercial',
                imageTitle: 'Newfoundland'
            },
            {
                image: '/src/assets/image/architecture-img/4.png',
                description: 'Commercial',
                imageTitle: '	Valiant Tower'
            },
            {
                image: '/src/assets/image/architecture-img/5.png',
                description: 'Residential',
                imageTitle: 'One Park Drive'
            },
            {
                image: '/src/assets/image/architecture-img/6.png',
                description: 'Commercial',
                imageTitle: '52 Lime Street'
            },
        ]
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
    const testimonialData = {
        title: 'title',
        subTitle: 'new adventure',
        underLineHeading: 'Experience',
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


    return (
        <div>
            <section className="hero-section" style={{ backgroundImage: `url(${background})` }}>
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center common-hero">
                        <div className="col-lg-6">
                            <div className="hero-left">
                                <p className="color-p">integrated way of architecture</p>
                                <h1>The new level of evolution</h1>
                                <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Fermentum malesuada quisque porttitor duis aliquam id.</p>
                                <div className="explore-butn">
                                    <a href="#" className="exploer-btn">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-right">
                                <div id="carouselExampleCaptions" className="carousel slide">
                                    <div className="carousel-indicators">
                                        <div className="text-indicators">
                                            <p className="color-p">Residential</p>
                                            <h4>One Square</h4>
                                        </div>
                                        <div className="carousel-indicatorss">
                                            <span></span>
                                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">01</button>
                                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">02</button>
                                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">03</button>
                                        </div>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="carousel-img">
                                                <img loading="lazy" src="/src/assets/image/home-carousel/1.png" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Some representative placeholder content for the first slide.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="carousel-img">
                                                <img loading="lazy" src="/src/assets/image/home-carousel/2.png" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Second slide label</h5>
                                                <p>Some representative placeholder content for the second slide.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="carousel-img">
                                                <img loading="lazy" src="/src/assets/image/home-carousel/1.png" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Third slide label</h5>
                                                <p>Some representative placeholder content for the third slide.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* WorkProcess section  */}

            <WorkProcess></WorkProcess>

            {/* OurService */}
            <OurService cardsItemsDes={ourServiceData} ></OurService>

            {/* our architecture */}
            <OurArchitecture cardsItemsDes={ourArchitectureData} ></OurArchitecture>

            {/* creative eye */}
            <CreativeEye cardsItemsDes={creativeEyeData}></CreativeEye>
            {/* experience */}
            <Experience></Experience>
            {/* clients */}
            <Clients></Clients>
            {/* testimonial */}
            <Testimonial cardsItemsDes={testimonialData}></Testimonial>
        </div>
    );
};

export default Home;
import React from 'react';
import CircleImage from '../circle-img/CircleImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonial = ({ cardsItemsDes }) => {
    return (
        <div className='testimonial-div ptpb120 backgroundImage '>
            <CircleImage></CircleImage>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="hero-right testimonial-wrapper">
                            <div className="heading text-center">
                                <p className='color-p '>{cardsItemsDes?.subTitle}</p>
                                <h2>{cardsItemsDes?.title} <span className='under-line'>{cardsItemsDes.underLineHeading}</span></h2>
                                {/* <div className="circle-work-process">
                                    <CircleImage></CircleImage>
                                </div> */}
                            </div>
                            <div id="testimonialCarousel" className="carousel slide" data-bs-touch="true">
                                <div className="carousel-indicators">
                                    <div className="carousel-indicatorss">
                                        <span></span>
                                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">01</button>
                                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2">02</button>
                                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3">03</button>
                                    </div>
                                </div>
                                <div className="carousel-inner mt64">
                                    {cardsItemsDes?.items?.map((item, index) => (
                                        <div key={index} className={`carousel-item  ${index === 0 ? 'active' : ''}`}>
                                            <div className='row align-items-center'>
                                                <div className="col-lg-4">
                                                    <div className="clients-img-div">
                                                        <img loading="lazy" src={item?.image} className="d-block w-100" alt={item.altText} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="clients-img-div-des">
                                                        <p>{item?.description}</p>
                                                        <h4 className='mt16'>{item?.imageTitle} <span className='testimonial-designation'>{item.imageDesignation}</span></h4>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                    {/* <div className="carousel-item active">
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
                                    </div> */}
                                </div>
                                {/* <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button> */}
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
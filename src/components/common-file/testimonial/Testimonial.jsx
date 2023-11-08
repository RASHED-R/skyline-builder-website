import React from 'react';

const Testimonial = ({ cardsItemsDes }) => {
    return (
        <div className='testimonial-div ptpb-120'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="hero-right testimonial-wrapper">
                            <div className="heading">
                                <p className='color-p '>{cardsItemsDes?.subTitle}</p>
                                <h2>{cardsItemsDes?.title} <span className='under-line'>{cardsItemsDes.underLineHeading}</span></h2>
                                {/* <div className="circle-work-process">
                                    <CircleImage></CircleImage>
                                </div> */}
                            </div>
                            <div id="testimonialCarousel" className="carousel slide">
                                <div className="carousel-indicators">
                                    <div className="text-indicators">
                                        <p className="color-p">Residential</p>
                                        <h4>One Square</h4>
                                    </div>
                                    <div className="carousel-indicatorss">
                                        <span></span>
                                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">01</button>
                                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2">02</button>
                                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3">03</button>
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
                                <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
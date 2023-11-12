import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
const Blog = ({ cardsItemsDes }) => {
    return (
        <div className='blog-div ptpb-120 '>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="blog-wrapper ">
                            <div className="heading text-center  ">
                                <p className='color-p '>{cardsItemsDes?.subTitle}</p>
                                <h2>{cardsItemsDes?.title} <span className='under-line'>{cardsItemsDes.underLineHeading}</span></h2>
                                {/* <div className="circle-work-process">
                                <CircleImage></CircleImage>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-card-wrapper mt64">
                    <div className="row">
                        {cardsItemsDes?.items?.map((item, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="hero-right  blog-card p24 h-100">
                                    <div className="blog-img-div">
                                        <img src={item?.image} alt="" />
                                    </div>
                                    <div className="blog-body-wrapper d-flex flex-column gap-4 mt16">
                                        <h3>{item?.title}</h3>
                                        <p className='date-text'>{item?.date} <span className='admin-text'>{item?.admin}</span></p>
                                        <p>{item?.description.substring(0, 150)}</p>
                                        <div className="blog-read-more-btn">
                                            <Link className='read-more-btn' to={"#"}> Read More <FontAwesomeIcon icon={faArrowRightLong} /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
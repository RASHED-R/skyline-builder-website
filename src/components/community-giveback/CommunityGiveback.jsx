import React from 'react';
import Clients from '../common-file/clients/Clients';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
const CommunityGiveback = ({ cardsItemsDes, blogOptions }) => {

    return (
        <div className='community-giveback-div ptpb60'>
            <div className="container">
                <div className="heading">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <p className='color-p mb-4' >{cardsItemsDes?.subHeading}</p>
                            <h2>{cardsItemsDes?.heading} <span className='under-line'> {cardsItemsDes?.underLineHeading}</span></h2>
                        </div>
                    </div>
                </div>
                <div className="community-giveback mt-lg-5 mt-4">
                    <OwlCarousel className='owl-theme '{...blogOptions}>
                        {cardsItemsDes?.items?.map((item, index) => (
                            <div key={index} className='item image-container'>
                                <img className="community-giveback-image" src={item.imageUrl} alt="" />
                                <div className="overlay">

                                </div>
                                <div className="community-butn">
                                    <Link className='community-more-btn' to={"#"}> Collecting Fund <span><FontAwesomeIcon icon={faArrowRightLong} /></span></Link>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
};

export default CommunityGiveback;
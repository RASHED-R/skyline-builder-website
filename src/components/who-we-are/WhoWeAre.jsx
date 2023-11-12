import React from 'react';
import { Link } from 'react-router-dom';

const WhoWeAre = ({ whoWeAreData }) => {
    return (
        <section className="whoWeAre-section-div ptpb120">
            <div className="whoWeAre-section-wrapper w-100 ">
                <div className="container">
                    <div className="row justify-content-between  common-whoWeAre">
                        <div className="col-lg-6">
                            <div className="whoWeAre-left">
                                <img src={whoWeAreData.imageUrl} alt="" />
                                <div className="who-we-are-overlay-text">
                                    <p className="thumbnailText">{whoWeAreData.thumbnailText}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">

                            <div className="whoWeAre-right">
                                <p className="color-p">{whoWeAreData.subHeading}</p>
                                <h2 className='h3'>{whoWeAreData.heading} <span className='under-line'>{whoWeAreData.underLineHeading}</span></h2>

                                <p className='mt24'>{whoWeAreData.para.substring(0, 450)}</p>
                                <div><Link to={'#'} className='common-readMore'> Read More</Link></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
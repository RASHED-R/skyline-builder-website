import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookSquare, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const OurTeam = ({ ourTeamData }) => {
    return (
        <section className='our-team-div ptpb-120'>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <div className="heading">
                            <p className="color-p">{ourTeamData?.subTitle}</p>
                            <h2>{ourTeamData?.title} <span className='under-line'>{ourTeamData?.underLineHeading}</span></h2>
                        </div>
                    </div>
                </div>
                <div className="our-team-card-wrapper mt-64 ">
                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
                        {ourTeamData?.cards?.map((card, index) => (
                            <div className={`col our-team-card ${index == 1 || index == 3 || index == 5 ? ' mt-40' : ''}`} key={index}>
                                <div className="card  ">
                                    <div className="image-container our-teamMember-img">
                                        <img src={card?.image} className="card-img-top" alt={card?.alt} />
                                        <div className="overlay">

                                        </div>
                                        <div className="member-link">
                                            <Link className="facebook-icon" to={"#"}> <span><FontAwesomeIcon icon={faFacebookSquare} /></span></Link>
                                            <Link className="insta-icon" to={"#"}> <span><FontAwesomeIcon icon={faInstagram} /></span></Link>
                                            <Link className="whatsapp-icon" to={"#"}> <span><FontAwesomeIcon icon={faWhatsapp} /></span></Link>
                                            <Link className="linkedin-icon" to={"#"}> <span><FontAwesomeIcon icon={faLinkedin} /></span></Link>

                                        </div>
                                    </div>


                                    <div className="card-footer">
                                        <p className='color-p-2'>{card?.description}</p>
                                        <h4>{card?.imageTitle}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
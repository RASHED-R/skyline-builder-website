import React from 'react';
import $ from 'jquery';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookSquare, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const OurTeamMain = ({ ourTeamMainData }) => {

    const [divData, setDivData] = useState(null);

    function makeActive(e, member, card) {
        $('html,body').animate({
            scrollTop: $(".custom-section-py").offset().top - 100
        }, 'slow');
        e.classList.add('m-active');
        $('#member1').removeClass("m-active");
        setDivData(card);
    }

    // const handleClick = (data) => {
    //     setDivData(data);
    // }
    return (
        <section className="our-team-div our-team-member-section custom-section-py aos-init">
            <div className="team-member-description-wrapper">
                <div className="container">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade" id="member1" role="tabpanel" aria-labelledby="home-tab" >
                            <div className="tab-content-wrapper">
                                <div className="container">
                                    <div className="row justify-content-between">
                                        <div className="col-lg-6">
                                            <div className="tab-member-imgage ">
                                                <img src={divData?.image} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="member-message ">
                                                <p className="color-p mb-24">{divData?.imageDesignation}</p>
                                                <h3 id="msg_from">
                                                    {divData?.imageTitle}
                                                </h3>
                                                <div className=" mt-24 para1">
                                                    <p>{divData?.description.substring(0, 450)}...<a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                                                        Read More
                                                    </a>
                                                    </p>


                                                </div>
                                                <div className="bottomPart d-flex text-end  flex-column">
                                                    <h4 className="mb-12">
                                                        {divData?.imageTitle}
                                                    </h4 >
                                                    <p className="color-p mb-24">{divData?.imageDesignation}</p>

                                                </div>
                                                <div className="social-icon-wrapper">


                                                    <Link className="facebook" to={divData?.socialLink?.facebookUrl} >
                                                        <span><FontAwesomeIcon icon={faFacebookSquare} /></span>
                                                    </Link>
                                                    <Link className="insta" to={divData?.socialLink?.instaUrl}>
                                                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                                                    </Link>
                                                    <Link className="whatsapp" to={divData?.socialLink?.whatsAppUrl}>
                                                        <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                                                    </Link>
                                                    <Link className="linkedin" to={divData?.socialLink?.linkedinUrl}>
                                                        <span><FontAwesomeIcon icon={faLinkedin} /></span>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container our-team-section mt-32" data-aos="fade-up" data-aos-duration="1000">
                    <div className="header-section text-center mb-64">
                        <p className="color-p">{ourTeamMainData?.subTitle}</p>
                        <h2>{ourTeamMainData.title} <span className="under-line">{ourTeamMainData.underLineHeading}</span></h2>
                    </div>

                    <ul className="row nav nav-pills our-team-card-wrapper mt-64" id="pills-tab" role="tablist">
                        {ourTeamMainData?.cards?.map((card, index) => (
                            <li className={`col-lg-3 col-md-6 nav-item our-team-card ${(index % 2) != 0 ? ' mt-40' : ''}`} role="presentation" data-aos="fade-up" data-aos-duration="1000" key={index}>
                                <div className="nav-link m-active " data-bs-toggle="pill" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" data-bs-target="#member1" onClick={(e) => makeActive(e.target, 1, card)} id="member_0" >
                                    <div className="card  ">
                                        <div className="image-container our-teamMember-img">
                                            <img src={card?.image} className="card-img-top" alt={card?.alt} />
                                            <div className="overlay">

                                            </div>
                                            <div className="member-link">
                                                <Link className="facebook-icon" to={card?.socialLink?.facebookUrl}> <span><FontAwesomeIcon icon={faFacebookSquare} /></span></Link>
                                                <Link className="insta-icon" to={card?.socialLink?.instaUrl}> <span><FontAwesomeIcon icon={faInstagram} /></span></Link>
                                                <Link className="whatsapp-icon" to={card?.socialLink?.whatsAppUrl}> <span><FontAwesomeIcon icon={faWhatsapp} /></span></Link>
                                                <Link className="linkedin-icon" to={card?.socialLink?.linkedinUrl}> <span><FontAwesomeIcon icon={faLinkedin} /></span></Link>

                                            </div>
                                        </div>


                                        <div className="card-footer">
                                            <h4>{card?.imageTitle}</h4>
                                        </div>
                                    </div>

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OurTeamMain;
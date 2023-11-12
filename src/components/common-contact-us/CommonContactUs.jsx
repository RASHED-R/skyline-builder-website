import React from 'react';
import { Link } from 'react-router-dom';
const CommonContactUs = ({ cardsItemsDes }) => {
    return (
        <div className='common-contact-us-div ptpb120 backgroundImage '>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="hero-right common-contact-us-wrapper">
                            <div className="heading ">
                                <p className='color-p '>{cardsItemsDes?.subTitle}</p>
                                <h2>{cardsItemsDes?.title} <span className='under-line'>{cardsItemsDes.underLineHeading}</span></h2>
                                {/* <div className="circle-work-process">
                                <CircleImage></CircleImage>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-right common-contact-us">
                            <div className="heading">
                                <p className='mb24'>{cardsItemsDes?.description}</p>
                                <Link className='contact-us-btn' to={"/contact-us"}> button</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CommonContactUs;
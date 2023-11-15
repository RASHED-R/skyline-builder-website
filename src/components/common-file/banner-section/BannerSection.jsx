import React from 'react';
const BannerSection = ({ bannerData }) => {
    return (
        <section className="banner-section backgroundImage">
            <div className="banner-section-wrapper w-100 ">
                <div className="row g-0 justify-content-center align-items-center common-banner">
                    <div className="col-lg-6">
                        <div className="hero-left">
                            <h1>{bannerData.heading}</h1>
                            <p className="color-p">{bannerData.subHeading}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-right">
                            <img src={bannerData.imageUrl} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
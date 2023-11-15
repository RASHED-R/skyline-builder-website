import React from 'react';
import ImageDesign from '../image-design/imageDesign';
const imageDesignData = {
    imagesCard: [
        {
            image: '/src/assets/image/our-passion/image1.png',
        },
        {
            image: '/src/assets/image/our-passion/image2.png',

        },
        {
            image: '/src/assets/image/our-passion/image3.png',
        },
        {
            image: '/src/assets/image/our-passion/image4.png',
        },
        {
            image: '/src/assets/image/our-passion/image5.png',
        },
    ]
}
const OurPassion = ({ ourPassionData }) => {
    return (
        <section className='our-passion-div backgroundImage ptpb-120 text-white ' >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="our-passion-left">
                            <p>{ourPassionData.subTitle}</p>
                            <h2>{ourPassionData.title} <span className='under-line'>{ourPassionData.underLineHeading}</span></h2>

                            <div className="list-data-div row gap-4  mt-64">
                                {ourPassionData?.cards?.map((card, index) => (
                                    <div className={`col-lg-12`} key={index}>
                                        <div className="card text-white d-flex flex-lg-row gap-4">
                                            <div className="icon-list">
                                                <img src={card?.image} alt="" />
                                            </div>


                                            <div className="list-details">
                                                <h4 className='mb-12'>{card?.imageTitle}</h4>
                                                <p>{card?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="our-passion-right">
                            <ImageDesign imageDesignData={imageDesignData}></ImageDesign>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default OurPassion;
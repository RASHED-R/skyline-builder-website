import React from 'react';

const WeOffer = ({ weOfferData }) => {
    return (
        <div className='what-we-offer ptpb-120'>
            <div className="container">
                <div className="row flex-column  gap-5 ">
                    {
                        weOfferData?.cards?.map((card, index) => (

                            ((index + 1) % 2) != 0 ?

                                <div className="col-lg-12" key={index} >

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="offer-img">
                                                <img src={card?.image} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="offer-description">
                                                <p className="color-p">{card?.subTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="col-lg-12" key={index} >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="offer-description">
                                                <p className="color-p">{card?.subTitle}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="offer-img">
                                                <img src={card?.image} alt="" />
                                            </div>

                                        </div>
                                    </div>

                                </div>
                        )


                        )}
                </div>
            </div>
        </div >
    );
};

export default WeOffer;
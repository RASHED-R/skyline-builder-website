import React from 'react';

const ExploreSkylineBuilders = ({ exploreSkylineBuilders }) => {
    return (
        <section className='explore-skyline-builder-div ptpb60'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="heading text-center ">
                            <p className='color-p mb-4' >{exploreSkylineBuilders?.subTitle}</p>
                            <h2>{exploreSkylineBuilders?.title} <span className='under-line'>{exploreSkylineBuilders?.underLineHeading}</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between mt64">
                    {exploreSkylineBuilders?.cards?.map((card, index) => (
                        <div className={`col-lg-4 col-md-2  ${index == 1 ? ' mt40' : index == 2 ? ' mt80' : ''}`} key={index}>
                            <div className="card explore-skyline-card">
                                <div className="explore-skyline-img image-container">
                                    <img src={card?.image} className="card-img-top" alt={card.alt} />


                                    <div className="overlay">
                                        <h2 className='card-num'>{(index + 1) > 9 ? (index + 1) : '0' + (index + 1)}</h2>
                                    </div>
                                    <div className="community-butn">

                                        <p>{exploreSkylineBuilders?.description.substring(0, 250)}</p>
                                        <hr className='explore-hr' />
                                    </div>
                                </div>


                                <div className="card-footer">
                                    <h3>{card?.imageTitle}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreSkylineBuilders;
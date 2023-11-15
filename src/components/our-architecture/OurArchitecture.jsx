import React from 'react';

const OurArchitecture = ({ cardsItemsDes }) => {
    const imageUrl = '/src/assets/image/background-image/bg.png';
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundPositionX: "100%",

    };
    return (
        <section className="our-architect-div ptpb-120" style={backgroundStyle}>
            <div className="container">
                <div className="heading">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <p className='color-p mb-4' >{cardsItemsDes?.subTitle}</p>
                            <h2>Our <span className='under-line'>Architecture</span> Projects</h2>
                        </div>
                        <div className="col-lg-4">
                            <p>{cardsItemsDes?.description}</p>
                        </div>
                    </div>
                </div>

                <div className="main-content architect-card-wrapper mt-64 ">
                    <div className="row row-cols-lg-6 row-cols-md-3 row-cols-1">
                        {cardsItemsDes?.cards?.map((card, index) => (
                            <div className={`col architect-card ${index == 1 || index == 3 || index == 5 ? ' mt-40' : ''}`} key={index}>
                                <div className="card ">
                                    <div className="architect-img">
                                        <img src={card.image} className="card-img-top" alt={card.alt} />
                                    </div>


                                    <div className="card-footer">
                                        <p className='color-p-2'>{card.description}</p>
                                        <h4>{card.imageTitle}</h4>
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

export default OurArchitecture;
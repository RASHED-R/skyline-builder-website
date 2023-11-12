
const OurService = ({ cardsItemsDes }) => {

    const imageUrl = '/src/assets/image/background-image/bg.png';
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    };
    return (

        <section className="our-service-div ptpb120" style={backgroundStyle}>
            <div className="container">
                <div className="heading">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <p className='color-p mb-4' >{cardsItemsDes?.subTitle}</p>
                            <h2>Our <span className='under-line'>Services</span></h2>
                        </div>
                        <div className="col-lg-6">
                            <p>{cardsItemsDes?.description}</p>
                        </div>
                    </div>
                </div>

                <div className="main-content service-card-wrapper mt64 ">
                    <div className="row justify-content-between">
                        {cardsItemsDes?.cards?.map((card, index) => (
                            <div className={`col-lg-3 col-md-2 service-card ${index == 1 ? ' mt40' : ''}`} key={index}>
                                <div className="card ">
                                    <div className="service-img">
                                        <img src={card.image} className="card-img-top" alt={card.alt} />
                                    </div>


                                    <div className="card-footer">
                                        <h3>{card.imageTitle}</h3>
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
export default OurService;
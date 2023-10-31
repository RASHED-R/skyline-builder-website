import CircleImage from "../circle-img/CircleImage";

const OurService = ({ cardsItemsDes }) => {
    return (
        <div className="our-service-div">
            <div className="container">
                <div className="heading">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>{cardsItemsDes?.title}</h1>
                        </div>
                        <div className="col-lg-6">
                            <p>{cardsItemsDes?.description}</p>
                        </div>
                    </div>
                    <CircleImage></CircleImage>
                </div>

                <div className="main-content">
                    <div className="row justify-content-evenly">
                        {cardsItemsDes?.cards?.map((card, index) => (
                            <div className={`col-lg-3  col-md-3 ${index == 1 ? ' mt40' : ''}`} key={index}>
                                <div className="card">
                                    <div className="service-img">
                                        <img src={card.image} className="card-img-top" alt={card.alt} />
                                    </div>


                                    <div className="card-footer">
                                        <h3>{card.lastUpdated}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OurService;
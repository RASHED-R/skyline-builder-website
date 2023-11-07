import React from 'react';
import PlayButton from '../play-button/PlayButton';

const CreativeEye = ({ cardsItemsDes }) => {
    const imageUrl = '/src/assets/image/background-image/bg.png';
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundPositionX: "0",

    };
    return (
        <section className="creative-eye-div ptpb-120" style={backgroundStyle}>
            <div className="container">
                <div className="heading">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <p className='color-p mb-4' >{cardsItemsDes?.subTitle}</p>
                            <h2>The <span className='under-line'>Creative</span> Eye</h2>
                        </div>
                        <div className="col-lg-4">
                            <p>{cardsItemsDes?.description}</p>
                        </div>
                    </div>
                </div>

                <div className="main-content creative-eye-card-wrapper mt64 ">
                    <div className="creative-img">
                        <img src={cardsItemsDes?.image} alt="" />
                        <div className="play-butn">
                            <PlayButton></PlayButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreativeEye;
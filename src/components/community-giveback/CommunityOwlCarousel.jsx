import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const CommunityOwlCarousel = ({ cardsItemsDes, blogOptions }) => {
    return (
        <div>
            <OwlCarousel className='owl-theme '{...blogOptions}>
                {cardsItemsDes?.items?.map((item, index) => (
                    <div key={index} className='item image-container'>
                        <img className="community-giveback-image" src={item.imageUrl} alt="" />
                        <div className="overlay"><h3 className='text'></h3></div>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
};

export default CommunityOwlCarousel;
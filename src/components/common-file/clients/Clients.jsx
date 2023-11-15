import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// const cardsItemsDes = {
//     subHeading: 'EXPERIENCE',
//     heading: 'Create Digital ',
//     underLineHeading: 'Experience',

// }
// const imageUrl = '/src/assets/image/background-image/bg.png';
// const backgroundStyle = {
//     backgroundImage: `url(${imageUrl})`,
//     backgroundSize: 'contain',
//     backgroundRepeat: 'no-repeat',
//     width: '100%',
//     backgroundPositionX: '100%'
// };
// const options = {
//     margin: 30,
//     responsiveClass: true,
//     nav: false,
//     dots: true,
//     autoplay: true,
//     smartSpeed: 1000,
//     responsive: {
//         0: {
//             items: 3,
//         },
//         700: {
//             items: 3,
//         },
//         992: {
//             items: 6,

//         }
//     },
// };
// const cardsItemCarousel = {
//     items: [
//         {
//             imageUrl: '/src/assets/image/clients-image/1.png',
//         },
//         {
//             imageUrl: '/src/assets/image/clients-image/2.png',
//         },
//         {
//             imageUrl: '/src/assets/image/clients-image/3.png',
//         },
//         {
//             imageUrl: '/src/assets/image/clients-image/4.png',
//         },
//         {
//             imageUrl: '/src/assets/image/clients-image/5.png',
//         },
//         {
//             imageUrl: '/src/assets/image/clients-image/6.png',
//         },
//         {
//             imageUrl: '/src/assets/image/clients-image/1.png',
//         },
//         {
//             imageUrl: '/src/assets/image/clients-image/2.png',
//         },
//         {
//             imageUrl: '/src/assets/image/clients-image/3.png',
//         },
//         {
//             imageUrl: '/src/assets/image/clients-image/4.png',
//         },
//         {
//             imageUrl: '/src/assets/image/clients-image/5.png',
//         },
//         {
//             imageUrl: '/src/assets/image/clients-image/6.png',
//         },

//     ]
// }
const Clients = ({ cardsItemsDes, options }) => {

    return (
        <div className='clients-div ptpb-120'>
            <div className="container">
                <div className="heading">
                    <div className="row align-items-end">
                        <div className="col-lg-12">
                            <p className='color-p mb-4' >{cardsItemsDes?.subHeading}</p>
                            <h2>{cardsItemsDes?.heading} <span className='under-line'> {cardsItemsDes?.underLineHeading}</span></h2>
                        </div>
                    </div>
                </div>
                <div className="clients-carousel mt-lg-5 mt-4">
                    <OwlCarousel className='owl-theme '{...options}>
                        {cardsItemsDes?.items?.map((item, index) => (
                            <div key={index} className='item'>
                                <img src={item.imageUrl} alt="" />
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
};

export default Clients;
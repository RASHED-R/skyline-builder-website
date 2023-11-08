import React from 'react';
const cardsItemsDes = {
    image: '/src/assets/image/experience/1.png',
    subHeading: 'EXPERIENCE',
    heading: 'Create Digital ',
    underLineHeading: 'Experience',

}
const listItems = {
    Items: [
        {
            number: '125',
            description: 'Years Of Experience',
        },
        {
            number: '121',
            description: 'Happy Customers',
        },
        {
            number: '95',
            description: 'Expert Partners',
        },
        {
            number: '23',
            description: 'Active Projects',
        },
    ]
}

const Experience = () => {

    return (
        <section className="experience-div ptpb-60" >
            <div className="container">
                <div className="heading">
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <div className="sketch-imt">
                                <img src={cardsItemsDes?.image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8  text-center">
                            <p className="color-p">{cardsItemsDes?.subHeading}</p>
                            <h2>{cardsItemsDes?.heading}<span className='under-line'>{cardsItemsDes?.underLineHeading}</span></h2>
                            <ul className=' d-flex justify-content-center text-start align-items-end gap-lg-5 gap-2 mt-lg-5 mt-4' >
                                {listItems?.Items?.map((Item, index) => (
                                    <li key={index} >
                                        <h2>{Item?.number}<span style={{ fontSize: '32px', fontWeight: "bold" }}>{index == 0 ? '+' : ''}</span></h2>
                                        <h5>{Item?.description}</h5>
                                    </li>
                                    // <li>
                                    //     <h2>125</h2>
                                    //     <h5>happy customer</h5>
                                    // </li>
                                    // <li>
                                    //     <h2>125</h2>
                                    //     <h5>happy customer</h5>
                                    // </li>
                                    // <li>
                                    //     <h2>125</h2>
                                    //     <h5>happy customer</h5>
                                    // </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
import React from 'react';
import CircleImage from '../common-file/circle-img/CircleImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const WorkProcess = () => {
    const images = [{
        image: "/src/assets/image/work-process/1.png"
    }, {
        image: "/src/assets/image/work-process/2.png"
    },
    {
        image: "/src/assets/image/work-process/1.png"
    }]
    return (

        <section className="work-process-section ptpb-120">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-6">
                        <div className="heading">
                            <p className='color-p '>The process</p>
                            <h2>How We <span className='under-line'> Work?</span></h2>

                            <CircleImage></CircleImage>

                        </div>
                    </div>
                </div>
                <div className="work-process-card">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">

                        {images.map((image, index) => {
                            return (
                                <div key={index} className="col">
                                    <div className="single-card">
                                        <div className="work-process-img">
                                            <img src={image?.image} alt="Avatar" className="image" />
                                            <div className="overlay">
                                                <h3>Project Plan</h3>
                                                <p>Curabitur ullamcorper ultricies, tellus
                                                    rhoncus tempus eget condimentum,
                                                    sem quam semper libero</p>
                                                <hr className='hr' />
                                                <div>
                                                    <Link to="#"><FontAwesomeIcon icon={faArrowRightLong} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
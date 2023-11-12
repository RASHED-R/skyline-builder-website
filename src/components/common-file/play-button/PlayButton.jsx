import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PlayButton = () => {
    const [rotatedText, setRotatedText] = useState('');

    useEffect(() => {
        const originalText = 'Skyline - Builders - Limited. ';
        const transformedText = originalText
            .split('')
            .map((char, i) => (
                <span key={i} style={{ transform: `rotate(${i * 12.3}deg)` }}>{char}</span>
            ));
        setRotatedText(transformedText);
    }, []);
    return (
        <>
            <button type="button" className='circle-play-btn'>
                <div className="circle">
                    <div className="logo">
                        <div className='play-button'>
                            <Link className="button is-play" to="#">
                                <div className="button-outer-circle has-scale-animation"></div>
                                <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                                <div className="button-icon is-play">
                                    <svg className='play-btn-svg' fill="#f857a6" viewBox="0 0 30 15">
                                        <polygon className="triangle" points="5,0 30,15 5,30"></polygon>
                                        <path className="path" d="M5,0 L30,15 L5,30z" fill="none" stroke="#f857a6" strokeWidth="1"></path>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="text">
                        <p>
                            {rotatedText}
                        </p>
                    </div>
                </div>
            </button>
        </>

    );
};

export default PlayButton;
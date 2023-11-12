import React, { useEffect, useState } from 'react';

const CircleImage = () => {
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
        <div className="circle-work-process">
            <div className="circle">
                <div className="logo"></div>
                <div className="text">
                    <p>
                        {rotatedText}
                    </p>
                </div>
            </div>
        </div >
    );
};

export default CircleImage;

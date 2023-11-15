import React from 'react';

const ImageDesign = ({ imageDesignData }) => {
    return (

        <div className="list-image-div d-flex gap-4">
            {imageDesignData?.imagesCard?.map((image, index) => (
                <div className={`col ${index == 0 || index == 2 ? ' mt-40' : index == 3 ? 'mt-80' : ''}`} key={index}>
                    <div className="card">
                        <div className="image-list">
                            <img src={image?.image} alt="" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageDesign;
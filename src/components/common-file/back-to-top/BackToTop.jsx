import React, { useEffect } from 'react';

const BackToTop = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollButton = document.getElementById('backTop');
            const mainHeader = document.getElementById('main-header');
            if (window.scrollY >= 200) {
                scrollButton.style.display = 'block';
                mainHeader.style.boxShadow = '0px -10px 26px 0px rgba(0, 0, 0, 0.5)';
            } else {
                scrollButton.style.display = 'none';
                mainHeader.style.boxShadow = 'none';
            }
        };


        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        const moveScrollDiv = () => {
            const scrollDiv = document.getElementById('scrollDiv');
            const maxHeight = document.body.scrollHeight - window.innerHeight;
            const percentage = (window.scrollY / maxHeight) * 100;
            scrollDiv.style.width = percentage + '%';
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', moveScrollDiv);

        const scrollButton = document.getElementById('backTop');
        scrollButton.addEventListener('click', scrollToTop);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', moveScrollDiv);
            scrollButton.removeEventListener('click', scrollToTop);
        };
    }, []);

    return (
        <div className="back-to-top">
            <div className="box" id="scrollDiv"></div>
            <div className="backTop" id="backTop">
                <span className="chevron">&#8249;</span>
            </div>
        </div>
    );
};

export default BackToTop;
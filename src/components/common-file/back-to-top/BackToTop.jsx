import React, { useEffect } from 'react';
let isSticky = false;
const BackToTop = () => {


    useEffect(() => {
        const handleScroll = () => {
            const mainHeader = document.getElementById("main-header");
            const scrollButton = document.getElementById('backTop');
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollButton.style.display = 'block';
                mainHeader.style.boxShadow = '0px -10px 26px 0px rgba(0, 0, 0, 0.5)';
                mainHeader.classList.add('sticky-top');

                // if (!isSticky) {
                //     isSticky = true;
                //     mainHeader.style.top = "-250px";
                //     setTimeout(() => {
                //         mainHeader.style.position = "fixed";
                //         mainHeader.style.top = "0px";
                //     }, 200);
                // }



            } else {
                scrollButton.style.display = 'none';
                mainHeader.style.boxShadow = 'none';
                mainHeader.classList.remove('sticky-top');
                // mainHeader.style.top = "0px";

                // isSticky = false;
                // mainHeader.style.position = "relative";
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
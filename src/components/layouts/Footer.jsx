import React from 'react';

const Footer = ({ companyData, sections, contactData, copyrightText }) => {
    return (
        <div className="footer-div">
            <div className="footer-wrapper ptpb60 ">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-3">
                            <div className="logo-address">
                                <div className="footer-logo">
                                    <img src={companyData.logo} alt={companyData.name} />

                                </div>
                                <div className="footer-address mt24">
                                    <p>{companyData.address}</p>
                                    <p>Email: {companyData.email}</p>
                                    <p>Fax: {companyData.fax}</p>
                                </div>
                            </div>
                        </div>
                        {sections.map((section, index) => (
                            <div className="col-lg-3" key={index}>
                                <div className="footer-title">
                                    <h3 className='under-line'>{section.title}</h3>
                                </div>
                                <ul className='mt24 d-flex flex-column gap-2'>
                                    {section.links.map((link, linkIndex) => (
                                        <li className='footer-list-item' key={linkIndex}><a href={link.url}>{link.text}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="col-lg-3">
                            <div className="footer-title">
                                <h3 className='under-line'>{contactData.title}</h3>
                            </div>
                            <ul className='mt24  d-flex flex-column gap-4'>
                                <li>{contactData.address}</li>
                                <li><h5>Email: {contactData.email}</h5></li>
                                <li><h5>Fax: {contactData.fax}</h5></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>@ 2023 All Rights Reserved By Skyline Builders Ltd. Design & Developed By {copyrightText}</p>
            </div>
        </div>
    );
};

export default Footer;

import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const iconElement = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const iconElement1 = <FontAwesomeIcon icon={faEnvelope} />
    const iconElement2 = <FontAwesomeIcon icon={faPhoneAlt} />
    return (
        <div className="footer">
            <div className="aboutUs-container p-2">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <h3>Dhaka Office</h3>
                            <hr />
                            <div className="d-flex ms-4">
                                <p> {iconElement}&nbsp;&nbsp;</p>
                                <p>21/6 Bardashi, Amin Bazar, Dhaka</p>
                            </div>
                            <div className="d-flex ms-4">
                                <p> {iconElement1}&nbsp;&nbsp;</p>
                                <p>dhaka@bikebazar.com</p>
                            </div>
                            <div className="d-flex ms-4">
                                <p> {iconElement2}&nbsp;&nbsp;</p>
                                <p>+8801810000011</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h3>Head Office</h3>
                        <hr />
                        <div className="d-flex ms-4">
                            <p> {iconElement}&nbsp;&nbsp;</p>
                            <p>Mir Khutir Jhawtola Chittagong</p>
                        </div>
                        <div className="d-flex ms-4">
                            <p> {iconElement1}&nbsp;&nbsp;</p>
                            <p>headoffice@bikebazar.com</p>
                        </div>
                        <div className="d-flex ms-4">
                            <p> {iconElement2}&nbsp;&nbsp;</p>
                            <p>+8801610000011</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h3>About</h3>
                        <hr />
                        About US <br />
                        Our Story <br />
                        Photo Galary
                    </div>
                </div>
                <hr />
                <div className="right-container">
                    <p>All Right Reserved &copy; 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
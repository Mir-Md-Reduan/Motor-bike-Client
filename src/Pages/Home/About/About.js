import React from 'react';
import './About.css';
import aboutUsImage from '../../../Images/aboutUs.jpg';

const About = () => {
    return (
        <div id="about" className="my-5" >
            <div className="container">
                <div className="row">
                    <div className=" about-container">
                        <div className="image col-lg-6 col-md-12">
                            <img src={aboutUsImage} alt="" />
                        </div>
                        <div className="about-description col-lg-6 col-md-12 my-5">
                            <h2 className="aboutUs-title">About US</h2>
                            <p className="aboutUS-description">Reduan Bike Bazar is #1 motorcycle oriented website in Bangladesh where Bike enthusiasts from all over the country can find all the information about any bike. From motorcycle price in Bangladesh and Motorcycle Specification to the test ride reviews of various bikes and first impression reviews of any newly launched bikes. Since 2012, BikeBD is providing information to everyone across the nation about various offers from the motorcycle or related companies, news, coverage of motorcycle based or related events, and any update on any rules about motorcycle sector in Bangladesh.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
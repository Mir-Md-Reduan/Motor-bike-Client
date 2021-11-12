import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../Images/Carosel/img-111.jpg'
import img2 from '../../../Images/Carosel/img-222.jpg'
import img3 from '../../../Images/Carosel/img-333.jpg'
import img4 from '../../../Images/Carosel/img-444.jpg'
import img5 from '../../../Images/Carosel/img-555.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="container mt-5">
            <Carousel>
                <Carousel.Item>
                    <div className="mt-3">
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="carousel-title">We build bikes for you.</h2>
                            <p className="carousel-description">BIkes series set the benchmark on its launch back in the days and all the other manufacturers followed soon. The 2nd version of the famous series has been present in Bangladesh for quite some time now.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className="carousel-title">We keep you riding</h2>
                        <p className="carousel-description">This semi-faired bike features a design that is striking with a strong presence in the streets and gives sheer support for touring on the highways. Combined with a refined engine and its performance, this bike delivers benchmark-level performance</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className="carousel-title">Make your life easier</h2>
                        <p className="carousel-description">Motorcycles have always been about freedom and passion, and nothing showcases that like a cruiser. They offer low seat heights, wide, user-friendly powerbands, and a laid-back, comfortable riding position</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className="carousel-title">Love biking</h2>
                        <p className="carousel-description">Created with strength and grace. BMW R 18 The Wal by Shinya Kimura. Learn more. Heritage Collection. An Homage To An Icon.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className="carousel-title">Bikes for all</h2>
                        <p className="carousel-description">Suzuki Gixxer SF 250 is a sports bike available at a price range of Rs. 1,82,133 - Rs. 1,82,882 in India. It is available in 2 variants and 2 colours.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
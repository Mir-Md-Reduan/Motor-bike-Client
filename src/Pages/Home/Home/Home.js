import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Review from '../Review/Review';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header'



const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Bikes></Bikes>
            <Review></Review>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;
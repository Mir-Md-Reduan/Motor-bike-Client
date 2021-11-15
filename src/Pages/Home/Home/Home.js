import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header'
import Reviews from './Reviews/Reviews';


const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Bikes></Bikes>
            <Reviews></Reviews>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Dentists from '../Dentists/Dentists';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Dentists></Dentists>
            <About></About>
            <Footer></Footer>

        </div>
    );
};

export default Home;
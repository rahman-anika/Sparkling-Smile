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

            {/* header section starts */}
            <Header></Header>
            {/* header section ends */}

            {/* banner section starts */}
            <Banner></Banner>
            {/* banner section ends */}

            {/* services section starts */}
            <Services></Services>
            {/* services section ends */}

            {/* dentists section starts */}
            <Dentists></Dentists>
            {/* dentists section ends */}

            {/* about section starts */}
            <About></About>
            {/* about section ends */}

            {/* footer section starts */}
            <Footer></Footer>
            {/* footer section ends */}


        </div>
    );
};

export default Home;
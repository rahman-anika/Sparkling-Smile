import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png';
import banner7 from '../../../images/banner/banner7.jpg';
import banner8 from '../../../images/banner/banner8.jpg';



const Banner = () => {
    return (
        <>

            {/* Banner slider starts  */}
            <Carousel>

                {/* 1st slider starts */}
                <Carousel.Item>

                    {/* 1st image starts */}
                    <img
                        className="d-block w-100"
                        src={banner1} height="410px"
                        alt="First slide"
                    />
                    {/* 1st image ends */}


                    {/* 1st caption starts */}
                    <Carousel.Caption>
                        <h4 className="mb-2" style={{ color: '#020505' }}>We care for your teeth</h4>
                    </Carousel.Caption>
                    {/* 1st caption starts */}

                </Carousel.Item>
                {/* 1st slider ends */}


                {/* 2nd slider starts */}
                <Carousel.Item>

                    {/* 2nd image starts */}
                    <img
                        className="d-block w-100"
                        // src="https://image.freepik.com/free-vector/flat-dental-care-illustration_23-2148993362.jpg"
                        src={banner7}
                        height="410px"
                        alt="Second slide"
                    />
                    {/* 2nd image ends */}

                    {/* 2nd caption starts */}
                    <Carousel.Caption>
                        <h3 style={{ color: '#020505' }}>Let's Brighten Your Smile </h3>
                    </Carousel.Caption>
                    {/* 2nd caption ends */}

                </Carousel.Item>
                {/* 2nd slider ends */}


                {/* 3rd slider starts */}
                <Carousel.Item>

                    {/* 3rd image starts */}
                    <img
                        className="d-block w-100"
                        // src="https://image.freepik.com/free-vector/flat-dental-care-concept-illustration_23-2148999088.jpg"
                        src={banner8}
                        height="410px"
                        alt="Third slide"
                    />
                    {/* 3rd image starts */}

                    {/* 3rd caption starts */}
                    <Carousel.Caption>
                        <h3 className="mb-5" style={{ color: '#020505' }}>Take the world's best quality treatment</h3>
                    </Carousel.Caption>
                    {/* 3rd caption ends */}

                </Carousel.Item>
                {/* 3rd slider ends */}


            </Carousel>
            {/* Banner slider ends  */}
        </>
    );
};

export default Banner;
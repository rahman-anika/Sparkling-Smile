import React from 'react';
import './About.css'

const About = () => {
    return (

        // about section starts 

        <div id="about" className="container w-100 m-auto p-5">

            {/* Why choose section starts  */}

            <div className="col-md-12 ">
                <h3 className="about-title">Why Choose Us</h3>
                <small className="about-title">
                    From the minute you walk into our practice, you’ll see why we stand out – not only do we have the expertise and range of services to ensure your dental needs are met, our patients also frequently comment on what a lovely atmosphere we provide, offering a refreshingly easy experience compared to other dental practices.
                </small>
            </div>

            {/* why choose us section ends  */}

            {/* four facilities section starts  */}

            <div className="row">



                {/* certified dentist starts  */}
                <div className="col-lg-6 g-4">
                    <div className="d-flex mt-3 about-facilities">
                        <div className="about_us">
                            <i class="fas fa-user-md"></i>
                        </div>
                        <div className="text-start">
                            <h5 className="about-title">Certified Dentist</h5>
                            <small>We provide all certified and expert dentists who really care for every patient and present them a beautiful smile.</small><br />
                            <a href="#">Show more </a><button className="showmore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                {/* certified dentist ends  */}




                {/* Quality Care starts  */}
                <div className="col-lg-6 g-4">
                    <div className="d-flex mt-3 about-facilities">
                        <div className="about_us">
                            <i class="fas fa-procedures"></i>

                        </div>
                        <div className="text-start">
                            <h5 className="about-title">Quality Care</h5>
                            <small>Every patient gets the world's best quality treatment from us because we care for all and we provide care.</small><br />
                            <a href="#">Show more</a> <button className="showmore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                {/* Quality Care ends  */}




                {/* New Technology starts  */}
                <div className="col-lg-6 g-4">
                    <div className="d-flex mt-3 about-facilities">
                        <div className="about_us">
                            <i class="fas fa-cog"></i>
                        </div>
                        <div className="text-start">
                            <h5 className="about-title">New Technology</h5>
                            <small>We use world's latest technology to treat our patients so that the patients might get satisfactory outcome.</small><br />
                            <a href="#">Show more </a><button className="showmore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                {/* New Technology ends  */}



                {/* Accept Insurance starts  */}
                <div className="col-lg-6 g-4">
                    <div className="d-flex mt-3 about-facilities">
                        <div className="about_us">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <div className="text-start">
                            <h5 className="about-title">Accept Insurance</h5>
                            <small>We accept various types of insurance to provide different facilities to our patients so that each patient can enjoy service.</small><br />
                            <a href="#">Show more </a><button className="showmore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                {/* Accept Insurance ends  */}

            </div>

            {/* four facilities section ends  */}

        </div>

        // about section ends 
    );
};

export default About;
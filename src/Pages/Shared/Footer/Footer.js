import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        // footer section starts 
        <div className="footer mt-3">
            <div className="container text-start py-3">
                <div className="row ">

                    {/* website name and address starts */}
                    <div className="col-md-5">
                        <div className="col-md-5">

                            <span style={{ color: '#0D6EFB', fontWeight: 'bold' }}> <i class="fas fa-tooth"></i> Sparkling Smile</span>

                            <br />
                            <small>We care for your smile</small>
                            <br />
                            <small>21/1 A Street, A Road, NewYork</small>
                        </div>
                        <div className="col-md-2">

                        </div>
                    </div>
                    {/* website name and address ends */}


                    {/* footer link starts */}
                    <div className="col-md-7">
                        <div className="row">

                            <div className="col-md-6">
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Our Dentists</a></li>
                                    <li><a href="#">Gallery</a></li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <ul>
                                    <li><a href="#">Get help</a></li>
                                    <li><a href="#">Read FAQs</a></li>
                                    <li><a href="#">View all blogs</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* footer link ends */}

                </div>

                {/* copyright starts  */}
                <div className="container text-start py-3">
                    <div className="row">
                        <div className="col-md-4">
                            <small>&copy; IT DevTool, 2021 </small>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6">
                            <a href="">Privacy policy</a>
                            <a href="">Terms condition</a>
                        </div>
                    </div>

                </div>
                {/* copyright ends  */}

            </div>
        </div>
        // footer section ends 

    );
};

export default Footer;
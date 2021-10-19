import React, { useEffect, useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {

    // state declaration starts 
    const [services, setServices] = useState([]);
    // state declaration ends 


    // data load from services.json file starts 
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    // data load from services.json file ends 


    return (

        // services section starts 
        <div id="services" className="container w-100 m-auto p-5">

            {/* title starts */}
            <h1 className="service-title">Our Services</h1>
            <p style={{ color: "rgb(19, 113, 150)" }}>
                We provide world's best treatment with a reasonable price. We care for your smile.
            </p>
            {/* title ends  */}


            {/* showing all services after data loading starts  */}
            <div className="row">

                {services.map((service) => (
                    <div key={service.id} className="col-md-6 col-lg-4 col-sm-12">
                        <div className="cart service p-3 m-2 border border">

                            {/* image showing starts  */}
                            <div className="service img">
                                <img src={service.img} alt="category" />
                            </div>
                            {/* image showing ends  */}

                            {/* service info starts  */}
                            <h4 className="mt-4 service-info">{service.name}</h4>
                            <h6 className="mt-4 service-info">Price: ${service.price}</h6>
                            <p className="mt-2">{service.description}</p>

                            <Link to={`/serviceDetails/${service.id}`}>
                                <button className="btn btn-primary">Show Details</button>
                            </Link>
                            {/* service info ends  */}


                        </div>
                    </div>
                ))}
            </div>
            {/* showing all dentists after data loading ends  */}

        </div>
        // services section ends 

    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Services from '../Home/Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


const ServiceDetails = () => {

    const { serviceId } = useParams();

    // state declaration starts 
    const [data, setData] = useState([]);
    // state declaration ends 

    // data loading starts using Services.json file starts 
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    // data loading starts using Services.json file ends 



    // console.log(data[0].id);

    // try to match data 
    const service = data?.filter(sv => sv.id === Number(serviceId));
    // console.log(service);


    return (
        <div>
            {/* header section starts */}
            <Header></Header>
            {/* header section ends */}

            <br />
            <br />
            <Row>
                {/* <h1>This is service : {serviceId} </h1> */}

                {/* selected data's image showing starts */}
                <Col>
                    <img width="50%" src={service[0]?.img} alt="" />
                </Col>
                {/* selected data's image showing ends */}

                {/* selected data's details showing starts */}
                <Col className="p-3 mx-5">
                    <h3>Name : {service[0]?.name}</h3>
                    <h3>Price : ${service[0]?.price}</h3>
                    <h3>Time : {service[0]?.day} ({service[0]?.time})</h3>
                    <br />
                    <p>{service[0]?.description}</p>
                    <Button>Book Now</Button>
                </Col>
                {/* selected data's details showing ends */}

            </Row>


            {/* footer section starts */}
            <Footer></Footer>
            {/* footer section ends */}

        </div>
    );
};

export default ServiceDetails;
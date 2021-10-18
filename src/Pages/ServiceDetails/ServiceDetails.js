import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    // console.log(data[0].id);
    const service = data?.filter(sv => sv.id === Number(serviceId));
    // console.log(service);


    return (
        <div>
            <Header></Header>

            <br />
            <br />
            <Row>
                {/* <h1>This is service : {serviceId} </h1> */}
                <Col>
                    <img width="50%" src={service[0]?.img} alt="" />
                </Col>

                <Col className="p-3 mx-5">
                    <h3>Name : {service[0]?.name}</h3>
                    <h3>Price : ${service[0]?.price}</h3>
                    <h3>Time : {service[0]?.day} ({service[0]?.time})</h3>
                    <br />
                    <p>{service[0]?.description}</p>
                    <Button>Book Now</Button>

                </Col>
            </Row>



            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>


                    <Navbar.Brand href="#home">
                        {/* <img
                            alt=""
                            src="../../../images/header-icon2.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        /> */}
                        <span style={{ color: '#0D6EFB', fontWeight: 'bold' }}> <i class="fas fa-tooth"></i> Sparkling Smile</span>
                    </Navbar.Brand>


                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#dentists">Dentists</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as:
                            <a href="#login">
                                {user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
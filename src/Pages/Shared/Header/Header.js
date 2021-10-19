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

                    {/* website name and icon starts */}
                    <Navbar.Brand href="#home">
                        <span style={{ color: '#0D6EFB', fontWeight: 'bold' }}> <i class="fas fa-tooth"></i> Sparkling Smile</span>
                    </Navbar.Brand>
                    {/* website name and icon ends */}


                    {/* routing hashlink starts */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        {/* homepage section starts */}
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        {/* homepage section ends */}

                        {/* services section starts */}
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        {/* services section ends */}

                        {/* dentists section starts */}
                        <Nav.Link as={HashLink} to="/home#dentists">Dentists</Nav.Link>
                        {/* dentists section ends */}

                        {/* about section starts */}
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                        {/* about section ends */}

                        {/* if user logged in then shows logout button otherwise shows login button*/}

                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        {/* showing logged in user's display name  */}
                        <Navbar.Text>
                            Signed in as:
                            <a href="#login">
                                {user?.displayName}</a>
                        </Navbar.Text>


                    </Navbar.Collapse>
                    {/* routing hashlink ends */}

                </Container>
            </Navbar>
        </>
    );
};

export default Header;
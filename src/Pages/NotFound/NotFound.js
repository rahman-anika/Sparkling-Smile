import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <br />
            <br />
            <Link to="/"><Button>Go Back</Button>
            </Link>
            <br /><br />
        </div>
    );
};

export default NotFound;
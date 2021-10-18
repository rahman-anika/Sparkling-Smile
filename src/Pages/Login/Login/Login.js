import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import useAuth from './../../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import { Link, useLocation, useHistory } from 'react-router-dom';



initializeAuthentication();
const auth = getAuth();

const Login = () => {

    // const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { user, signInUsingGoogle } = useAuth();



    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';



    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {

                // const user = result.user;
                // console.log(user);
                history.push(redirect_uri);


            }).catch((error) => {
                // Handle Errors here.
                console.log(error.message);

            });


    };




    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }


    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }



    const handleSignIn = (e) => {
        e.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
                // console.log(user);
                setError('');

            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false));

    }


    return (
        <div>
            <Header></Header>
            <div className="login-form py-5 ">

                <div className="mx-5 my-cart">
                    <br />
                    <form onSubmit={handleSignIn}>
                        <h3 className="text-primary">Please Login</h3>
                        <br />





                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Email:</label>
                            <div className="col-sm-8">
                                <input onBlur={handleEmailChange} type="email" placeholder="Your Email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Password:</label>
                            <div className="col-sm-8">
                                <input onBlur={handlePasswordChange} type="password" placeholder="Your Password" className="form-control" id="inputPassword3" required />
                            </div>
                        </div>


                        <div className="row mb-3 text-danger">
                            {error}

                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>

                        <div>
                            --------------------------------------------------
                        </div>
                        <h2 className="text-primary">Or</h2>

                        <button onClick={handleGoogleLogIn} className="btn btn-primary"> <i class="fab fa-google"></i> Sign In Using Your Google Account</button>

                    </form>

                    <br />
                    <br />

                    <span>Are you new in this site? <Link to="/register">Register</Link></span><br />


                    <br /><br /><br />




                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;
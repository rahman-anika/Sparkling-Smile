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

    // state declaration starts 
    // const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // state declaration ends 

    const { user, signInUsingGoogle } = useAuth();


    // for redirecting after login using google account
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';



    // google login starts 
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
    // google login ends 



    // email-password login starts 
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

    // email-password login ends 


    return (
        <div>

            {/* header section starts  */}
            <Header></Header>
            {/* header section ends  */}


            {/* login form starts  */}
            <div className="login-form py-5 ">

                <div className="mx-5 my-cart">
                    <br />
                    <form onSubmit={handleSignIn}>
                        <h3 className="text-primary">Please Login</h3>
                        <br />

                        {/* Email Input starts  */}
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Email:</label>
                            <div className="col-sm-8">
                                <input onBlur={handleEmailChange} type="email" placeholder="Your Email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        {/* Email Input ends  */}

                        {/* Password Input starts  */}
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Password:</label>
                            <div className="col-sm-8">
                                <input onBlur={handlePasswordChange} type="password" placeholder="Your Password" className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        {/* Password Input ends  */}


                        {/* showing error starts   */}
                        <div className="row mb-3 text-danger">
                            {error}
                        </div>
                        {/* showing error ends  */}

                        {/* login button starts  */}
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                        {/* login button ends  */}

                        <div>
                            --------------------------------------------------
                        </div>

                        {/* Google login starts  */}
                        <h2 className="text-primary">Or</h2>

                        <button onClick={handleGoogleLogIn} className="btn btn-primary"> <i class="fab fa-google"></i> Sign In Using Your Google Account</button>
                        {/* Google login ends  */}


                    </form>

                    <br />
                    <br />

                    {/* toggle to register page starts  */}
                    <span>Are you new in this site? <Link to="/register">Register</Link></span><br />
                    {/* toggle to register page ends  */}


                    <br /><br /><br />




                </div>
            </div>

            {/* login form ends  */}

            <Footer></Footer>
        </div>
    );
};

export default Login;
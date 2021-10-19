import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Login/Firebase/firebase.init';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';



initializeAuthentication();

const auth = getAuth();

const Register = () => {

    // state declaraion starts 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    // state declaration ends 


    // registration starts 
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log('Registration will be added', email, password);

        // if password is less than 6 characters then it shows error 
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;

        }

        // if password does not contain two uppercase it shows error using regex

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain two uppercase');
            return;

        }


        // if isLogin is false then goes to registerNewUser 

        isLogin ? processLogin(email, password) : registerNewUser(email, password);



    };


    // used for email-password login (not necessary), also used in login.js page

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setError('');

            })
            .catch((error) => {
                setError(error.message);
                // console.log(error.message);

            });

    };


    // user name, email and password provided in the input field stores in the state starts

    const handleNameChange = (e) => {
        setName(e.target.value);

    };

    const handleEmailChange = (e) => {
        // console.log(e.target.value);
        setEmail(e.target.value);

    };


    const handlePasswordChange = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);

    };

    // user name, email and password provided in the input field stores in the state ends



    // email-password registration starts 

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();

            })
            .catch((error) => {

                setError(error.message);
                // console.log(error.message);

            });

    };


    // username setting starts 
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }
        ).then((result) => {
            // Profile updated!

        }).catch((error) => {


        });

    };
    // username setting ends 


    // email verification starts 
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                // Email verification sent!
                console.log(result);

            });


    };

    // email verification ends 


    // password reset starts 
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                // Password reset email sent!

            })
            .catch((error) => {
                console.log(error.message);

            });


    };
    // password reset ends 





    return (
        <div>

            {/* header section starts  */}
            <Header></Header>
            {/* header section ends  */}


            {/* Registration form starts  */}
            <div className="login-form py-5 ">

                <div className="mx-5 my-cart">
                    <br />

                    <form onSubmit={handleRegistration}>
                        <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                        <br />

                        {/* Username input starts  */}
                        {!isLogin &&
                            <div className="row mb-3">
                                <label htmlFor="inputName" className="col-sm-4 col-form-label">Name:</label>
                                <div className="col-sm-8">
                                    <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" placeholder="Your name" required />
                                </div>
                            </div>

                        }
                        {/* Username input ends  */}

                        {/* Email input starts  */}
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Email:</label>
                            <div className="col-sm-8">
                                <input onBlur={handleEmailChange} type="email" placeholder="Your Email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        {/* Email input ends  */}

                        {/* Password input starts  */}
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Password:</label>
                            <div className="col-sm-8">
                                <input onBlur={handlePasswordChange} type="password" placeholder="Your Password" className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        {/* Password input ends  */}

                        {/* error showing starts  */}
                        <div className="row mb-3 text-danger">
                            {error}
                        </div>
                        {/* error showing ends  */}

                        {/* register button starts  */}
                        <button type="submit" className="btn btn-primary">

                            {
                                isLogin ? 'Login' : 'Register'

                            }
                        </button>
                        {/* register button ends  */}



                        {/* reset password button starts  */}
                        <button onClick={handleResetPassword} type="button" className="mx-4 btn btn-secondary">Reset Password</button>
                        {/* reset password button ends  */}

                    </form>

                    <br />
                    <br />

                    {/* toggle to login page starts  */}
                    <span>Already have an account? <Link to="/login">Login</Link></span><br />
                    {/* toggle to login page ends  */}

                    <br /><br /><br />




                </div>
            </div>
            {/* Registration form ends  */}

            {/* footer section starts  */}
            <Footer></Footer>
            {/* footer section ends  */}

        </div>


    );
};

export default Register;
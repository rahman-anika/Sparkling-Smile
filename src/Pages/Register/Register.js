import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Login/Firebase/firebase.init';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';



initializeAuthentication()
const auth = getAuth();

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const handleRegistration = (e) => {
        e.preventDefault();
        console.log('Registration will be added', email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;

        }

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain two uppercase');
            return;

        }

        isLogin ? processLogin(email, password) : registerNewUser(email, password);



    };

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

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }
        ).then((result) => {
            // Profile updated!

        }).catch((error) => {


        });

    };

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                // Email verification sent!
                console.log(result);

            });


    };

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                // Password reset email sent!

            })
            .catch((error) => {
                console.log(error.message);

            });


    };




    return (
        <div>
            <Header></Header>
            <div className="login-form py-5 ">

                <div className="mx-5 my-cart">
                    <br />
                    <form onSubmit={handleRegistration}>
                        <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                        <br />

                        {!isLogin &&
                            <div className="row mb-3">
                                <label htmlFor="inputName" className="col-sm-4 col-form-label">Name:</label>
                                <div className="col-sm-8">
                                    <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" placeholder="Your name" required />
                                </div>
                            </div>

                        }
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

                            {
                                isLogin ? 'Login' : 'Register'

                            }
                        </button>


                        <button onClick={handleResetPassword} type="button" className="mx-4 btn btn-secondary">Reset Password</button>
                    </form>

                    <br />
                    <br />

                    <span>Already have an account? <Link to="/login">Login</Link></span><br />


                    <br /><br /><br />




                </div>
            </div>

            <Footer></Footer>


        </div>


    );
};

export default Register;
import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {name: displayName, email:email };
                setLoggedInUser(signedInUser);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage)

            });
    }
    return (
        <div className='signup-form'>
            <h3>Create an account</h3>
            <form action="">
                <input className='input' type="text" placeholder='Name' /> <br />
                <input className='input' type="email" name="email" placeholder='Enter Your E-mail' /> <br />
                <input className='input' type="password" name="" id="" placeholder='Password' placeholder='Password' /><br />
                <input className='input' type="password" name="" id="" placeholder='Confirm Password' /> <br />
                <input type="submit" value="Create an account" />
                <p>Already have an account? <span>Log In</span></p>
            </form>
            <p>--------- or ----------</p>
            <button onClick={handleGoogleSignIn}>Continue With Google</button>

        </div>
    );
};

export default Login;
import React, { useContext, useState, } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

   

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email }
                setLoggedInUser(signedInUser);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

            });
    }
    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }

        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = (isPasswordValid && passwordHasNumber);
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log("sign in user info", res.user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(function () {
            console.log('user name successfully updated', user)
        }).catch(function (error) {
            console.log(error);
        });
    }
    return (
        <div className='signup-form'>
            <h3>{newUser ? 'Create an account' : 'Log In'}</h3>
            <form onSubmit={handleSubmit}>
                {newUser && <input className='input' onBlur={handleBlur} type="text" name="name" placeholder='Name' required />}  <br />
                <input className='input' onBlur={handleBlur} type="email" name="email" placeholder='Enter Your E-mail' required /> <br />
                <input className='input' onBlur={handleBlur} type="password" name="password" id="" placeholder='Password' placeholder='Password' required /><br />
                {newUser && <input className='input' onBlur={handleBlur} type="password" name="confirm-password" id="" placeholder='Confirm Password' required />}  <br />
                <input type="submit" value={newUser ? "Create an account" : 'Log in'} />
                <p>Don't have an account? <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" /><label htmlFor='newUser'>Sign Up</label></p>
                <p style={{ color: 'red' }}>{user.error}</p>
                {user.success && <p style={{ color: 'green' }}>user {newUser ? 'created' : 'Logged In'} successfully</p>}
            </form>
            <p>--------- or ----------</p>
            <button onClick={handleGoogleSignIn}>Continue With Google</button>

        </div>
    );
};

export default Login;
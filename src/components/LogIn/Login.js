import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='signup-form'>
            <h3>Create an account</h3>
            <form action="">
                <input className='input' type="text" placeholder='Name' /> <br/>
                <input className='input' type="email" name="email" placeholder='Enter Your E-mail' /> <br/>
                <input className='input' type="password" name="" id="" placeholder='Password' placeholder='Password'/><br/>
                <input className='input' type="password" name="" id="" placeholder='Confirm Password' /> <br/>
                <input type="submit" value="Create an account"/>
                <p>Already have an account? <span>Log In</span></p>
            </form>
            <p>--------- or ----------</p>
            <button>Continue With Google</button>

        </div>
    );
};

export default Login;
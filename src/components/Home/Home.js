import React from 'react';
import data from '../../fakeData/fakedata.json';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css';


const Home = () => {
    
    return (
        <div className='cart-container'>
            {
                data.map(vehicle => <Vehicle vehicle={vehicle}></Vehicle>)
            }
        </div>
    );
};

export default Home;
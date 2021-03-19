import React from 'react';
import data from '../../fakeData/fakedata.json';
import './Home.css';


const Home = () => {
    return (
        <div className='cart-container'>
            {
                data.map(test =>
                <div className='cart'>
                    <img src={test.image} width='125px' alt=""/>
                    <h3>{test.name}</h3>
                </div>
                )}
        </div>
    );
};

export default Home;
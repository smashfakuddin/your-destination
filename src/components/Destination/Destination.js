import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import peopleIcon from '../../photo/peopleicon.png'

const Destination = () => {
    const { name } = useParams();

    return (
        <div className='destination'>
            <form className='destination-form' action="">
                <label htmlFor="from">From</label>
                <input type="text" name='from' /> <br />
                <label htmlFor="to">To</label>
                <input type="text" name="to" id="" />
                <input type="submit" value="Search" />
            </form>
            {
                <div>
                    <div className='price-cart'>
                        <h1>{name}</h1>
                        <p><img width='20' src={peopleIcon} alt="" /> 4</p>
                        <h4>$65</h4>
                    </div>
                    <div className='price-cart'>
                        <h1>{name}</h1>
                        <p><img width='20' src={peopleIcon} alt="" /> 4</p>
                        <h4>$65</h4>
                    </div>
                    <div className='price-cart'>
                        <h1>{name}</h1>
                        <p><img width='20' src={peopleIcon} alt="" /> 4</p>
                        <h4>$65</h4>
                    </div>
                </div>

            }
        </div>
    );
};

export default Destination;
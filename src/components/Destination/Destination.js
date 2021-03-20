import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import carImage from '../../photo/car.png';
import bikeImage from '../../photo/bike.png';
import trainImage from '../../photo/train.png';
import busImage from '../../photo/bus.png'
import peopleIcon from '../../photo/peopleicon.png'

const Destination = () => {
    const { name } = useParams();
    let image;
    if (name === 'Car') {
        image = carImage;
    }
    if (name === 'Bike') {
        image = bikeImage;
    }
    if (name === 'Bus') {
        image = busImage;
    }
    if (name === 'Train') {
        image = trainImage;
    }

    const [show, setShow] = useState(true);
    const onClick = () => setShow(false);
    return (
        <div className='destination'>{show ?
            <div className='destination-form' action="">
                <label htmlFor="from">Pick From</label>
                <input className='destination-input' type="text" name='from' /> <br />
                <label htmlFor="to">Destination</label>
                <input className='destination-input' type="text" name="to" id="" />
                <br />
                <button className='main-button' onClick={onClick}>Search</button>
            </div> : null}
            { show ? null :
                <div className='searched-cart'>
                    <h2>Mirpur 1</h2>
                    <h2>Dhanmondi</h2>
                </div>
            }
            {
                show ? null :
                    <div>
                        <div className='price-cart'>
                            <img width='75' src={image} alt="" />
                            <h3>{name}</h3>
                            <p><img width='20' src={peopleIcon} alt="" /> 4</p>
                            <h4>$65</h4>
                        </div>
                        <div className='price-cart'>
                            <img width='75' src={image} alt="" />
                            <h3>{name}</h3>
                            <p><img width='20' src={peopleIcon} alt="" /> 4</p>
                            <h4>$65</h4>
                        </div>
                        <div className='price-cart'>
                            <img width='75' src={image} alt="" />
                            <h3>{name}</h3>
                            <p><img width='20' src={peopleIcon} alt="" /> 4</p>
                            <h4>$65</h4>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Destination;
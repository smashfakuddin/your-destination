import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import data from '../../fakeData/fakedata.json'

const Destination = () => {
    const { name,image } = useParams();
    console.log(name,image)
    // const [vehicleType, setVehicleType] = useState({});
    // useEffect(() => {
    //     setVehicleType(data);
    //      console.log(vehicleType)
    // }, [name])
    // if (!vehicleType.length) { return null };
    
    return (
        <div>
            <form className='destination-form' action="">
                <label htmlFor="from">From</label>
                <input type="text" name='from' /> <br />
                <label htmlFor="to">To</label>
                <input type="text" name="to" id="" />
                <input type="submit" value="Search" />
            </form>
            <div>
                <h1>{name}</h1>
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default Destination;
import React from 'react';
import { useHistory } from 'react-router';

const Vehicle = (props) => {

    const { image, name } = props.vehicle;
    const history = useHistory();
    const vehicle =(name) => {
        const url = `vehicle/${name}`;
        history.push(url);
    }
    return (

        <div className='cart col-sm mb-5' onClick={() => vehicle(name)} >
            <img src={image} width='125px' alt="" />
            <h3>{name}</h3>
        </div>

    );
};

export default Vehicle;
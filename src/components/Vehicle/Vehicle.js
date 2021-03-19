import React from 'react';
import { useHistory } from 'react-router';

const Vehicle = (props) => {

    const { image, name } = props.vehicle;
    const history = useHistory();
    const vehicle =(name,image) => {
        const url = `vehicle/${name}`;
        history.push(url);
    }
    return (

        <div className='cart' onClick={() => vehicle(name,image)} >
            <img src={image} width='125px' alt="" />
            <h3>{name}</h3>
        </div>

    );
};

export default Vehicle;
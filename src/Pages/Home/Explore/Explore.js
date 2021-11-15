import React, { useState, useEffect } from 'react';
import './Explore.css'
import { Col, Form, Row, Button } from 'react-bootstrap';
import Bike from '../Bike/Bike';
const Explore = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    return (
        <div className="my-5" id="explore">
            <h1 className="my-5">Our Tour Spots</h1>
            <div className="container">
                <div className="row gy-3">
                    {
                        bikes.map(bike => <Bike
                            key={bike._id}
                            bike={bike}></Bike>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Explore;
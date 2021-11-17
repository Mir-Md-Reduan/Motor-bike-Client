import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Bikes.css'




const Bikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Bikes')
            .then(res => res.json())
            .then(data => setBikes(data.slice(0, 6)))
    }, [])
    return (
        <div className="my-5" id="bikes">
            <h1 className="my-5 Bikes-Headline">Our Hot Bikes</h1>
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

export default Bikes;
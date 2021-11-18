import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const ManageBike = () => {
    const [bikes, setBikes] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(dataF => setBikes(dataF))
    }, []);
    console.log(bikes);
    return (
        <div className="my-5">
            <h2>Manage Bike</h2>
            <div className="left-side my-5">
                <Card style={{ width: '18rem' }}>
                    <h2>List of All Tourist Spot</h2>
                    <div className="container">
                        <div className="row gy-3">
                            {

                                bikes?.map((pd) => (
                                    <div className="col-md-12">
                                        <div className="service border border p-3">
                                            <div className="services-img ">
                                                <img className="w-100" src={pd?.img} alt="" />
                                            </div>

                                            <h6>{pd?.name}</h6>

                                            <p>{pd?.email}</p>
                                            <h3 className="text-danger"> Cost :{pd?.price}$</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ManageBike;
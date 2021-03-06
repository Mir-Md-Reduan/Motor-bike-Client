import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const ManageOrders = () => {
    const [control, setControl] = useState(false);
    const [dataF, setDataF] = useState([]);

    useEffect(() => {
        fetch('https://boiling-island-29572.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => { setDataF(data) }
            )
    }, [control]);
    console.log(dataF);

    const handleDelete = (id) => {
        fetch(`https://boiling-island-29572.herokuapp.com/delteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                    alert('Booking Is Deleted Successfully');
                }
            });
        console.log(dataF);
    };
    return (
        <div>
            <div className="left-side my-5">
                <Card className=" d-flex justify-content-center align-content-center">
                    <h2>List of All Booking Bikes</h2>
                    <div className="container">
                        <div className="row gy-3">
                            {

                                dataF?.map((pd) => (
                                    <div className="col-md-12">
                                        <div className="service border border p-3">
                                            <div className="services-img ">
                                                <img className="w-100" src={pd?.image} alt="" />
                                            </div>

                                            <h6>{pd?.Name}</h6>

                                            <p>{pd?.Email}</p>
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

export default ManageOrders;
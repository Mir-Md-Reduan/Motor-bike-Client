import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const ManageOrders = () => {
    const [control, setControl] = useState(false);
    const [dataF, setDataF] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => { setDataF(data) }
            )
    }, [control]);

    const handleDelete = (id) => {
        fetch(`https://grim-asylum-43912.herokuapp.com/delteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                    alert('Booking Is Deleted Successfully');
                }
            });
        console.log(id);
    };
    return (
        <div>
            <div className="left-side my-5">
                <Card style={{ width: '18rem' }}>
                    <h2>List of All Booking Tourist Spot</h2>
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

export default ManageOrders;
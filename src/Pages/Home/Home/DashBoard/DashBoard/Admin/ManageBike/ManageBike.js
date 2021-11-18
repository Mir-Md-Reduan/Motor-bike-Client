import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const ManageBike = () => {
    const [bikes, setBikes] = useState();
    const [control, setControl] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(dataF => setBikes(dataF))
    }, [control]);
    console.log(bikes);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteBike/${id}`, {
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
        <div className="my-5">
            <h2>Manage Bike</h2>
            <div className="left-side my-5">
                <Card className=" d-flex justify-content-center align-content-center">
                    <h2>List of All Bikes</h2>
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
                                            <Button onClick={() => handleDelete(pd?._id)}>Delete</Button>
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
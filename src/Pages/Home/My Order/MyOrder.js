import React from 'react';
import { useEffect, useState } from "react";
import useAuth from '../../../Hooks/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const [booking, setBooking] = useState([]);
    const [control, setControl] = useState(false);
    const { user } = useAuth();
    const email = user.email;

    useEffect(() => {
        fetch(`https://boiling-island-29572.herokuapp.com/myBookings/${email}`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [email]);
    console.log(booking);
    const handleDelete = (id) => {
        fetch(`https://boiling-island-29572.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                    alert('Booking Is Deleted Successfully')
                }
            });
        console.log(id);
    };
    return (
        <div className="mt-5">
            <h1 className="my-3 text-white">My orders </h1>
            <div className="booking">
                <div className="row g-3 container">
                    {booking?.map((pd) => (
                        <div className="col-md-4 ">
                            <div className="service border border p-3">
                                <div className="booking-img ">
                                    <img className="w-100" src={pd?.image} alt="" />
                                </div>
                                <h6 className="Booking-name">{pd?.Name}</h6>
                                <p className="Booking-date">{pd?.date}</p>
                                <h3 className="text-danger"> Cost :{pd?.price}$</h3>

                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn btn-danger"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MyOrder;
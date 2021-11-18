import React from 'react';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/addBike', {

            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                console.log(data);
                alert('New Bikes added successfully');
                reset();
            })
    };
    return (
        <div className="my-5">
            <div className="booking-details mt-5 ">
                <h4 className="mt-5 text-white">Add A New Admin</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" {...register("email")} placeholder="Email" />
                    <input type="submit" />
                </form>
            </div>
        </div >
    );
};

export default MakeAdmin;
import React from 'react';
import { useForm } from "react-hook-form";

const AddBike = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://boiling-island-29572.herokuapp.com/addBike', {

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
            <div className="booking-details mt-5">
                <h4 className="mt-5 text-white">Add A New Bike</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 30 })} placeholder="name" />
                    <textarea {...register("description")} placeholder="description" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="imag url" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddBike;
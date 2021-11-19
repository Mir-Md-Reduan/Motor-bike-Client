import React from 'react';
import './Reviews.css';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';

const Reviews = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://boiling-island-29572.herokuapp.com/addReview', {

            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                console.log(data);
                alert('Review added successfully');
                reset();
            })
        // })
        //         .then(res => {

        // })
    };
    return (
        <div className="my-5 Reviews-Heading">
            <div className="right-side my-5">
                <div className="booking-details mt-5">
                    <h4 className="my-5">Add Review</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email", { required: true, maxLength: 30 })} value={user.email} className="p-2 m-2 w-50" />
                        <input {...register("comment")} placeholder="Comment Please" className="p-2 m-2 w-50" />
                        <select {...register("star")} className="p-2 m-2 w-50">
                            <option value="5">five</option>
                            <option value="4">four</option>
                            <option value="3">three</option>
                            <option value="2">two</option>
                            <option value="1">one</option>
                        </select>
                        <input type="submit" className="p-2 m-2 w-50" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
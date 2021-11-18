import React, { useState, useEffect } from 'react';
import ReviewSingle from './ReviewSingle';

const Review = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    console.log(reviews);
    return (
        <div className="my-5">
            <h1 className="my-5 Bikes-Headline">Our Client Reviews</h1>
            <div className="container">
                <div className="row gy-3">
                    {
                        reviews?.map(review => <ReviewSingle
                            key={review._id}
                            review={review}></ReviewSingle>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;
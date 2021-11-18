import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ReviewSingle = ({ review }) => {
    const { comment, star, email } = review;
    return (
        <div className="col-lg-4 col-md-6 container">
            <Card>
                <Card.Body>
                    <Card.Title>{email}</Card.Title>
                    <Card.Title>{comment}</Card.Title>
                    <Card.Title>{star} Star</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewSingle;
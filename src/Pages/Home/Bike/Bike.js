import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Bike = ({ bike }) => {
    const { name, img, description, _id } = bike;
    return (
        <div className="col-lg-6 col-md-12">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)}
                    </Card.Text>
                    <Link to={`/booking/${_id}`}>
                        <Button variant="warning">Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Bike;
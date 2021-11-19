import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import './Booking.css'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Booking = () => {
    const { bookingId } = useParams();
    const { user, isLoading } = useAuth();
    const [dataF, setDataF] = useState([]);
    const email = user.email;
    const { register, handleSubmit, reset } = useForm();
    const status = "pending";
    useEffect(() => {
        fetch(`https://boiling-island-29572.herokuapp.com/singleBike/${bookingId}`)
            .then(res => res.json())
            .then(dataF => {
                setDataF(dataF)
                reset()
            })
    }, [isLoading]);
    console.log(dataF.name);



    const onSubmit = data => {
        data.status = "pending";
        data.status = status;

        fetch('https://boiling-island-29572.herokuapp.com/booking', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                alert('booking is successful');
                reset();
            })

    };

    return (
        <div className="my-5 ">
            <h1>Booking Details </h1>
            <Container>
                <Row>
                    <Col>
                        <div className="left-side">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={dataF?.img} />
                                <Card.Body>
                                    <Card.Title>Motor Bike Name : {dataF?.name}</Card.Title>
                                    <Card.Text>
                                        {dataF?.description}
                                    </Card.Text>
                                    <h3>Motor Bike price : ${dataF?.price} </h3>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="right-side">
                            <div className="booking-details">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        {...register("Email")}
                                        defaultValue={user?.email}
                                        className="p-2 m-2 w-75" />
                                    <br />
                                    <input
                                        {...register("Name")}
                                        defaultValue={dataF?.name}
                                        className="p-2 m-2 w-75" />
                                    <br />
                                    <input
                                        {...register("Phone_No")}
                                        placeholder="Your Phone No Please!"
                                        className="p-2 m-2 w-75" />
                                    <br />
                                    <input
                                        {...register("Address")}
                                        placeholder="Your Address Please!"
                                        className="p-2 m-2 w-75" />
                                    <br />
                                    <input
                                        {...register("date")}
                                        type="date"
                                        className="p-2 m-2 w-75"
                                    />
                                    <br />
                                    <input
                                        {...register("price")}
                                        defaultValue={dataF?.price}
                                        className="p-2 m-2 w-75"
                                    />
                                    <br />
                                    <input
                                        {...register("image")}
                                        value={dataF?.img}
                                        className="p-2 m-2 w-75"
                                    />
                                    <br />
                                    <input
                                        type="submit"
                                        value="Order Now"
                                        className="btn btn-warning w-50"
                                    />
                                </form>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Booking;
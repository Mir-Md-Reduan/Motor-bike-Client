import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import useAuth from '../../../../../Hooks/useAuth';
import "./DashBoard.css";
import Reviews from '../../Reviews/Reviews';

import { Button } from 'react-bootstrap';
import Payment from '../NormalUser/Payment/Payment';
import ManageOrders from './ManageOrders/ManageOrders';
import AddBike from './Admin/AddBike/AddBike';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManageBike from './Admin/ManageBike/ManageBike';
import MyOrder from '../../../My Order/MyOrder';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://boiling-island-29572.herokuapp.com/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);
    console.log(isAdmin);
    return (
        <div>
            <div className="dashboard-container my-5">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard my-5">
                            <h2>Dashboard</h2>
                            {!isAdmin && (
                                <div>
                                    <Link to={`${url}/payment`}>
                                        <li className="dashboard-menu mt-3 text-decoration-none">Payment</li>
                                    </Link>
                                    <Link to={`${url}/myOrders`}>
                                        <li className="dashboard-menu mt-3 text-decoration-none">My Orders</li>
                                    </Link>
                                    <Link to={`${url}/review`}>
                                        <li className="dashboard-menu mt-3 text-decoration-none">Review</li>
                                    </Link>
                                    <br />
                                    <Button onClick={logOut} variant="light">LogOut</Button>
                                </div>
                            )}

                            <div className="admin-dashboard">
                                {isAdmin && (
                                    <div>
                                        <Link to={`${url}/manageOrders`}>
                                            <li className="dashboard-menu">Manage Orders</li>
                                        </Link>
                                        <Link to={`${url}/addABike`}>
                                            <li className="dashboard-menu">Add a Bike</li>
                                        </Link>
                                        <Link to={`${url}/makeAdmin`}>
                                            <li className="dashboard-menu">Make Admin</li>
                                        </Link>
                                        <Link to={`${url}/manageBike`}>
                                            <li className="dashboard-menu">Manage Bike</li>
                                        </Link>
                                    </div>

                                )
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <h2>Select One</h2>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/myOrders`}>
                                <MyOrder></MyOrder>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Reviews></Reviews>
                            </Route>
                            <Route path={`${path}/manageOrders`}>
                                <ManageOrders></ManageOrders>
                            </Route>
                            <Route path={`${path}/addABike`}>
                                <AddBike></AddBike>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path={`${path}/manageBike`}>
                                <ManageBike></ManageBike>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
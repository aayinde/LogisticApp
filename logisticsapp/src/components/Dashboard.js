import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Welcome, {user.name}!</h4>
                        </div>
                        <div className="card-body">
                            <p>You are logged in to the Logistics App.</p>
                            <Link to="/suppliers" className="btn btn-primary mr-2">
                                View Suppliers
                            </Link>
                            <Link to="/warehouses" className="btn btn-primary mr-2">
                                View Warehouses
                            </Link>
                            <Link to="/products" className="btn btn-primary">
                                View Products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

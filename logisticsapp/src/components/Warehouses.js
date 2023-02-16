import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { getWarehouses, deleteWarehouse } from '../services/api';

const Warehouses = () => {
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        const fetchWarehouses = async () => {
            try {
                const response = await getWarehouses();
                setWarehouses(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchWarehouses();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this warehouse?')) {
            try {
                await deleteWarehouse(id);
                setWarehouses(warehouses.filter((warehouse) => warehouse.id !== id));
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div>
            <h2>Warehouses</h2>
            <Link to="/warehouses/create" className="btn btn-primary mb-3">
                Create Warehouse
            </Link>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {warehouses.map((warehouse) => (
                    <tr key={warehouse.id}>
                        <td>{warehouse.supplier.name}</td>
                        <td>{warehouse.address}</td>

                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Warehouses;

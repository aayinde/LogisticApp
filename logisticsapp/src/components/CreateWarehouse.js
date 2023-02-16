import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createWarehouse } from '../services/api';
import { Form, Button } from 'react-bootstrap';

const CreateWarehouse = ({ user }) => {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [address, setaddress] = useState('');
    const [supplierId, setSupplierId] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const warehouseData = {
                name: name,
            };
            await createWarehouse(warehouseData);
            history('/warehouses');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h2>Create Warehouse</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter warehouse name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    );
};

export default CreateWarehouse;

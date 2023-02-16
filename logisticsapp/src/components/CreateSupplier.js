import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSupplier } from '../services/api';

const CreateSupplier = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await createSupplier({ name, location });
            history('/suppliers');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Create Supplier</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateSupplier;

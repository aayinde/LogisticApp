import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/api';

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [supplierId, setSupplierId] = useState('');
    const [warehouseId, setWarehouseId] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createProduct({ name, price, supplierId, warehouseId });
            history('/products');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Create Product</h2>
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
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        step="0.01"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="supplierId">Supplier ID</label>
                    <input
                        type="number"
                        id="supplierId"
                        value={supplierId}
                        onChange={(event) => setSupplierId(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="warehouseId">Warehouse ID</label>
                    <input
                        type="number"
                        id="warehouseId"
                        value={warehouseId}
                        onChange={(event) => setWarehouseId(event.target.value)}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateProduct;

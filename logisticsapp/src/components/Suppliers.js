import React, { useState, useEffect } from 'react';
import { getSuppliers } from '../services/api';

const Suppliers = () => {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const response = await getSuppliers();
                setSuppliers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSuppliers();
    }, []);

    return (
        <div>
            <h2>Suppliers</h2>
            {suppliers.map((supplier) => (
                <div key={supplier.id}>
                    <p>{supplier.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Suppliers;

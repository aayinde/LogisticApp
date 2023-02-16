import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {getProducts, createProduct, deleteProduct} from '../services/api';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [supplierId, setSupplierId] = useState('');
    const [warehouseId, setWarehouseId] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newProduct = {
            name,
            price,
            supplier_id: supplierId,
            warehouse_id: warehouseId
        };

        try {
            const response = await createProduct(newProduct);
            setProducts([...products, response.data]);
            setName('');
            setPrice('');
            setSupplierId('');
            setWarehouseId('');
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            await deleteProduct(productId);
            setProducts(products.filter((product) => product.id !== productId));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Products</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter Product Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Product Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        placeholder="Enter Product Price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Product Supplier</label>
                    <select
                        id="supplierId"
                        className="form-control"
                        value={supplierId}
                        onChange={(event) => setSupplierId(event.target.value)}
                    >
                        <option value="">Select supplier</option>
                        <option value="1">Supplier 1</option>
                        <option value="2">Supplier 2</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Product Warehouse</label>
                    <select
                        id="warehouseId"
                        className="form-control"
                        value={warehouseId}
                        onChange={(event) => setWarehouseId(event.target.value)}
                    >
                        <option value="">Select Warehouse</option>
                        <option value="1">Warehouse 1</option>
                        <option value="2">Warehouse 2</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Create Product</button>
            </form>
            <hr/>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Supplier</th>
                    <th>Warehouse</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.supplier ? product.supplier.name : '-'}</td>
                        <td>{product.warehouse ? product.warehouse.name : '-'}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Product;

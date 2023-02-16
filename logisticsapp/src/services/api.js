import axios from 'axios';
axios.defaults.baseURL = 'http://app.test/api';

const apiClient = axios.create();

// Register a new user
export const registerUser = async (userData) => {
    const response = await apiClient.post('/user/signup', userData);
    return response.data;
};

// Log in a user
export const loginUser = async (userData) => {
    const response = await apiClient.post('/user/signin', userData);
    return response.data;
};

// Log out a user
export const logoutUser = async () => {
    const response = await apiClient.post('/logout');
    return response.data;
};

// Get the current user
export const getUser = async (email) => {
    const response = await apiClient.get(`/user/${email}`);
    return response.data;
};

// Create a new supplier
export const createSupplier = async (supplierData) => {
    const response = await apiClient.post('/suppliers', supplierData);
    return response.data;
};

// Create a new product
export const createProduct = async (productData) => {
    const response = await apiClient.post('/products', productData);
    return response.data;
};

// Create a new warehouse
export const createWarehouse = async (warehouseData) => {
    const response = await apiClient.post('/warehouses', warehouseData);
    return response.data;
};

// Get all suppliers
export const getSuppliers = async () => {
    const response = await apiClient.get('/suppliers');
    return response.data;
};

// Get all products
export const getProducts = async () => {
    const response = await apiClient.get('/products');
    return response.data;
};

// Get all warehouses
export const getWarehouses = async () => {
    const response = await apiClient.get('/warehouses');
    return response.data;
};

// Delete a supplier
export const deleteSupplier = async (supplierId) => {
    const response = await apiClient.delete(`/suppliers/${supplierId}`);
    return response.data;
};

// Delete a product
export const deleteProduct = async (productId) => {
    const response = await apiClient.delete(`/products/${productId}`);
    return response.data;
};

// Delete a warehouse
export const deleteWarehouse = async (warehouseId) => {
    const response = await apiClient.delete(`/warehouses/${warehouseId}`);
    return response.data;
};




// import axios from 'axios';
//
// // Set the base URL for the API
// axios.defaults.baseURL = 'http://app.test/api';
//
// // Create an instance of the axios client with default options
// const httpClient = axios.create();
//
// // Add an interceptor to the httpClient to include the token in the Authorization header of each request
// httpClient.interceptors.request.use((config) => {
//     const token = localStorage.getItem('access_token');
//
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//
//     return config;
// });
//
// // Export the methods to interact with the API
// export const loginUser = async (email, password) => {
//     const response = await httpClient.post('/login', { email, password });
//     return response.data;
// };
// export const getUser = async () => {
//     try {
//         const response = await axios.get('/user');
//         return response.data;
//     } catch (error) {
//         throw new Error(error.response.data.message || 'Failed to fetch user');
//     }
// };
//
// export const registerUser = async (name, email, password) => {
//     const response = await httpClient.post('/register', { name, email, password });
//     return response.data;
// };
//
// export const logoutUser = async () => {
//     const response = await httpClient.post('/logout');
//     return response.data;
// };
//
// // Create a new product
// export const createProduct = async (productData) => {
//     const response = await httpClient.post('/products', productData);
//     return response.data;
// };
//
// // Create a new warehouse
// export const createWarehouse = async (warehouseData) => {
//     const response = await httpClient.post('/warehouses', warehouseData);
//     return response.data;
// };
//
// // Get all suppliers
// export const getSuppliers = async () => {
//     const response = await httpClient.get('/suppliers');
//     return response.data;
// };
//
// // Get all products
// export const getProducts = async () => {
//     const response = await httpClient.get('/products');
//     return response.data;
// };
//
// // Get all warehouses
// export const getWarehouses = async () => {
//     const response = await httpClient.get('/warehouses');
//     return response.data;
// };
//
// // Delete a supplier
// export const deleteSupplier = async (supplierId) => {
//     const response = await httpClient.delete(`/suppliers/${supplierId}`);
//     return response.data;
// };
//
// // Delete a product
// export const deleteProduct = async (productId) => {
//     const response = await httpClient.delete(`/products/${productId}`);
//     return response.data;
// };
//
// // Delete a warehouse
// export const deleteWarehouse = async (warehouseId) => {
//     const response = await httpClient.delete(`/warehouses/${warehouseId}`);
//     return response.data;
// };

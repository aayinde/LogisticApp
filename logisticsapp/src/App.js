import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Signup';
import Dashboard from './components/Dashboard';
import Logout from './components/auth/Signout';
import Suppliers from './components/Suppliers';
import CreateSupplier from './components/CreateSupplier';
import Warehouses from './components/Warehouses';
import CreateWarehouse from './components/CreateWarehouse';
import Products from './components/Products';
import CreateProduct from './components/CreateProduct';
import { getUser, logoutUser } from './services/api';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUser(user.email);
                console.log(response.data)
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            await logoutUser();
            setUser(null);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Router>
            <div className="App">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Logistics App</Navbar.Brand>
                        <Nav className="me-auto">
                            {user ? (
                                <>
                                    <Nav.Link href="/suppliers">Suppliers</Nav.Link>
                                    <Nav.Link href="/warehouses">Warehouses</Nav.Link>
                                    <Nav.Link href="/products">Products</Nav.Link>
                                </>
                            ) : null}
                        </Nav>
                        <Nav className="justify-content-end">
                            {user ? (
                                <>
                                    <Navbar.Text>Welcome, {user.name}!</Navbar.Text>
                                    <Nav.Link href="/logout" onClick={handleLogout}>Logout</Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Register</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/register" element={<Register setUser={setUser} />} />
                    <Route path="/logout" element={<Logout handleLogout={handleLogout} />} />
                    <Route path="/" element={<Dashboard user={user} />} />
                    <Route path="/suppliers" element={<Suppliers user={user} />} />
                    <Route path="/suppliers/create" element={<CreateSupplier user={user} />} />
                    <Route path="/warehouses" element={<Warehouses user={user} />} />
                    <Route path="/warehouses/create" element={<CreateWarehouse user={user} />} />
                    <Route path="/products" element={<Products user={user} />} />
                    <Route path="/products/create" element={<CreateProduct user={user} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

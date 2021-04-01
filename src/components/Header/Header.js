import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <Navbar style={{ background: '#203d37' }} className="navbar" collapseOnSelect expand="lg" variant="dark">
                <div className="container">
                    <Navbar.Brand as={Link} to="/home"><h3>ShopBD</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link style={{ fontSize: '18px', color: 'white' }} as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link style={{ fontSize: '18px', color: 'white' }} as={Link} to="/orders">Orders</Nav.Link>
                            <Nav.Link style={{ fontSize: '18px', color: 'white' }} as={Link} to="/admin">Admin</Nav.Link>
                            <Nav.Link style={{ fontSize: '18px', color: 'white' }} as={Link} to="/deals">Deals</Nav.Link>
                            {
                                loggedInUser.name || loggedInUser.email
                                    ? <Nav.Link as={Link} to="/">
                                        <img style={{ width: '34px', borderRadius: '50%' }} src={loggedInUser.photoURL || loggedInUser.name} alt="" />
                                    </Nav.Link>
                                    : <Nav.Link
                                        style={{ fontSize: '18px', color: 'white', background: '#28a745', borderRadius: '4px', padding: '6px 14px' }}
                                        as={Link}
                                        to="/login">
                                        Login
                            </Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
};

export default Header;
import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import './AdminPanel.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import manageProductIcon from '../../images/grid 1.png';
import addProductIcon from '../../images/plus 1.png';
import editProductIcon from '../../images/edit 1.png';
import ManageProduct from '../ManageProduct/ManageProduct';

const routes = [

    {
        path: "/",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <ManageProduct />
    },
    {
        path: "/addProduct",
        sidebar: () => <div></div>,
        main: () => <AddProduct />
    },
    {
        path: "/editProduct",
        sidebar: () => <div></div>,
        main: () => <h2>Edit Product</h2>
    }
];
const AdminPanel = () => {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "20%",
                        background: "rgb(29 53 48)",
                        color: "white",
                        height: "100vh"
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link style={{ color: 'white', fontSize: '1.3rem' }} to="/">
                                <img style={{ width: '25px', marginRight: '5px', alignItems: 'center' }} src={manageProductIcon} alt='/' />
                             Manage Product
                            </Link>
                        </li>
                        <li>
                            <Link style={{ color: 'white', fontSize: '1.3rem' }} to="/addProduct">
                                <img style={{ width: '25px', marginRight: '5px', alignItems: 'center' }} src={addProductIcon} alt='/' />
                                addProduct
                            </Link>
                        </li>
                        <li>
                            <Link style={{ color: 'white', fontSize: '1.3rem' }} to="/editProduct">
                                <img style={{ width: '25px', marginRight: '5px', alignItems: 'center' }} src={editProductIcon} alt='/' />
                                Edit Product
                            </Link>
                        </li>
                    </ul>

                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default AdminPanel;
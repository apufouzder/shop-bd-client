import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import loader from '../../images/loader.gif';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:2050/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <Container className="py-5">
            <h3 className="mb-5">You have order {orders.length} Product</h3>
            {
                orders.length > 0
                    ? orders.map(order => <OrderDetails key={order._id} order={order} />)
                    : <img style={{ width: '30%', margin: 'auto' }} src={loader} alt="" />
            }
        </Container>
    );
};

export default Orders;
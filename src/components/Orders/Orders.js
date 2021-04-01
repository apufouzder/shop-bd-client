import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
    }, [loggedInUser.email])

    return (
        <Container className="py-5">
            <h3 className="mb-5" style={{ lineHeight: "2.2rem" }}>
                Welcome!
            <strong style={{ color: '#28a745' }}> {loggedInUser.name} </strong>
                <br />
            You order
            <strong style={{ color: '#28a745' }}> {orders.length} </strong>
                product.
            </h3>
            {
                orders.length > 0
                    ? orders.map(order => <OrderDetails key={order._id} order={order} />)
                    : <img style={{ width: '30%', margin: 'auto' }} src={loader} alt="" />
            }
        </Container>
    );
};

export default Orders;
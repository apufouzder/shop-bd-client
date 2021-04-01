import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './ProductDetails.css';

const ProductDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [product, setProducts] = useState([]);
    const { name, quantity, price, size } = product;
    let { _id } = useParams();

    useEffect(() => {
        fetch(`https://pumpkin-crumble-28315.herokuapp.com/product/${_id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [_id])

    // handle checkout button function
    const handleOrder = () => {
        const newOrder = { ...loggedInUser, ...product, orderTime: (new Date().toDateString('dd/MM/yyyy')) }
        fetch('https://pumpkin-crumble-28315.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log('order data', data);
            })
    }

    return (
        <Container>
            <Row className="py-4">
                <Col md={8}>
                    <h1 className="mb-4">Checkout</h1>
                    <Table className="shadow" style={{ borderRadius: '5px' }}>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Size</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{name}</td>
                                <td>{quantity}</td>
                                <td>{size}</td>
                                <td>${price}</td>
                            </tr>

                            <tr>
                                <th colSpan="3">Total</th>
                                <th>${price}</th>
                            </tr>
                            <tr>
                                <th colSpan=""></th>
                                <th><button className="myButton" onClick={handleOrder}>CheckOut</button></th>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;
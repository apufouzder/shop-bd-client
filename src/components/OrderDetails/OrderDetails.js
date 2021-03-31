import React from 'react';
import { Row, Table } from 'react-bootstrap';
import './OrderDetails.css';

const OrderDetails = (props) => {
    console.log('orderDetails', props);
    const { name, price, quantity, imageURL, email, orderTime } = props.order;
    console.log(orderTime);
    return (

        <Row>
            <Table striped className="custom-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{orderTime}</td>
                        <td>{email}</td>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>
                            <img style={{ width: '60px', margin: 'auto' }} src={imageURL} alt="" />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Row>

    );
};

export default OrderDetails;
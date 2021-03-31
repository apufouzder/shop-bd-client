import React from 'react';
import './ProductCard.css';
import { Card, Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ProductCard = (props) => {
    const { name, imageURL, price, _id } = props.product;
    const history = useHistory();

    const handleClick = () => {
        history.push(`/product/${_id}`)
    }
    return (
        <>
            <Col md={4} sm={6} className="mb-5">
                <Card className="pt-2 shadow custom-card">
                    <Card.Img variant="top" src={imageURL} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="custom-card-footer d-flex justify-content-between  align-items-center">
                        <h3 style={{
                            color: '#4d9a32',
                            fontWeight: '700'
                        }}>${price}</h3>
                        <button className="myButton" onClick={() => handleClick(_id)}>Buy Now</button>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
};

export default ProductCard;
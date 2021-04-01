import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import loader from '../../images/loader.gif';
import Footer from '../Footer/Footer';

const Home = () => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch('https://pumpkin-crumble-28315.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products);
    return (
        <>
            <Container>
                <div className="search py-5 mt-5 mb-5 text-center d-flex justify-content-center">
                    <input
                        id="search"
                        placeholder=" Search Product"
                        type="text"
                        style={{
                            width: '30%',
                            lineHeight: '2.5em',
                            border: 'none',
                            background: 'gainsboro',
                            paddingLeft: '7px'
                        }}
                    />
                    <button className="myButton">Search</button>
                </div>
                <Row className="d-flex py-5">
                    {
                        products.length > 0
                            ? products.map?.(product => <ProductCard key={product._id} product={product}></ProductCard>)
                            : <img style={{ width: '30%', margin: 'auto' }} src={loader} alt="" />
                    }
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Home;
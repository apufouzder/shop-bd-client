import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageProductDetails from '../ManageProductDetails/ManageProductDetails';
import loader from '../../images/loader.gif';

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState({});

    useEffect(() => {
        fetch('https://pumpkin-crumble-28315.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [])



    return (
        <>
            <h1 className="mb-4">Manage Product</h1>
            <div className="manage shadow m-3">
                <Table striped bordered>

                    <tr style={{ background: '#f2f2f2' }}>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>

                    <tbody>
                        {
                            manageProduct.length > 0
                                ? manageProduct.map?.(product => <ManageProductDetails key={product._id} product={product} />)
                                : <img style={{ width: '30%', margin: 'auto' }} src={loader} alt="" />
                        }
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default ManageProduct;
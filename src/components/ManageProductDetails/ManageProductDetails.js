import React from 'react';
import DeleteIcon from '../../images/Group 33150.png';
import EditIcon from '../../images/Group 307.png';
import './ManageProductDetails.css';

const ManageProductDetails = (props) => {
    const { name, price, _id } = props.product;

    const handleDelete = (id) => {
        fetch(`https://pumpkin-crumble-28315.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('Delete Success', data);
            })
    }
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>${price}</td>
                <td>
                    <span style={{ cursor: 'pointer' }} title="Edit Product">
                        <img style={{ width: '25px', marginRight: '5px' }} src={EditIcon} alt="" />
                    </span>
                    <span style={{ cursor: 'pointer' }} onClick={() => handleDelete(_id)} title="Delete Product">
                        <img style={{ width: '25px' }} src={DeleteIcon} alt="" />
                    </span>
                </td>
            </tr>
        </>
    );
};

export default ManageProductDetails;
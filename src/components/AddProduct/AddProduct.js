import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddProduct.css';
import UploadIcon from '../../images/cloud-upload-outline 1.png';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const productData = {
            name: data.name,
            price: data.price,
            size: data.size,
            quantity: data.quantity,
            imageURL: imageURL
        };
        console.log(productData);
        const url = `http://localhost:2050/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => {
                console.log('server side res', res);
            })
    };

    const handleImageUpload = event => {
        // console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '46f0ffc881fb748293fdf8b93dce6295');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                console.log('res', res);
                setImageURL(res.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Product Name</label> <br />
                <input className="form-control" name="name" defaultValue="New Product" ref={register} />
                <label>Add Price</label> <br />
                <input className="form-control" name="price" defaultValue="250" ref={register} />
                <label>Size</label> <br />
                <input className="form-control" name="size" defaultValue="XL" ref={register} />
                <label>Quantity</label> <br />
                <input className="form-control" name="quantity" defaultValue="1" ref={register} />
                <label>Add Photo</label>
                <div className='file-upload'
                    style={{ background: `url(${UploadIcon}) no-repeat`, backgroundSize: '30px 30px' }}>
                    <input type="file" name="exampleRequired" onChange={handleImageUpload} />
                    <b style={{ color: '#6c4bf4', margin: '0' }}>Upload image</b>
                </div>
                <br /><br />
                <input className="myButton" type="submit" value="addProduct" />
            </form>
        </Container>
    );
};

export default AddProduct;
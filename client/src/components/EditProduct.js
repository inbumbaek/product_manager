import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditProduct = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
    })

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={changeHandler} value={product.title} name='title'/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" onChange={changeHandler} value={product.price} name='price'/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" onChange={changeHandler} value={product.description} name='description'/>
                </div>
                <input type="submit" value="Update" />
            </form>
            <Link to={"/"}>Home</Link>
        </div>
)}

export default EditProduct;
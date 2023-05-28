import React, {useEffect} from 'react';
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom';

const Display = (props) => {

    const {allProducts, setAllProducts} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res);
                setAllProducts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res)
                setAllProducts(allProducts.filter(product => product._id !== id))
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <header>
                <h2>All Products:</h2>
            </header>
            {
                allProducts.map((product) => (
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <Link to={`/product/edit/${product._id}`}>Edit</Link>
                        <button onClick={() => deleteHandler(product._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
)}

export default Display;
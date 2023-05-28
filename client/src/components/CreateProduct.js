import React, {useState} from 'react';
import axios from 'axios'

const CreateProduct = (props) => {
    const {allProducts,setAllProducts} = props;

    const [product, setProduct] = useState({
        title:'',
        price:'',
        description:''
    })

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', product)
            .then((res) => {
                console.log(res);
                setAllProducts([...allProducts, res.data]);
                setProduct({
                    title: '',
                    price: '',
                    description: ''
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Product Manager</h2>
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
                <input type="submit" value="Create" />
            </form>
        </div>
)}

export default CreateProduct;
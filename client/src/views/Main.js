import React, {useState, useEffect} from 'react';
import CreateProduct from '../components/CreateProduct';
import Display from '../components/Display';

const Main = (props) => {

    const [allProducts, setAllProducts] = useState([]);
    return(
        <div>
            <CreateProduct allProducts={allProducts} setAllProducts={setAllProducts}/>
            <br />
            <Display allProducts={allProducts} setAllProducts={setAllProducts}/>
        </div>
)}

export default Main;
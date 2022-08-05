import React from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';

function Product() {
    let params = useParams()
    let product = params.productId
    useEffect(()=>{
        console.log(product)
    },[])
    return (
        <>
        <h2>product{product}</h2>
        </>
    );
}

export default Product;
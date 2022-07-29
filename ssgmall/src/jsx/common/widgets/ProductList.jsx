import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function ProductList({productData}) {
    const [data, setData] = useState({
        "id":0,
        "name":"",
        "price":0
    })
    useEffect(()=> {
        setData(productData)
    }, [productData])

    const addCart = () =>{
        axios.post('http://localhost:8080/appi/cart/add',{
            "productId" : data.id,
            "userId" : 1
        }).then(Response =>{
            console.log(Response)
            alert("카트에 추가 되었습니다.")
        })
    }
    return (
        <div>
            <h3>{data.name}</h3>
            <p>{data.price}</p>
            <p onClick={addCart}>Add Cart</p>
        </div>
    );
}

export default ProductList;
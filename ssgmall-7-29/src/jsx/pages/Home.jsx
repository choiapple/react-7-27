import React from 'react';
import ProductList from '../common/widgets/ProductList';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [pDatas, setPDatas] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/api/product/getAll')
        .then(Response =>{
            console.log(Response.data)
            setPDatas(Response.data)
        })

    }, [])
    return (
        <div>
            Home View
            {
                pDatas && pDatas.map(
                    data => {
                        <ProductList 
                            key = {data.id}
                            productData = {data}
                        />
                    }
                )
            }
        </div>
    );
}

export default Home;
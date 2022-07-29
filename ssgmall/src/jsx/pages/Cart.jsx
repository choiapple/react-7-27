import React from 'react';
import { useEffect, useState} from 'react';
import axios from 'axios';
import datas from '../../data.json';

function Cart() {
    const [cartDatas, setCartDatas] = useState([])
    useEffect(()=>{
        setCartDatas(datas)
        console.log(datas)

        // axios.get("http://localhost:8080/api/product/getAll")
        // .then(Respose => {
        //     console.log(Response)
        // })
    },[])
    return (
        <div>
            <div style={{color:"red"}}>
                Cart View
            </div>
            <table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>no</th>
                        <th>productName</th>
                        <th>price</th>
                        <th>userId</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                    
                {
                    cartDatas && cartDatas.map(
                        data => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.product.name}</td>
                                <td>{data.product.price}</td>
                                <td>{data.user.userId}</td>
                                <td>{data.user.email}</td>
                            </tr>
                        )
                    )
                }
            </table>
        </div>
    );
}

export default Cart;


// data.json에서 배열을 불러와서 setcartDatas에 넣어서 cartDatas에 넣어준다.
// cartDatas가 있으면 cartDatas에 하나씩 맵핑해서 데이터를 불러온다.
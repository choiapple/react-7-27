import React, { useEffect, useState } from 'react';
import mycart from '../../datas/cartDatas.json';


function Mystate() {
    const [count, setCount] = useState(0)
    // const [cartList, setCartList] = useState()
    const [cartList, setCartList] = useState([
        {
            id:1,
            productName:"티샤스",
            qty:1
        }
    ])
    useEffect(()=>{
        setCartList(mycart)

    },[])
    const inCreCnt = () => {
        console.log(count)
        setCount(prevState => (prevState+1))
        console.log(count)
    }
    return (
        <>
            <div>
                {
                    cartList && cartList.map(cart =>(
                        <div>
                            <p>{cart.id}</p>
                            <p>{cart.productName}</p>
                            <p>{cart.qty}</p>
                        </div>
                    ))
                }
                {count}
                <button onClick={inCreCnt}>+</button>
                
            </div>
        </>
    );
}

export default Mystate;
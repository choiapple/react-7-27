import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CartItem({cartData}) {
    const [cart, setCart] = useState(cartData)
    const [myQty, setQty] = useState(cartData.qty)
    // const inCreQty = ({num}) => {
    //     num = num+1
    //     setData({...data, qty : num+1})
    // }
    const inCreQty = () => {
       setCart({...cart, qty:cart.qty+1})
    }
    const deCreQty = () => {
        if(cart.qty === 1){
            return alert("상품의 개수는 1이하가 될 수 없습니다.")
        }
        setCart({...cart, qty:cart.qty-1})
    }
    return (
        <tr>
            <th>{cart.id}</th>
            <th><Link to={`/product/${cart.product.id}`}>{cart.product.name}</Link></th>
            <th>{cart.product.imgUrl}</th>
            <th>{cart.product.price}</th>
            <th>{cart.qty}</th>
            <th>{cart.product.price * cart.qty}</th>
            <th onClick={inCreQty}>+</th>
            <th onClick={deCreQty}>-</th>
        </tr>
    );
}

export default CartItem;
import React from 'react';
import CartItem from './CartItem';
import cartDatas from './datas/cartDatas';

function Cart() {
    return (
        <table>
        <thead>
          <tr>
            <th>no</th>
            <th>productname</th>
            <th>producting</th>
            <th>price</th>
            <th>qty</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {
            cartDatas && cartDatas.map(cartData=>(
              <CartItem cartData={cartData}/>
            ))
          }
          
        </tbody>
      </table>
    );
}

export default Cart;
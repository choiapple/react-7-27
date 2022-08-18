import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartCountState } from "../recoil/atom/cartCountState";
import { selCartCountState } from "../recoil/selector/selCartCountState";

function Content() {
    // const [myCart, setMyCart] = useRecoilState(cartCountState)
    // const cartData = useRecoilValue(selCartCountState)
    // const currentCount = useRecoilValue(cartCountState)
    // const countHandler = useSetRecoilState(cartCountState)
    const count = useRecoilValue(selCartCountState)
    const selectorSetting = useSetRecoilState(selCartCountState)
    // console.log("selector" + cartData)
    const [newCart, setNewCart] = useState();
    // const newCart = {
    //     id:10,
    //     cartCnt:100,
    //     name:"jjj"
    // }
    useEffect(()=>{
        axios.get("http://localhost:3300/api/cart")
        .then(Response => {
            setNewCart(Response.data[0])
        })
    },[])
    const handleCartCnt = () => {
        // countHandler((pre) => [...pre, {cartCnt: pre.cartCnt+1}])
        // setMyCart({
        //     ...myCart, cartCnt:myCart.cartCnt+1
        // })
        // newData({
        //     id:10,
        //     cartCnt:100,
        //     name:"jjj"
        // })
        selectorSetting(newCart)
    }
    return (
    <div className="mt-5">
        <Card style={{ width: "18rem" }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                현재 카트 개수는 {count}개 입니다
            </Card.Text>
            <Button variant="primary" onClick={handleCartCnt}>
                Go somewhere
            </Button>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Content;

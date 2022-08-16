import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartCountState } from "../recoil/atom/cartCountState";

function Content() {
    const [myCart, setMyCart] = useRecoilState(cartCountState)
    const currentCount = useRecoilValue(cartCountState)
    const countHandler = useSetRecoilState(cartCountState)
    const handleCartCnt = () => {
        // countHandler((pre) => [...pre, {cartCnt: pre.cartCnt+1}])
        setMyCart({
            ...myCart, cartCnt:myCart.cartCnt+1
        })
    }
    return (
    <div className="mt-5">
        <Card style={{ width: "18rem" }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                현재 카트 개수는 {myCart.cartCnt}개 입니다
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

import { selector } from "recoil";
import { cartCountState } from "../atom/cartCountState";
import axios from "axios";

const selCartCountState = selector({
    key: 'selCartCountState',
    get: ({get}) => {
        // const cartState = axios.get("http://localhost:3300/api/cart")
        // .then(Response => {
        //     console.log(Response.data)
        //     return Response.data
        // });
        // return cartState;

        const count = get(cartCountState);
        return count.cartCnt;
    },
    set: ({get, set}, newVal) =>{
        set(cartCountState, newVal)
    }
});

export {selCartCountState};
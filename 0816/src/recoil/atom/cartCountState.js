import {
    atom
} from 'recoil';

const cartCountState = atom({
    key : "cartCountState",
    default : {
        id:1,
        name: "Jason",
        cartCnt: 3
    }
})

export {cartCountState};
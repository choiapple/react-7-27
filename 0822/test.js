'use strict';

// let x = 10;
// let a = 0;
// console.log(x);
// setInterval(()=>{
//     a = x+1;
//     if(a > 0){
//         handlePrint(a);
//     }else{
//         console.log("아직 변경되지 않았습니다.")
//     }
//     // 데이터가 불러와졌을때 동작해야하는 콜백함수임
// }, 3000);

// const handlePrint = (data) => {
//     console.log(data);
// // }
// let x = 0;
// const pm = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         resolve(10);
//         // resolve('Busan');
//         // reject(new Error("서버와의 연결이 좋지 못합니다."));

//     }, 3000); // 이게 동작하는걸 약속받을 수 있다.
//     // reject는 거부되었을때 동작하는거다.
//     // 문제가 발생했을때는 reject, 정상이면 resolve
// });

// pm.then(result => {
//     x = x+result;
//     console.log(result);
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>
//             resolve(x+10)
//         ,1000)
//     })
// }).then(res => {
//     console.log(res);
// });

const getUser = () => 
    new Promise((resolve, reject) => {
        setTimeout(()=>resolve('user'),1000);
    });


const getProduct = (user) =>
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve(`${user} product`),2000);
    });


const  cartAdd = (product) =>
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve(`${product} addcart`),1000);
    })


getUser()
    .then(res => {
        console.log(res);
        return getProduct(res);
    })
    .then(res => {
        console.log(res);
        return cartAdd(res);
    }).then(res => console.log(res));

    // a를 호출한다.
    // b를 호출한다.
    // c를 호출한다.

    // d는 a, b, c 의 값이 모두 있어야 정상적으로 동작한다.

    // async 데이터를 호출할거다.
    // await a
    // await b
    // await c
import React from "react";

function Brother({card, setCard, setPerson}){
    const 아빠카드쓰기 = () => {
        setCard(card-100000)
        setPerson("brother")
    }
    return (
        <>
        <p>딸</p>
        <p>아빠 카드 한도는 : {card}</p>
        <button onClick={아빠카드쓰기}>아빠카드 긁기 앗싸!</button>
        </>
    );
}

export default Brother;
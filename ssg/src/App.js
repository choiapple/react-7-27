import Logo from "./Logo";
import React, {useEffect, useState} from "react";
import Brother from './Brother';
import Sister from './Sister';

function App() {


  
  const [card, setCard] = useState(3000000000);
  const [person, setPerson] = useState();
  const [명세, 명세추가] = useState(
    {
      "누가" : "",
      "얼마" : 0
    }
    );

    useEffect(()=>{
      console.log(card)
  
    },[card]);

  const handleAdd = ()=>{
    setCard(card+10000)
    // console.log(qty)
  }
  const handleDec = ()=>{
    setCard(card-10000)
    // console.log(qty)
    명세추가({"얼마":1000})
  }
  return (
    <div>
      <p>한도 : {card}</p>
      <p>쓴사람 : {person}</p>
      <p>누가 : {명세.누가}</p>
      <p>얼마 : {명세.얼마}</p>
      <br/>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleDec}>-</button>
      <Brother card={card} setCard={setCard} setPerson={setPerson}/>
      <Sister card={card} setCard={setCard} setPerson={setPerson}/>
      {/* <Logo name="신세계" web="ssg.com" />
      <Logo name="이마트" web="emart.com" /> */}
    </div>
  );
}

export default App;

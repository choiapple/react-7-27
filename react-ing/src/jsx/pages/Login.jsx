import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function LogIn() {
    const url = ""
    const [logInData, setLogInData] = useState({
        userId : "",
        password : "",
        type : 3
    })
    const [error, setError] = useState({
        userId:"",
        password:""
    })
    const handleChange = (e) => {
        setLogInData(
            {...logInData, [e.target.name]:e.target.value}
        )
        setError({
            userId:"",
            password:""
        })
    }
    const handleLogIn = (event) =>{
        let isError = false
        console.log(logInData)
        event.preventDefault()
        const errorObj = {...error}
        if(logInData.userId === ''){
            errorObj.userId = "input your id"
            isError = true
        }
        if(logInData.password === ''){
            errorObj.password = "input your password"
            isError = true
        }
        setError(errorObj)
        if(isError){
            return;
        }
        axios.post(url, {
            userId : logInData.userId,
            password : logInData.password,
            type: logInData.type
        })
        .then(
            Respnse=>{
                console.log(Respnse)
            })
        .catch(error => {console.log(error)})
    }
    return (
        <div>
            <form onSubmit={handleLogIn}>
                <input 
                type="text"
                name = "userId"
                value= {logInData.userId}
                onChange={handleChange} />
                {
                    error.userId && <div>{error.userId}</div>
                }
                <input 
                type="password"
                name="password"
                value={logInData.password}
                onChange={handleChange} />
                {
                    error.password && <div>{error.password}</div>
                }
                <button type="submit">login</button>
            </form>
            
        </div>
    );
}

export default LogIn;
// form안에 넣어야 통신이 가능하다(되도록)
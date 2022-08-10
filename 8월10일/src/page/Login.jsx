import React from 'react';
import { useContext } from 'react';
import AuthContext from '../context/Auth.context';

function Login() {

    const auth = useContext(AuthContext)
    console.log(auth.auth)
    const handelLogin = () => {
        auth.onLogin(
           localStorage.setItem("isLogIn", !auth.auth),
           auth.auth = !auth.auth
        )
       
        console.log(localStorage)
        console.log(auth.auth)

    }
    return (
        <>
            <h1>
                {
                    auth.auth?"LogOut":"LogIn"
                }
            </h1>
            <button onClick={handelLogin}>{auth.auth?"LogOut":"LogIn"}</button>
        </>
    );
}

export default Login;
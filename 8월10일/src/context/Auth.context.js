import { createContext } from "react";

const AuthContext = createContext({

    auth:false,
    uid:"",
    name:"",
    token:"",
    onLogin:()=>{},
    onLogout: ()=>{}

});

export default AuthContext;
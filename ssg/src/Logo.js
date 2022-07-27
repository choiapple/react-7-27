import React from "react";
import InText from "./InText";
function Logo(props){
    return(
        <div>
            <h1>{props.name} {props.web}</h1>
            <InText name={props.name}/>
        </div>

    );
}

export default Logo;
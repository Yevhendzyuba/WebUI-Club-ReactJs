import React from "react";
import { TextAreaForComents } from "./MyTextarea.styled";

const MyTextarea = (props) =>{
    return(
        <TextAreaForComents {...props}></TextAreaForComents>
    )
}

export default MyTextarea;
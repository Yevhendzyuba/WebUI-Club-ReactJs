import React from "react";
import { TextAreaForComents } from "./MyTextArea.styled";

const MyTextarea = (props) =>{
    return(
        <TextAreaForComents {...props}></TextAreaForComents>
    )
}

export default MyTextarea;
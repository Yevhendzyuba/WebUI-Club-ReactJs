import React from "react";
import { Button } from "./MyButton.styled";

const MyButton = ({children, ...props}) =>{
    return(
        <Button {...props}>
            {children}
        </Button>
    )
}

export default MyButton;

//============ ============== ================
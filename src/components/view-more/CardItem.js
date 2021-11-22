import React from "react";
import {
    CardWrapper,
    CardWrapperBlock,
    CardTextTitle,
    CardTextDescription,
} from "../../containers/Home/Home.styled";


const CardItem = (props) =>{
    return (
        <CardWrapperBlock>
            <CardTextTitle>{props.card.title}</CardTextTitle>
            <CardTextDescription>{props.card.description}</CardTextDescription>
        </CardWrapperBlock> 
    )
}

export default CardItem;
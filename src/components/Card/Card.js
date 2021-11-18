import React from 'react'
import {Item} from './Card.styled'
import Button from "../Button/Button";
import {Link} from "react-router-dom";
function Card(props) {


    return (
        <Item>
            <img src={props.sportBuilds.img} width='200px' height='200px'/>
            <h3>Name: {props.sportBuilds.title}</h3>
            <p>Price: {props.sportBuilds.price}</p>
            <p>Country: {props.sportBuilds.country}</p>
            <Link exact to={`/catalog/item/${props.sportBuilds.id}`}>
                <Button buttonText="View more" backgroundColor="#454545" color="#fff" fontSize="13px"
                        padding="10px 45px"/>
            </Link>
        </Item>
    )
}

export default Card
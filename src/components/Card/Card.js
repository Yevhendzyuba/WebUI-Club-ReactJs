import React from 'react'
import {Item, Button} from './Card.styled'

function Card(props) {


    return (
        <Item>
            <img src={props.sportBuilds.img} width='200px' height='200px'/>
            <h3>Name: {props.sportBuilds.title}</h3>
            <p>Price: {props.sportBuilds.price}</p>
            <p>Country: {props.sportBuilds.country}</p>
            <Button>View more</Button>
        </Item>
    )
}

export default Card
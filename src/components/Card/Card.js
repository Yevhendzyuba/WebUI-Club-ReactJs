import React from 'react'
import {Item, Button} from './Card.styled'

function Card(props) {
    const {img, title, price, country} = props

    return (
        <Item>
            <img src={img} width='200px' height='200px'/>
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <p>Country: {country}</p>
            <Button>View more</Button>
        </Item>
    )
}

export default Card
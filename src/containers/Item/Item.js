import React, {useContext} from "react";
import {ItemWrapper, ItemData, ButtonsItem} from "./Item.styled"
import Button from "../../components/Button/Button";
import {Link, useParams} from "react-router-dom";
import SportContext from "../../components/Sport";

function Item() {

    const sportBuildsList = useContext(SportContext)
    const {id} = useParams();
    const sportBuildItems = sportBuildsList.find(sportBuildItem => (sportBuildItem.id === parseInt(id)));

    return (
        <ItemWrapper>
            <ItemData>
                <img src={sportBuildItems.img} width='200px' height='200px'/>
                <h3>Name: {sportBuildItems.title}</h3>
                <p>Price: {sportBuildItems.price}</p>
                <p>Country: {sportBuildItems.country}</p>
                <ButtonsItem>
                    <Link exact to="/catalog">
                        <Button buttonText="Go Back" backgroundColor="#fff" color="#000000" fontSize="15px"
                                padding="13px 20px"
                                border="1px solid"/>
                    </Link>
                    <Button buttonText="Add to cart" backgroundColor="#454545" color="#fff" fontSize="15px"
                            padding="13px 25px"/>
                </ButtonsItem>
            </ItemData>

        </ItemWrapper>
    );

}

export default Item;
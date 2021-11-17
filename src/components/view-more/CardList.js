import React from "react";
import CardItem from "./CardItem";
import {CardWrapper} from "../../containers/Home/Home.styled";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const CardList = ({cards}) =>{
    return (
        <TransitionGroup style={{ display:'flex', justifyContent: 'space-around', flexWrap: 'wrap', paddingBottom: '0px', marginBottom: '0px'}}>
            {cards.map((card, index) =>
                <CSSTransition
                key={card.id}
                timeout={500}
                classNames="item"
            >
            <CardItem number={index + 1} card={card} />
            </CSSTransition>
            )}
        </TransitionGroup>
    )
}

export default CardList;


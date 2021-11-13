import React from 'react';
import Card from '../../components/Card/Card';
import { data } from '../../components/data'
import { CardItem } from '../../components/Card/Card.styled';

function Catalog(props) {

    return (
        <CardItem>
            {data.map((item) => {
                return (
                    <Card key={item.id} {...item} />
                )
            })}
        </CardItem>

    );
}


export default Catalog;
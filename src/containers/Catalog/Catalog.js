import React from 'react';
import {Container} from "../../components/Global.styled";
import {MenuBar, DropdownBar, Button,NavInput} from "./Catalog.styled"
import Dropdown from "../../components/Dropdown/Dropdown";
import {data} from '../../components/data';
import {CardItem} from '../../components/Card/Card.styled';
import Card from '../../components/Card/Card';

function Catalog() {
    return (
        <Container>
            {/*<NavInput></NavInput>*/}
            <MenuBar>
                <DropdownBar>
                    <Dropdown options={data}/>
                    <Dropdown options={data}/>
                    <Dropdown options={data}/>
                </DropdownBar>
                <Button>Apply</Button>
            </MenuBar>
            <CardItem>
                {data.map((item) => {
                    return (
                        <Card key={item.id} {...item} />
                    )
                })}
            </CardItem>
        </Container>
    );
}


export default Catalog;
import React, {useState} from 'react';
import {Container} from "../../components/Global.styled";
import {MenuBar, DropdownBar, Button,NavInput, ComentsSection, ComentsSectionName, ComentsSectionDescription, ComentsBlock, ComentsSectionThanks, ComentsSectionContainer} from "./Catalog.styled"
import Dropdown from "../../components/Dropdown/Dropdown";
import {data} from '../../components/data';
import {CardItem} from '../../components/Card/Card.styled';
import Card from '../../components/Card/Card';

import PostList from '../../components/parts/PostList/PostList';
import ComentForm from '../../components/parts/ComentForm/ComentForm'
function Catalog() {

    const [coments, setComents] = useState([
        {id: 1, time: '08.10.2021', user: 'Andi', text: 'I have been using the services of this online store for the second year, the quality is great'},
        {id: 2, time: '12.05.2021', user: 'Jeims', text: 'I have ordered a rope for my daughter, she is satisfied, thank you'},
        {id: 3, time: '04.02.2020', user: 'Lola', text: 'Very disappointing tech-support, is there someone here?'}
    ])

    const createComent = (newComent) =>{
        setComents([newComent, ...coments])
    }

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
            <ComentsSectionContainer>
                <ComentsSection>
                    <ComentsSectionName>Comments</ComentsSectionName>
                    <ComentsSectionDescription>We will definitely take your opinion into account in order to become better</ComentsSectionDescription>
                    <ComentForm create={createComent}/>
                    <ComentsBlock>
                        <PostList coments={coments}/>
                    </ComentsBlock>
                    <ComentsSectionThanks>Thanks for your comments</ComentsSectionThanks>
                </ComentsSection>
            </ComentsSectionContainer>
            
        </Container>
    );
}


export default Catalog;
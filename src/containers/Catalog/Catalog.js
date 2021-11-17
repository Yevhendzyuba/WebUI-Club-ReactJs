import React,{useState,useContext, useEffect} from 'react';
import {Container,CatalogSelect,CardWrapper} from "../../components/Global.styled";
import {MenuBar, DropdownBar,ComentsSection, ComentsSectionName, ComentsSectionDescription, ComentsBlock, ComentsSectionThanks, ComentsSectionContainer} from "./Catalog.styled"
import {data} from '../../components/data';
import {CardItem} from '../../components/Card/Card.styled';
import Sport from '../../components/Sport';
import Search from '../../components/Search/Search';
import Button from "../../components/Button/Button";
import Card from '../../components/Card/Card';
import Filter from "../../components/Filter/Filter";

import PostList from '../../components/parts/PostList/PostList';
import ComentForm from '../../components/parts/ComentForm/ComentForm'

function Catalog() {
    // const [coments, setComents] = useState([
    //     {id: 1, time: '08.10.2021', user: 'Andi', text: 'I have been using the services of this online store for the second year, the quality is great'},
    //     {id: 2, time: '12.05.2021', user: 'Jeims', text: 'I have ordered a rope for my daughter, she is satisfied, thank you'},
    //     {id: 3, time: '04.02.2020', user: 'Lola', text: 'Very disappointing tech-support, is there someone here?'}
    // ])
    //
    // const createComent = (newComent) =>{
    //     setComents([newComent, ...coments])
    // }

    const sportBuild = useContext(Sport)

    const [items, setItems] = useState(sportBuild.slice(0));
    const [searchSport, setSearchSport] = useState('')
    const [filterSportName, setFilterSportName] = useState('None');
    const [filterSportCountry, setFilterSportPrice] = useState('None');

    useEffect(() => {
        const pattern = new RegExp(searchSport, 'i');
        let filteredItems = sportBuild;

        if (searchSport !== '') {
            filteredItems = filteredItems.filter(item => (pattern.test(item.title)));
        }

        if (filterSportName !== 'None') {
            filteredItems = filteredItems.filter(item => (item.title === filterSportName));
        }

        if (filterSportCountry !== 'None') {
            filteredItems = filteredItems.filter(item => (item.country === filterSportCountry));
        }

        setItems(filteredItems.slice(0));
    }, [filterSportName, filterSportCountry, searchSport, sportBuild]);


    return (
        <Container>
            <MenuBar>
                <DropdownBar>
                    <Filter name='Name' options={['Football Ball', 'Boxing Gloves','Tennis Rocket','Basket Hoop']}
                            filterState={[filterSportName, setFilterSportName]}/>
                    <Filter name='Country' options={['Ukraine', 'France', 'USA','United Kingdom']}
                            filterState={[filterSportCountry, setFilterSportPrice]}/>
                    {/*<CatalogSelect>*/}
                    {/*    {data.map(dataItem =>*/}
                    {/*        <option>*/}
                    {/*            {dataItem.optionName}</option>)*/}
                    {/*    }*/}
                    {/*</CatalogSelect>*/}
                </DropdownBar>
                <div>
                    <Button buttonText="Apply" backgroundColor="#fff" color="#000000" fontSize="15px"
                            padding="10px 45px"
                            border="1px solid"/>
                </div>
                <Search searchState={[searchSport, setSearchSport]}/>
            </MenuBar>
            <CardItem>
                {data.map((item) => {
                    return (
                        <Card key={item.id} {...item} />
                    )
                })}
            </CardItem>
            {/*<ComentsSectionContainer>*/}
            {/*    <ComentsSection>*/}
            {/*        <ComentsSectionName>Comments</ComentsSectionName>*/}
            {/*        <ComentsSectionDescription>We will definitely take your opinion into account in order to become better</ComentsSectionDescription>*/}
            {/*        <ComentForm create={createComent}/>*/}
            {/*        <ComentsBlock>*/}
            {/*            <PostList coments={coments}/>*/}
            {/*        </ComentsBlock>*/}
            {/*        <ComentsSectionThanks>Thanks for your comments</ComentsSectionThanks>*/}
            {/*    </ComentsSection>*/}
            {/*</ComentsSectionContainer>*/}
        </Container>
    );
}


export default Catalog;
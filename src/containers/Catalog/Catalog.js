import React, {useState, useContext, useEffect} from 'react';
import {Container} from "../../components/Global.styled";
import {
    MenuBar,
    DropdownBar,
    ComentsSection,
    ComentsSectionName,
    ComentsSectionDescription,
    ComentsBlock,
    ComentsSectionThanks,
    ComentsSectionContainer
} from "./Catalog.styled"
import {CardItem} from '../../components/Card/Card.styled';
import SportContext from '../../components/Sport';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';
import Filter from "../../components/Filter/Filter";
import PostList from '../../components/parts/PostList/PostList';
import ComentForm from '../../components/parts/ComentForm/ComentForm'
import {sportBuilds} from '../../components/data'

function Catalog() {
    const [coments, setComents] = useState([
        {
            id: 1,
            time: '08.10.2021',
            user: 'Andi',
            text: 'I have been using the services of this online store for the second year, the quality is great'
        },
        {
            id: 2,
            time: '12.05.2021',
            user: 'Jeims',
            text: 'I have ordered a rope for my daughter, she is satisfied, thank you'
        },
        {id: 3, time: '04.02.2020', user: 'Lola', text: 'Very disappointing tech-support, is there someone here?'}
    ])

    const createComent = (newComent) => {
        setComents([newComent, ...coments])
    }

    const sportBuild = useContext(SportContext)

    const [items, setItems] = useState(sportBuild.slice(0));
    const [searchSport, setSearchSport] = useState('');
    const [filterSportName, setFilterSportName] = useState('None');
    const [filterSportCountry, setFilterSportCon] = useState('None');
    const [filterSportPrice, setFilterSportPrice] = useState('None');


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

        if (filterSportPrice !== 'None') {
            filteredItems = filteredItems.filter(item => (item.price === filterSportPrice));
        }

        setItems(filteredItems.slice(0));
    }, [filterSportName, filterSportCountry, filterSportPrice, searchSport, sportBuild]);


    return (
        <Container>
            <MenuBar>
                <DropdownBar>
                    <Filter name='Name' options={['Football Ball', 'Boxing Gloves', 'Tennis Rocket', 'Basket Hoop']}
                            filterState={[filterSportName, setFilterSportName]}/>
                    <Filter name='Country' options={['Ukraine', 'France', 'USA', 'United Kingdom']}
                            filterState={[filterSportCountry, setFilterSportCon]}/>
                    <Filter name='Price' options={['80$', '110$', '200$', '1200$']}
                            filterState={[filterSportPrice, setFilterSportPrice]}/>
                </DropdownBar>
                <Search searchState={[searchSport, setSearchSport]}/>
            </MenuBar>
            {sportBuild === sportBuilds
                ? <h1>Завантаження</h1>
                : 
                <CardItem>
                {items.map((sportBuilds) => (
                    <Card sportBuilds={sportBuilds}/>
                ))}
            </CardItem>}
            
            <ComentsSectionContainer>
                <ComentsSection>
                    <ComentsSectionName>Comments</ComentsSectionName>
                    <ComentsSectionDescription>We will definitely take your opinion into account in order to become
                        better</ComentsSectionDescription>
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

//=============== ====================== ========================== =====================
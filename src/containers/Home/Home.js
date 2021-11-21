import React, {useState} from 'react';
import {Container} from "../../components/Global.styled";
import {
    IntroWrapper,
    IntroLogo,
    IntroText,
    IntroTextTitle,
    IntroTextDescription,
    CardButtonWrapper,
    Button
} from "./Home.styled";
import HomePageLogo from "../../icons/homepage_logo.jpg";
import CardList from '../../components/view-more/CardList';
import '../../index.css'
import SportContext from '../App/App';


function Home() {
    let description_card = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos et expedita iure minus temporibus. Asperiores blanditiis corporis dolore earum fugit laudantium nam perspiciatis, reiciendis repellendus unde. Atque delectus exercitationem ratione.`
    const [cards, setCards] = useState([
        {id:1, title: 'Reliability', description: description_card},
        {id:2, title: 'Faithfulness', description: description_card},
        {id:3, title: 'Quality', description: description_card},
    ])

    const [set, setSet] = useState('default')
 
    const addMoreCards = (e) =>{
        e.preventDefault()
        const newSection = [
            {id:4, title: 'Honesty', description: description_card},
            {id:5, title: 'Devotion', description: description_card},
            {id:6, title: 'Diligence', description: description_card},
        ] 
        setCards([...cards, ...newSection])
        setSet('none')
        console.log(SportContext)
    }

    return (
        <Container>
            <IntroWrapper>
                <IntroLogo src={HomePageLogo} alt="Home Page Logo"/>
                <IntroText>
                    <IntroTextTitle>Great choice of goods!</IntroTextTitle>
                    <IntroTextDescription>In our store you can find anything you want!<br/>
                        We provide a wide range of quality products of famous brands from all over the world. <br/>
                        I am sure, that in our store you will exactly find what you have been looking for a long time!
                    </IntroTextDescription>
                </IntroText>
            </IntroWrapper>
            <CardList cards={cards}></CardList>
            <CardButtonWrapper>
                <Button className={set === 'default' ? 'btn' : 'btn_none'}  onClick={addMoreCards}>View more</Button>
            </CardButtonWrapper>
        </Container>
    );
}


export default Home;

//============= ============ ================ =================== ===================
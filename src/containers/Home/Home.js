import React from 'react';
import {Container} from "../../components/Global.styled";
import {IntroWrapper,IntroLogo,IntroText,IntroTextTitle,IntroTextDescription,CardWrapper,CardWrapperBlock,CardTextTitle,CardTextDescription,CardButtonWrapper,Button} from "./Home.styled";
import HomePageLogo from "../../icons/homepage_logo.jpg";

function Home() {
    return (
        <Container>
            <IntroWrapper>
                <IntroLogo src = {HomePageLogo} alt="Home Page Logo"/>
                <IntroText>
                    <IntroTextTitle>Спортивні товари на любий вибір!</IntroTextTitle>
                    <IntroTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.<br/> Dignissimos
                        et expedita iure minus
                        temporibus. Asperiores blanditiis<br/> corporis dolore earum fugit laudantium nam perspiciatis,
                        reiciendis<br/> repellendus unde. Atque delectus exercitationem
                        ratione.</IntroTextDescription>
                </IntroText>
            </IntroWrapper>
            <CardWrapper>
                <CardWrapperBlock>
                    <CardTextTitle>Надійність</CardTextTitle>
                    <CardTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos et expedita iure minus temporibus. Asperiores blanditiis
                        corporis dolore earum fugit laudantium nam perspiciatis, reiciendis
                        repellendus unde. Atque delectus exercitationem ratione.</CardTextDescription>
                </CardWrapperBlock>
                <CardWrapperBlock>
                    <CardTextTitle>Чесність</CardTextTitle>
                    <CardTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos et expedita iure minus temporibus. Asperiores blanditiis
                        corporis dolore earum fugit laudantium nam perspiciatis, reiciendis
                        repellendus unde. Atque delectus exercitationem ratione.</CardTextDescription>
                </CardWrapperBlock>
                <CardWrapperBlock>
                    <CardTextTitle>Якість</CardTextTitle>
                    <CardTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos et expedita iure minus temporibus. Asperiores blanditiis
                        corporis dolore earum fugit laudantium nam perspiciatis, reiciendis
                        repellendus unde. Atque delectus exercitationem ratione.</CardTextDescription>
                </CardWrapperBlock>
            </CardWrapper>
            <CardButtonWrapper>
                <Button>View more</Button>
            </CardButtonWrapper>
        </Container>
    );
}


export default Home;
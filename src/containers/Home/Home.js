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
                    <IntroTextTitle>Great choice of goods!</IntroTextTitle>
                    <IntroTextDescription>In our store you can find anything you want!<br/>
                    We provide a wide range of quality products of famous brands from all over the world. <br/>
                    I am sure, that in our store you will exactly find what you have been looking for a long time!
                    </IntroTextDescription>
                </IntroText>
            </IntroWrapper>
            <CardWrapper>
                <CardWrapperBlock>
                    <CardTextTitle>Reliability</CardTextTitle>
                    <CardTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos et expedita iure minus temporibus. Asperiores blanditiis
                        corporis dolore earum fugit laudantium nam perspiciatis, reiciendis
                        repellendus unde. Atque delectus exercitationem ratione.</CardTextDescription>
                </CardWrapperBlock>
                <CardWrapperBlock>
                    <CardTextTitle>Faithfulness</CardTextTitle>
                    <CardTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos et expedita iure minus temporibus. Asperiores blanditiis
                        corporis dolore earum fugit laudantium nam perspiciatis, reiciendis
                        repellendus unde. Atque delectus exercitationem ratione.</CardTextDescription>
                </CardWrapperBlock>
                <CardWrapperBlock>
                    <CardTextTitle>Quality</CardTextTitle>
                    <CardTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos et expedita iure minus temporibus. Asperiores blanditiis
                        corporis dolore earum fugit laudantium nam perspiciatis, reiciendis
                        repellendus unde. Atque delectus exercitationem ratione. </CardTextDescription>
                </CardWrapperBlock>
            </CardWrapper>
            <CardButtonWrapper>
                <Button>View more</Button>
            </CardButtonWrapper>
        </Container>
    );
}


export default Home;
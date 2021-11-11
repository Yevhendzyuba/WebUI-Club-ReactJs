import React from 'react';
import {
    FooterWrapper,
    FooterTitle,
    FooterLogo,
    FooterDescription,
    HorizontalLine,
    Copyright
} from './Footer.styled';
import FooterLogoPic from '../../../icons/header_logo.png';
import {FaFacebook, FaTwitter, FaLinkedin, FaGoogle} from 'react-icons/fa';
import {Container} from '../../../components/Global.styled';

function Footer() {
    return (
        <Container>
            <FooterWrapper>
                <div>
                    <FooterTitle>MEGASPORT
                    </FooterTitle>
                    <FooterDescription>Lviv, Lvivska 258B <br/>
                    Lviv, Zamarstunivska 345В <br/>
                    Kyiv, Ernesta 123
                    </FooterDescription>
                </div>
                <FooterLogo src={FooterLogoPic} alt="FooterLogo"/>
                <div>
                    <FaFacebook style={{paddingLeft: "20px",}} size={28}/>
                    <FaTwitter style={{paddingLeft: "20px",}} size={28}/>
                    <FaLinkedin style={{paddingLeft: "20px",}} size={28}/>
                    <FaGoogle style={{paddingLeft: "20px",}} size={28}/>
                </div>
            </FooterWrapper>
            <HorizontalLine/>
            <Copyright> 2021 © All rights reserved, Dzyuba Yevhen </Copyright>
        </Container>
    );
}
export default Footer;
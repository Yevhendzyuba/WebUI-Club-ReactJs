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
                    <FooterTitle>
                        SportMaster
                    </FooterTitle>
                    <FooterDescription>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Dicta laboriosam
                        nihil
                        quasi repudiandae<br/> totam velit veritatis?</FooterDescription>
                </div>
                <FooterLogo src={FooterLogoPic} alt="FooterLogo"/>
                <div>
                    <FaFacebook style={{paddingLeft: "20px",}} size={32}/>
                    <FaTwitter style={{paddingLeft: "20px",}} size={32}/>
                    <FaLinkedin style={{paddingLeft: "20px",}} size={32}/>
                    <FaGoogle style={{paddingLeft: "20px",}} size={32}/>
                </div>
            </FooterWrapper>
            <HorizontalLine/>
            <Copyright> 2021 © All rights reserved, Dzyuba Yevhen </Copyright>
        </Container>
    );
}
export default Footer;
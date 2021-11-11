import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Container} from '../../../components/Global.styled';
import {LinkingWrapper,LinkItem,Navbar,NavbarLogo} from "./Header.styled";
import NavLink from "./Header.styled";
import HeaderLogo from '../../../icons/header_logo.png';

function Header() {
    return (
        <Container>
            <Router>
                <Navbar>
                    <NavbarLogo src={HeaderLogo} alt="Header Logo"/>
                    <LinkingWrapper>
                        <li>
                            <NavLink exact to="/">
                                <LinkItem>Home</LinkItem></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/catalog">
                                <LinkItem>Catalog</LinkItem></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/cart">
                                <LinkItem>Cart</LinkItem></NavLink>
                        </li>
                    </LinkingWrapper>
                </Navbar>
            </Router>
        </Container>
    );
}

export default Header;
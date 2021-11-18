import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Container} from '../../../components/Global.styled';
import {LinkingWrapper, LinkItem, Navbar, NavbarLogo} from "./Header.styled";
import HeaderLogo from '../../../icons/header_logo.png';
import NavLink from './Header.styled'
import Cart from "../../Cart/Cart";
import Home from "../../Home/Home";
import Catalog from "../../Catalog/Catalog";
import Item from "../../Item/Item";


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
                        <li>
                            <NavLink exact to="/catalog/item">
                            </NavLink>
                        </li>
                    </LinkingWrapper>
                </Navbar>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/catalog" element={<Catalog/>}/>
                    <Route exact path="/cart" element={<Cart/>}/>
                    <Route exact path="/catalog/item/:id" element={<Item/>}/>
                </Routes>
            </Router>
        </Container>
    );
}

export default Header;
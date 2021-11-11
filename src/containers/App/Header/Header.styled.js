import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const LinkingWrapper = styled.ul`
    display:flex;
    list-style:none;
    margin-left:420px;
`;

export default styled(NavLink)`
    text-decoration:none;
`;

export const LinkItem = styled.li`
    padding:7px 35px;
    margin:0 15px;
    color:blue;
    text-decoration:none;
    font-size:16px;
    background:black;
    color:white;
    font-weight:400;
    border-radius:30px;
`;

export const Navbar = styled.nav`
    display:flex;
    align-items:center;
    margin-top:25px;
    padding-bottom:15px;
    border-bottom:1px solid black;
`;

export const NavbarLogo = styled.img`
    width:200px;
    display:flex;
    height:50px;
    margin-left:70px;
`;




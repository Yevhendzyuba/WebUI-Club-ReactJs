import styled from 'styled-components';
import {Input} from "semantic-ui-react";

export const DropdownBar = styled.div`
    padding: 15px 0;
    display: flex;   
`;
export const NavInput = styled(Input)`
    
`;
export const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  padding: 0 80px;
`;

export const Button = styled.button`
    width:150px;
    height:50px;
    margin-right 800px;
    border:1px solid black;
    border-radius:10px;
`;


export const ComentsSectionContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;
export const ComentsSection = styled.div`
    width: 100%;
`;
export const ComentsBlock = styled.div`
    padding-left: 4%;
`;
export const ComentsSectionName = styled.h2`
    margin-top: 5%;
`;
export const ComentsSectionDescription = styled.div`
    font-size: 14px;
`;
export const ComentsSectionThanks = styled.p`
    font-size: 14px;
    text-align: right;
    font-style: italic;
`;

export const Loader = styled.div`
font-size: 10px;
margin: 50px auto;
text-indent: -9999em;
width: 11em;
height: 11em;
border-radius: 50%;
background: #ffffff;
background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
position: relative;
-webkit-animation: load3 1.4s infinite linear;
animation: load3 1.4s infinite linear;
-webkit-transform: translateZ(0);
-ms-transform: translateZ(0);
transform: translateZ(0);
&:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
&:after {
    background: #0dc5c1;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`
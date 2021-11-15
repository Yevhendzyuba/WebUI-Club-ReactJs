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
    border:1px solid black;
    border-radius:10px;
`;

//-------------------------------------------coments style---------------------------------
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
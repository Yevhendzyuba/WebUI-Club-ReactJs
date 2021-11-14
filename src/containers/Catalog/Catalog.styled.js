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
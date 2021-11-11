import styled from 'styled-components';

export const IntroWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:100px 0 200px 0;
   
`;
export const IntroLogo = styled.img`
    width:470px;
    height:215px;
    margin-right:170px; 
    border:1px solid white;
    border-radius:20px;
`;

export const IntroText = styled.div`
    display:flex;
    flex-direction:column;
`;

export const IntroTextTitle = styled.h1`
       margin-bottom:0;
       font-size:40px;
`;

export const IntroTextDescription = styled.p`
    font-size:19px;
    font-weight:500;
`;

export const CardWrapper = styled.div`
    display:flex;
    justify-content:space-around;
    
`;

export const CardWrapperBlock = styled.div`
    width:300px;
    height:150px;
    display:flex;
    align-items:center;
    flex-direction:column;
`;

export  const CardTextTitle = styled.h2`
    font-size:23px;
`;

export const CardTextDescription = styled.p`
    text-align:center;
`;

export const CardButtonWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:120px;
`;
export const Button = styled.button`
    color:white;
    background:grey;
    width:150px;
    height:40px;
    border:3px solid grey;
    border-radius:8px;
`;
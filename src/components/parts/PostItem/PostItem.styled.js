import styled from "styled-components";

export const UserComent = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    border-right: 2px solid rgb(14, 207, 207);
    border-left: 2px solid rgb(14, 207, 207);
    border-radius: 20px;
    margin-top: 2%;
    justify-content: space-between;
    align-items: center;
    // &:hover{
    // background-color: rgb(196, 197, 197);
    // }
`;

export const UserComentContent = styled.div`
    width: 900px;
    word-wrap: break-word;
`;
export const UserName = styled.div`
    font-weight: 700;
    opacity: 0.9;
`;
export const UserId = styled.span`
    display: none;
`;
export const UserText = styled.div``;
export const PublicationDayComment = styled.div`
    text-align: right;
    align-self: flex-end;
`;


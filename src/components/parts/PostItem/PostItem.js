import React from "react";
import { PublicationDayComment, UserComent, UserComentContent, UserId, UserName, UserText } from "./PostItem.styled";

const PostItem = (props) =>{
    return(
        <UserComent>
            <UserComentContent>
                <UserName>
                    {props.coment.user}
                    <UserId>{props.number}</UserId>
                </UserName>
                <UserText>{props.coment.text}</UserText>
            </UserComentContent>
            <PublicationDayComment>{props.coment.time}</PublicationDayComment>
        </UserComent>
    )
}

export default PostItem;
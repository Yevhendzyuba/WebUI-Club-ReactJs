import React from "react";
import PostItem from "../PostItem/PostItem";
import { GetElementsOfArray } from "./PostList.styled";

const PostList = ({coments}) =>{
    return(
        <GetElementsOfArray>
            {coments.map((coment, index) =>
                <PostItem number={index + 1}coment={coment} key={coment.id}/>
            )}
        </GetElementsOfArray>
    )
}

export default PostList;
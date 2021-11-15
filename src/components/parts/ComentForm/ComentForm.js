import React, {useState} from "react";

import MyInput from "../../graph_elements/input/MyInput";
import MyTextarea from "../../graph_elements/textarea/MyTextarea";
import MyButton from "../../graph_elements/button/MyButton";
import { AuthorizationForm } from "./ComentForm.styled";

const ComentForm = ({create}) =>{
   
    const [coment, setComent] = useState({
        user: '',
        text: ''
    })

    let data = new Date();
    let year = data.getFullYear();
    let month = data.getMonth();
    let day = data.getDate();
    let timer = `${day}.${month+1}.${year}`;

    const addNewComent = (e) =>{
        e.preventDefault();
        const newComent ={
            ...coment, 
            id: Date.now(), 
            time: timer
        }
        create(newComent)
        setComent({ user: '', text: ''})
     }


    return(
        <AuthorizationForm>
            <MyInput 
                value={coment.user}
                onChange={e => setComent({...coment, user: e.target.value})}
                type='text' 
                placeholder='name'>
            </MyInput>
            <MyTextarea
                value={coment.text}
                onChange={e => setComent({...coment, text: e.target.value})}
                type='text' 
                placeholder='coment'>
            </MyTextarea>
            <MyButton onClick={addNewComent}>Send</MyButton>
        </AuthorizationForm>
    )
}

export default ComentForm;
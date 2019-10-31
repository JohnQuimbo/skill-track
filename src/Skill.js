import React from 'react';
import Modal from './Modal'
import QuestButton from './QuestButton';

function Skill(props){
    return(
    <div className = "skill" >
        <h1>{props.name}</h1>
        <h2>Level: {props.level}</h2>
        <img src ={props.imgUrl}/>
        <button className = "levelUp" onClick={props.increment}>Level Up!</button>
        <QuestButton />
        <Modal message = {props.message}/>
    </div>
    )
}

export default Skill
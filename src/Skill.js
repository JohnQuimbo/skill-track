import React from 'react';
import Modal from './Modal'

function Skill(props){
    return(
    <div className = "skill" >
        <h1>{props.name}</h1>
        <h2>Level: {props.level}</h2>
        <img src ={props.imgUrl}/>
        <button className = "levelUp" onClick={props.increment}>Level Up!</button>
        <button className = "questLog" onClick = {props.showModal}>Quests</button>
        <Modal modalTruth={props.show} message ="PLEASE WORK"/>
    </div>
    )
}

export default Skill
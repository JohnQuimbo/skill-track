import React from 'react';

function Skill(props){
    return(
    <div className = "skill" >
        <h1>{props.name}</h1>
        <h2>Level: {props.level}</h2>
        <img src ={props.imgUrl}/>
        <button className = "levelUp" onClick={props.onClick}>Level Up!</button>
        <button className = "questLog">Challenges</button>
    </div>
    )
}

export default Skill
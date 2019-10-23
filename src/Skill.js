import React from 'react';

function Skill(props){
    return(
    <div className = "skill" >
        <h1>{props.name}</h1>
        <h2>Level: {props.level}</h2>
        <img src ={props.imgUrl}/>
        <div className = "levelUp">
            <button onClick={props.onClick}>Level Up!</button>
        </div>
        <div className = "questLog">
            <button>Quests</button>
        </div>
    </div>
    )
}

export default Skill
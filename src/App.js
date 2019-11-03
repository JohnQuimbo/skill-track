import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skill from "./Skill"
import Navbar from "./Navbar"
import {skills} from './Challenges';

class App extends React.Component {
  constructor(){
    super()    
    this.state = {
      counts: []
    }
    this.incrementOne = this.incrementOne.bind(this)
  }

      
  incrementOne = skill => this.setState(state => ({ counts: [...state.counts, skill] }));
    
 

  
  render(){
    const { counts , show } = this.state;
    console.log(counts);

    return(
      <div className="App">
        {skills.map(skill => (
          <Skill
            key={skill.name}
            name={skill.name}
            imgUrl={skill.imgUrl}
            level={
              counts.filter(skillCount => skillCount === skill.name).length
            }
            increment={() => this.incrementOne(skill.name)}        
            message = {skill.quests}
          />

        ))}
      </div>
    )
  }
}

export default App;
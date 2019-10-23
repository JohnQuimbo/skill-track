import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skill from "./Skill"
import Navbar from "./Navbar"

const drumChallenges = [
  {
      id:1,
      text:"Set up your first drum set"
  },
  {
      id:2,
      text:"Learn how to properly grip sticks"
  },
  {
      id:3,
      text:"Hit drums with proper technique"
  },
  {
      id:4,
      text:"4/4 beat (1 +3 on Bass Drum/ 2 + 4 on snare)"
      //Song challenge(Wake Me Up When September Ends)
  },
  {
      id:5,
      text:"Learn Basic Rock beat"
      //Song challenge(Back in Black)
  }

]

class App extends React.Component {
  constructor(){
    super()    
    this.state = {
      count : 1   
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        count : prevState.count + 1
      }
    })
  };
  
  render(){
    const challenge = drumChallenges[this.state.count];
    return(
      <div className="App">
        
        
        
        <Skill 
          name="Drums" 
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/81kXfzLBExL._SX425_.jpg" 
          nextChallenge={challenge.text}
          level= {this.state.count}
          onClick={this.handleClick}  
        />



      </div>
    )
  }
}

export default App;

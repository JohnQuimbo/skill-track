import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skill from "./Skill"
import drumChallenges from "./drumChallenges"

class App extends React.Component {
  constructor(){
    super()    
    this.state = {
      count : 1,
      challenges: drumChallenges
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
    return(
      <div className="App">
        <Skill 
          name="Drums" 
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/81kXfzLBExL._SX425_.jpg" 
          nextChallenge="Proper stick control"
          level= {this.state.count}
          onClick={this.handleClick}  
        />
      </div>
    )
  }
}

export default App;

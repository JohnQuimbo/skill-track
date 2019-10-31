import React from 'react';
import Modal from './Modal'

export default class QuestButton extends React.Component {
    constructor(){
        super()    
        this.state = {
          show: false
        }
      }

      showModal = e => {
        this.setState({
          show: true
        });
        console.log(this.state.show)
      };

     
      
    render() {
        const { show } = this.state;
        return(
        <div>
            <button className = "questLog" onClick ={this.showModal}>Quests</button>
            <Modal message = "fuck" modalTruth = {show}/>
        </div>
        )
    }

}
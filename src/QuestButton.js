import React from 'react';

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

      onClose = e => {
        this.setState({
            show : false
        })
      };

     
      
    render() {
        const { show } = this.state;
        if(this.state.show === true){
            return(
                <div>
                    <button onClick={this.onClose}>Close</button>
                    <p>fuck</p>
                </div>
            )
        }
        return(
        <div>
            <button className = "questLog" onClick ={this.showModal}>Quests</button>
        </div>
        )
    }

}
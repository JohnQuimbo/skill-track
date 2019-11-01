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
        const challengeList = this.props.message

        if(this.state.show === true){
            console.log(this.props.message)
            return(
                <div className = "modal">
                    <div className = "modalButton">
                        <button onClick={this.onClose}>Close</button>
                    </div>
                    <div className = "modalText">{challengeList.join("\n")}</div>
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
import React from 'react';

export default class Modal extends React.Component {
    constructor(props){
        super(props)    
        this.state = {
          show : false,
        }      
      }

    render() {
        if (!this.props.modalTruth) {
          return null;
        }
        return <div>{this.props.message}</div>;
      }
}
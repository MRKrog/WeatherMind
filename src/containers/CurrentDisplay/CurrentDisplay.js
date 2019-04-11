import React, { Component } from 'react';


export class CurrentDisplay extends Component {

  render() {
    return (
      <div className="CurrentDisplay">
        

        <div className="Today-Container">
          <p>{this.props.today.time}</p>
          <p>{this.props.today.tempHigh}</p>
          <p>{this.props.today.tempLow}</p>
        </div>

      </div>
    )
  }
}

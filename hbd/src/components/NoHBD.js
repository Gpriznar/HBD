import React, {Component} from 'react';

class NoHBD extends Component {

  render() {

let noHBDMessage = ['Message 1', 'Message 2', 'Message 3', 'Message 4', 'Message 5', 'Message 6', 'Message 7']
let randomIndex = Math.floor(Math.random() * noHBDMessage.length)
let randomNoHBDMessage = noHBDMessage[randomIndex]

  return (
    <div className="message">
    <h1> {randomNoHBDMessage} </h1>
    </div>
  );
 }
}

export default NoHBD;

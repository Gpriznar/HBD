import React, {Component} from 'react';

class NoHBD extends Component {

  render() {

let noHBDMessage = ['Message 1', 'Message 2', 'Message 3', 'Message 4', 'Message 5', 'Message 6']
let randomIndex = Math.floor(Math.random() * noHBDMessage.length)
let randomNoHBDMessage = noHBDMessage[randomIndex]

  return (
    <h1> {randomNoHBDMessage} </h1>
  );
 }
}

export default NoHBD;

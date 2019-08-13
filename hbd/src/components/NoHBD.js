import React, {Component} from 'react';

class NoHBD extends Component {

  render() {

let noHBDMessage = ['Awkward...', 'Hmmm I guess you should probably leave', 'Dang what a bummer', 'Happy Not Birthday', 'Try again tomorrow', 'Shhhh this can be our secert', 'ERROR NO BIRTHDAY DETECTED']
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

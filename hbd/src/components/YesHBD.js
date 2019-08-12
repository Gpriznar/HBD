import React, {Component} from 'react';

class YesHBD extends Component {

  render() {

  let yesHBDMessage = ['Message 1', 'Message 2', 'Message 3', 'Message 4', 'Message 5', 'Message 6', 'Message 7']
  let randomIndex = Math.floor(Math.random() * yesHBDMessage.length)
  let randomYesHBDMessage = yesHBDMessage[randomIndex]

    return (
      <div className="message">
      <h1> {randomYesHBDMessage} </h1>
      </div>
  );
 }
}

export default YesHBD;

import React, {Component} from 'react';

class YesHBD extends Component {

  render() {

  let yesHBDMessage = ['Happy Birthday!', 'HBD!', 'Woooohoooo!', 'Congratulations!', 'Another successful revolution', 'Awesome!', 'Time to party!']
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

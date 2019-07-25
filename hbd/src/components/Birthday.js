import React, {Component} from 'react';
import NoHBD from './NoHBD';
import YesHBD from './YesHBD';



class Birthday extends Component {
  constructor() {
    super()
    this.state = {
      isItYourBirthday: 0,
    }
  }

//Event Handlers


  handleNo = () => {
    this.setState({
      isItYourBirthday: 1
    })
  }

  handleYes = () => {
    this.setState({
      isItYourBirthday: 2,
    })
  }


//Render

  render() {

  let body = null



if(this.state.isItYourBirthday === 0) {
    body = (
      <div>
      <h1> Is TODAY your Birthday? </h1>
      <div className="HBDButtons">
      <button onClick={this.handleYes}> Yes! </button>
      <button onClick={this.handleNo} > No! </button>
      </div>
      </div>
    )
  }

  else if(this.state.isItYourBirthday === 1){
    body = (
      <NoHBD />
    )
  }

  else if(this.state.isItYourBirthday === 2) {
    body = (
      <YesHBD />
    )
  }

  return (
    <div> {body} </div>
  );
 }
}

export default Birthday;

import React, {Component} from 'react';
import NoHBD from './NoHBD';
import YesHBD from './YesHBD';



class Birthday extends Component {
  constructor() {
    let today = new Date()
    super()
    this.state = {
      month: "",
      today: today,
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



//Component

  componentDidMount = () => {
      let today = this.state.today
      let monthNumber = (today.getUTCMonth() + 1).toString()
      console.log(this.state.month)
      console.log(monthNumber)
      if(monthNumber === '1') {
        this.setState({
          month: "Janurary"
        })
      } else if (monthNumber === '2'){
        this.setState({
          month: "Feburary"
        })
      } else if (monthNumber === '3') {
        this.setState({
          month: "March"
        })
      } else if (monthNumber === '4') {
        this.setState({
          month: "April"
        })
      } else if (monthNumber === '5'){
        this.setState({
          month: "May"
        })
      } else if (monthNumber === '6'){
        this.setState({
          month: "June"
        })
      } else if (monthNumber === '7'){
        this.setState({
          month: "July"
        })
      } else if (monthNumber === '8'){
        this.setState({
          month: "August"
        })
      } else if (monthNumber === '9'){
        this.setState({
          month: "September"
        })
      } else if (monthNumber === '10'){
        this.setState({
          month: "October"
        })
      } else if (monthNumber === '11'){
        this.setState({
          month: "November"
        })
      } else if (monthNumber  === '12'){
        this.setState({
          month: "December"
        })
      }

}


//Render

  render() {

  let body = null



if(this.state.isItYourBirthday === 0) {
  let today = this.state.today
  let day = (today.getUTCDate().toString())
  let month = this.state.month
  let year = (today.getFullYear().toString())
    body = (
      <div>
      <h1> Is {month} {day}, {year} your birthday? </h1>
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

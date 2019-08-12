import React, {Component} from 'react';
import Birthday from './components/Birthday'
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="container">
    <div className="card">
    <div class="shape-diamond">
    <div class="message-block">
    <div className="HBDTitle">
    <Birthday />
    </div>
    </div>
    </div>
    </div>
    </div>
  );
 }
}

export default App;

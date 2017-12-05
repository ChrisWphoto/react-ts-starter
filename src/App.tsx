import * as React from 'react';
import './App.css';
import Hello from './components/Hello';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Hello name="BILLLY" enthusiasmLevel={1}/>
      </div>
    );
  }
}

export default App;

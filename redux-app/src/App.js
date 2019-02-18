import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from './package/react-redux/src/index';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
const mapPropsToState = (state) => {
  return {
    stateTree: state,
  }
}
console.log('here is the wrapComponent: \n')
console.log(connect(mapPropsToState));
console.log(connect);
export default connect(mapPropsToState)(App);

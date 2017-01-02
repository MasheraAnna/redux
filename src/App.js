import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props.testStore);
    return (
      <div>
          <input type = 'text' />
          <button id = 'addTrack'> Add track </button>
          <ul class = 'list'>
          </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch =>({})
)(App);

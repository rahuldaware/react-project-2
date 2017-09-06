import React, { Component } from 'react';
import './App.css';
import Post from './components/Post.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post />
        <Post />
      </div>
    );
  }
}

export default App;

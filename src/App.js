import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar'
import MessagesList from './components/MessageList'
import  AddMessage from './components/AddMessage'

class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
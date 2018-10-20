import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Home from '../Components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;

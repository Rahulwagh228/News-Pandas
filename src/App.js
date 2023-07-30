// import logo from './logo.svg';
import Navbar from './Components/Navbar';
import './App.css';
import React, { Component } from 'react'
import News from '../src/Components/news'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>

      </div>
    )
  }
}


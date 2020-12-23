import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';

export default class App extends Component{
  render(){
    return (
      <div>
        <Score />
        <Solution />
        <Letters />
      </div>
    )
  }
}

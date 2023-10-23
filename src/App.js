import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticeUseFunc from './EventPracticeUseFunc';
import ValidationSample from './ValidationSample';
import RefSample from './RefSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {

  state = {
    color : '#000000'
  }

  handleClick = () => {
    this.setState({
      color : getRandomColor()
    })
  }

  render() {
    return (
      <>
        {/* <MyComponent name={'3'} favoriteNumber={2} a={'ttt'} b={{a : true}}>리액트</MyComponent>
        <Counter></Counter>
        <Say></Say> */}
        {/* <EventPractice></EventPractice> */}
        
        {/* <ValidationSample></ValidationSample> */}

        {/* <ScrollBox ref={ref => this.scrollBox = ref}></ScrollBox>
        <button
          onClick={()=>{this.scrollBox.scrollToBottom()}}
        >
          맨 밑으로
        </button> */}
        
        {/* <IterationSample></IterationSample> */}
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}></LifeCycleSample>
      </>
    );
  }
}

export default App;
 
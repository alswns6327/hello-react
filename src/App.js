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

class App extends Component {
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
        
        <IterationSample></IterationSample>
      </>
    );
  }
}

export default App;
 
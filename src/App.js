import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticeUseFunc from './EventPracticeUseFunc';

function App() {
  
  return (
    <>
      {/* <MyComponent name={'3'} favoriteNumber={2} a={'ttt'} b={{a : true}}>리액트</MyComponent>
      <Counter></Counter>
      <Say></Say> */}
      {/* <EventPractice></EventPractice> */}
      <EventPracticeUseFunc></EventPracticeUseFunc>
    </>
  );
}

export default App;

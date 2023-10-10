import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

function App() {
  
  return (
    <>
      <MyComponent name={'3'} favoriteNumber={2} a={'ttt'} b={{a : true}}>리액트</MyComponent>
      <Counter></Counter>
      <Say></Say>
    </>
  );
}

export default App;

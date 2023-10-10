import React from 'react';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  
  return (
    <>
      <MyComponent name={'3'} favoriteNumber={2} a={'ttt'} b={{a : true}}>리액트</MyComponent>
    </>
  );
}

export default App;

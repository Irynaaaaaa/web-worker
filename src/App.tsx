import React from 'react';
import ExpensiveFibonacci from './components/ExpensiveFibonacci';
import Fibonacci from './components/Fibonacci';
import ColorComponent from './components/ColorComponent';
import './App.css';

//ExpensiveFibonacci blocks the entire UI when calculating the Fibonacci number. ColorComponent is not able to change the color, inputs are blocked, and the button is not clickable.
//Fibonacci uses a Web Worker to calculate the Fibonacci number in a separate thread.

function App() {
  return (
    <div className="App">
      <ExpensiveFibonacci />
      <Fibonacci />
      <ColorComponent />
    </div>
  );
}

export default App;

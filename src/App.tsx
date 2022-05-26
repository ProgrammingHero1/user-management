import React from 'react';
import logo from './logo.svg';
import './App.css';

let student: string = 'Jeff';
let age: number = 69;
let isSmart: boolean = true;

let students: string[] = ['Joe', 'Biden', 'Harris']; 
let fees: number[] = [12,45,78,12,45];

interface Person {
  name: string,
  job?: string, 
  age: number
}

const person: Person = {
  name: 'Bill Clinton',
  age: 85
}


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

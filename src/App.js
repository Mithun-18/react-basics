import React from 'react';
import './App.css';
import Header from './components/Header';

let Profile=["Mithun","Poojary"];




function App() {
  return (
    <div className="App" >
        <Header items={Profile}/>

    </div>
  );
}

export default App;

// import React from 'react';
import './App.css';
import Event from './components/Event';
//  import Header from './components/Header';

import Navigation from './components/navigation';
let Profile=["Home","About","Vision","Help"];

// function Head(props){
//   return <h1>{props.name}</h1>;
// }


function App() {
  return (
    <div className="App" >
        {/* <Header items={Profile}/>  */}
      
        {/* <Navigation names={Profile}/> */}
        <Event/>
    </div>
  );
}

export default App;

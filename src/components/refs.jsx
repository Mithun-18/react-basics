import React, { useRef } from "react";


export default function Alert() {
  let word="Hi Iam Mithun";

  // let inputref=React.createRef();
  // let inref=React.createRef();

  const inputref=useRef(0);
  const inref=useRef(0);



  function update(){
    inputref.current.innerHTML=word;
    inref.current.innerHTML=word;
  }

  return (<div>
    {console.log(inputref)}
    <h1 ref={inputref}></h1>
    <button onClick={update}>Click</button>
    <h1 ref={inref}></h1>
    
  </div>);
}

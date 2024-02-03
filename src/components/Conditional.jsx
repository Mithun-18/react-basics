import { useState } from "react";

export default function Conditional(){
    let [Button,SetButton]=useState("Clicked to Hello")
    const [Mssg,SetMssg]= useState("")

    function Change(){
        Button==="Clicked to Hello" ? (SetMssg("Hello 🙋‍♂️")) : ( SetMssg("Bye 👋"));

        Button==="Clicked to Hello" ? (SetButton("Clicked to Bye") ) : ( SetButton("Clicked to Hello"));

    }

    return(
        <div id="greet">
            <p id="greet">{Mssg}</p>
            <button onClick={Change}>{Button}</button>
        </div>
    );
}
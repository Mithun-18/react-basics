import { useState } from "react";
import Hook from "./Hook";

export default function Toggle(){
    const [display,setDisplay]=useState(true);

    return(<div>
        <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
        {display && <Hook/>}
    </div>);
}
import { useState } from "react";

export default function Event() {
  let [mssg, setmssg] = useState("Hello");
  let [Click,setClick]=useState("Click to Bye")

  function EventHandle() {
    if (mssg === "Hello") {
      setmssg("Good bye!");
      setClick("Click to Hello")
    } else {
      setmssg("Hello");
      setClick("Click to Bye")

    }
  }
  return (
    <div>
      <h4>{mssg}</h4>
      <button onClick={EventHandle}>{Click}</button>
    </div>
  );
}

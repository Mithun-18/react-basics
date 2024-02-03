import { useEffect, useState } from "react";

export default function Hook() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  let mousePosition=(e)=>{
    setX(e.clientX);
    setY(e.clientY);
    {console.log(x,y)}

  }

  useEffect(() => {
    console.log("use effect called");
    window.addEventListener('mousemove',mousePosition);

    return ()=>{
      window.removeEventListener('mousemove',mousePosition);
      console.log("removed mousemove event");
    }
  },[])

  return <div>
    X-{x}  Y-{y}
    </div>;
}

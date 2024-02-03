import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  function tick() {
    setCount(count+ 1);
  }

  useEffect(() => {
    setInterval(tick, 2000);
    console.log("renderd",count);

    return()=>{
        clearInterval(tick)
    }
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

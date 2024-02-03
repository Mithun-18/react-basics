import { useState } from "react";

export default function Clicked({ increamentCount }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          increamentCount(count,setCount);
        }}
      >
        Clicked {count} times
      </button>
    </div>
  );
}

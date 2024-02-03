import { useState } from "react";

export default function Hover({ increamentCount }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onMouseEnter={() => {
          increamentCount(count,setCount);
        }}
      >
        Hovered {count} times
      </button>
    </div>
  );
}

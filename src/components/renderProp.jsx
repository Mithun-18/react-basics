
export function increamentCount(count,setCount) {
  setCount(count + 1);
}

export default function Render({children}) {
  return <div>
    {children}
  </div>;
}

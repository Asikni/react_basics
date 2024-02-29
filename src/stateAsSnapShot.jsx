import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  function increment() {
    setScore((s) => s + 1);
  }

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5); //gets executed first but state does not get updated(although state doesn't get updated but the function was executed and value of that is stored somewhere)
          //so the number still has value 0 when next command gets executed ie alert(number)
          //finally setNumber gets executed and state is updated...ie 5
          alert(number);
        }}
      >
        +5
      </button>
      <div style={{ display: "flex" }}>
        <button onClick={() => increment()}>+1</button>
        <button
          onClick={() => {
            increment();
            increment();
            increment();
          }}
        >
          +3
        </button>
        <h1>Score: {score}</h1>
      </div>
    </>
  );
}

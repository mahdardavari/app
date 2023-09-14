"use client";
import { useCounterStore } from "@/app/store";

function Zustand() {
  //selector
  const count = useCounterStore((state) => state.count);
  const { decrement, increment } = useCounterStore((state) => state.actions);

  return (
    <>

      <h1>Zustand</h1>
      <button className="border border-red-200" onClick={increment}>increment</button>
      <br />
      <button onClick={decrement}>decrement</button>
      <div className="px-2 bg-green-400">{count}</div>
     
    </>
  );
}

export default Zustand;

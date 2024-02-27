import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log(count);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    // setCount(count > 0 ? count - 1 : count);
    if(count > 0){
      setCount(count - 1)
    }
  };

  return (
    <div className=" font-mono border border-gray-100 p-10 rounded-xl">
      <h1 className=" font-bold text-4xl mb-5">Counter : {count}</h1>
      <div className=" flex gap-4">
        <button
          onClick={decrement}
          className=" bg-sky-600 px-2 py-1 rounded-lg text-white"
        >
          Sub (-)
        </button>
        <button
          onClick={increment}
          className=" bg-sky-600 px-2 py-1 rounded-lg text-white"
        >
          Add (+)
        </button>
      </div>
    </div>
  );
};

export default Counter;

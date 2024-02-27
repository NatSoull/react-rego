import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  const textHandler = (event) => {
    // console.log(event.target.value)
    setText(event.target.value)
    console.log(text)
  }

  return (
    <div>
      <h1 className=" mb-5">Name Input</h1>
      <input
        type="text"
        className=" w-full border-2 rounded-lg border-gray-400 px-3 py-1"
        value={text}
        onChange={textHandler}
      />
    </div>
  );
};

export default Input;

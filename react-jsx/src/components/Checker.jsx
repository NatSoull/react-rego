import { useState } from "react";

const Checker = () => {
  const [done, setDone] = useState(false);

  const handleDone = () => {
      setDone(!done)
      
  }

  console.log(done);

  return (
    <div>
      <div className=" flex justify-center items-center gap-4">
        <input
          type="checkbox"
          checked={done}
          onChange={handleDone}
          className=" w-6 h-6"
          id="checkbox"
        />
        <label
          htmlFor="checkbox"
          className=" text-2xl font-bold font-mono select-none cursor-pointer"
        >
          Check Me
        </label>
      </div>
    </div>
  );
};

export default Checker;

import React, { useRef } from 'react'

const UseRef = () => {

    const inputText = useRef("")

    const handleSubmit = () => {
        console.log(inputText.current.value);
    }

  return (
    <div className=' flex gap-4'>
        <input type="text" className=' border-2 rounded-lg px-2 py-1' ref={inputText} />
        <button className=' bg-blue-500 py-1 px-3 rounded-lg text-white' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UseRef
/* eslint-disable react/prop-types */
import { useState } from "react";

const Accordion = ({id , title , content , isShow , condShowAccordion}) => {

    // const [show , setShow] = useState(false);

    // // const condShow = show ? "animate__animated animate__fadeInDown" : "hidden";

    // const handleShow = () => {
    //     setShow(!show)
    // }

  return (
    <div className=" border border-gray-400">
      <div
        // onClick={handleShow}
        onClick={() => condShowAccordion(id)}
        className=" bg-gray-200 p-3 select-none cursor-pointer flex justify-between items-center"
      >
        <h4>{title}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${isShow && "rotate-180"} duration-300`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {isShow && (
        <div className={`p-4 animate__animated animate__fadeIn`}>
          <p>
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;

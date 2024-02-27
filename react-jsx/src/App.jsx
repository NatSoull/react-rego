/* eslint-disable no-unused-vars */
import Accordion from "./components/Accordion";
import AccordionGroup from "./components/AccordionGroup";
import Checker from "./components/Checker";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Input from "./components/Input";
import ListsGroup from "./components/ListsGroup";
import Status from "./components/Status";
import UseRef from "./components/UseRef";

const App = () => {
  return (
    <div className=" h-screen bg-gray-200 flex flex-col items-center pt-20">
      <div className=" bg-white p-10 w-[400px]">
        {/* <Heading />
        <Form />
        <Status />
        <ListsGroup /> */}
        {/* <Counter /> */}
        {/* <Input /> */}
        {/* <Checker/> */}
        {/* <AccordionGroup/> */}
        <UseRef/>
      </div>
    </div>
  );
};

export default App;

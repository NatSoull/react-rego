import React from "react";
import "./style.css";
import ReactDOM from "react-dom/client";

const rootElement = document.querySelector("#root");

const root = ReactDOM.createRoot(rootElement);

// const heading = React.createElement("h1" , null , "Min Ga Lar Par");

const app = () => {
    return React.createElement("div" , null , 
        React.createElement("h1" , null , "Course Lists"),
        React.createElement("ul" , null , 
            React.createElement("li" , null , "Web Dev Foundation"),
            React.createElement("li" , null , "Special Web design"),
            React.createElement("li" , null , "Web app development"),
            React.createElement("li" , null , "Basic UI Design")
        )
    )
};

root.render(app());

console.log("hi");
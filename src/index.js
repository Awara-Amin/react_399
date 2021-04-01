import React from "react";
import ReactDOM from "react-dom";
// inline styling

// in JSX  that is how we write CSS inline
// {color: "red";} this is one case

// ReactDOM.render(
//   <h1 style={{ color: "red" }}>This is how we change color inline CSS!</h1>,
//   document.getElementById("root")
// );

//  The second case
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

//  if you want to update a color, you can do it like that
customStyle.color = "blue"; //  the change is on the go

ReactDOM.render(
  // wow wow by only ussing the variable it gets all the properties
  <h1 style={customStyle}>This is how we change color inline CSS!</h1>,
  document.getElementById("root")
);

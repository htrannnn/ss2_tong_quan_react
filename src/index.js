import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const listElement1 = React.createElement("li", null, "Thành phố Hà Nội");
const listElement2 = React.createElement("li", null, "Thành phố Hồ Chí Minh");
const listElement3 = React.createElement("li", null, "Thành phố Đà Nẵng");
const listElement4 = React.createElement("li", null, "Thành phố Hải Phòng");
const listElement5 = React.createElement("li", null, "Thành phố Cần Thơ");

const listMain = React.createElement("ul", null, listElement1, listElement2, listElement3, listElement4, listElement5);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(listMain);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

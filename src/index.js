import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import QuoteContainer from "./Components/QuoteContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css"
      ></link>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Arrows:wght@400..700&display=swap');
      </style>
    </head>
    <body className="bg-dark">
      <QuoteContainer />
    </body>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

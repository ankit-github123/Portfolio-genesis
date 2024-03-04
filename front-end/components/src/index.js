import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

export const ScrollingElement = () => {
  // eslint-disable-next-line
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
    // console.log(scrollY)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  return (
    <div className="App">
      {/* <div className="fixed-center">Scroll position: {scrollY}px</div> */}
    </div>
  );
};

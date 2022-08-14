import React, { useEffect, useRef } from "react";
import loader from "./loader.css";

const Loader = () => {
  const grid = useRef(null);
  const loaderIcon = useRef(null);

  useEffect(() => {
    // console.log(grid.current.getBoundingClientRect());
    console.log(loaderIcon.current);
  }, []);
  return (
    <div className="container">
      <div class="lds-grid mx-auto" style={{}} ref={grid}>
        <div ref={loaderIcon}></div>
        <div ref={loaderIcon}></div>
        <div ref={loaderIcon}></div>
        <div ref={loaderIcon}></div>
        <div ref={loaderIcon}></div>
        <div ref={loaderIcon}></div>
        <div ref={loaderIcon}></div>
        <div ref={loaderIcon}></div>
        <div ref={loaderIcon}></div>
      </div>
    </div>
  );
};

export default Loader;

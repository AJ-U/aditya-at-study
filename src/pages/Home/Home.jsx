import React, { Fragment, useState } from "react";
import "./Home.css";
import useCounter from "../../hooks/useCounter";

function Home() {
  const { count, increment, data: productsData } = useCounter("https://dummyjson.com/products");
  return (
    <Fragment>
        {/* <div>Home</div> */}
        <div>Hello world</div>
        {/* new Virtual DOM || old Virtual DOM -> changes -> Actual DOM*/}
      <h1>count : {count}</h1>
      <button
        onClick={() => {
          increment(5);
        }}
      >
        Increment by 5
      </button>
      <br></br>
      {productsData?.products && productsData?.products[0]?.title}
    </Fragment>
  );
}

export default Home;

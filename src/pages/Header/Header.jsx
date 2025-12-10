import React, { Fragment, useState } from "react";
import "./Header.css";
import useCounter from "../../hooks/useCounter";

function Header() {
  const {
    count,
    increment,
    data: userData,
  } = useCounter("https://dummyjson.com/users");
  return (
    <Fragment>
      <div>Header</div>
      <h1>count : {count}</h1>
      <button
        onClick={() => {
          increment(2);
        }}
      >
        Increment by 2
      </button>
      <br></br>
      {
      userData?.users && 
      userData?.users[0]?.firstName}
      <hr></hr>
    </Fragment>
  );
}

export default Header;

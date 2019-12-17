import React, { Component } from "react";

const Hello = props => {
  return (
    <div className="f1 tc">
      <h1>hello world</h1>
      <p>{props.greeting}</p>
    </div>
  );
};

export default Hello;

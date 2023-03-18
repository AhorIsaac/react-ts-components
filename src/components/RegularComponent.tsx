import React, { Component } from "react";

type MyProps = {
  name: string;
};

type MyState = {};

class RegularComponent extends Component<MyProps, MyState> {
  // initial state
  state: MyState = {};

  // render the component
  render() {
    console.log("🚀 ~ :Regular Component Rendered");
    return (
      <div className="my-2 mx-auto border border-1 border-light rounded shadow-sm">
        <h2 className="text-dark p-2">{this.props.name}</h2>
      </div>
    );
  }
}

export default RegularComponent;

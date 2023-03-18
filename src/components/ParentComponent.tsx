import React, { Component } from "react";
import PureComp from "./PureComponent";
import RegularComponent from "./RegularComponent";

class ParentComponent extends Component<{}, { name: string }> {
  state = { name: "Shidoon Inc." };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Shidoon Incorporated" });
    }, 3000);
  }

  render() {
    return (
      <div>
        I'm the parent component
        <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;

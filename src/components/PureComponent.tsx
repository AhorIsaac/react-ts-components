import React, { PureComponent } from "react";

class PureComp extends PureComponent<{ name?: string }, {}> {
  render() {
    console.log("Pure Component Rendered");
    return (
      <>
        <div className="my-2 mx-auto border border-1 border-light rounded shadow-sm">
          <h2 className="text-dark p-2">
            I'm the pure component! {this.props.name}
          </h2>
        </div>
      </>
    );
  }
}

export default PureComp;

import React, { Component } from "react";
import UpdatedComponent from "./HigherOrderComponent";

interface IProps {
  name?: string;
}

interface IState {
  count: number;
}

export class Click extends Component<IProps, IState> {
  state: IState = { count: 0 };

  increment = (num: number): void => {
    this.setState({ count: this.state.count + num });
  };

  decrement = (num: number): void => {
    this.setState({ count: this.state.count - num });
  };

  reset = (): void => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;

    return (
      <section className="rounded border-1 border border-light shadow-sm row my-2 mx-auto">
        <article className="col-md-6">
          <button
            type="button"
            className="btn btn-primary btn-sm m-2"
            onClick={() => this.increment(1)}
          >
            ➕
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm m-2"
            onClick={() => this.reset()}
          >
            0️⃣
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm m-2"
            onClick={() => this.decrement(1)}
          >
            ➖
          </button>
        </article>
        <article className="col-md-6">
          <h2 className="text-primary">
            {this.props.name} &nbsp; {count}
          </h2>
        </article>
      </section>
    );
  }
}

export default UpdatedComponent(Click);

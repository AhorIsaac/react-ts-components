import React from "react";
import Click from "./components/Click";
import FunctionalComponent from "./components/FunctionalComponent";
import PureComp from "./components/PureComponent";
import RegularComponent from "./components/RegularComponent";

const App = () => {
  return (
    <>
      <section>
        <header>
          <FunctionalComponent />
        </header>
        <main className="mt-0">
          <div className="container col-xxl-8 px-2 py-5">
            <RegularComponent name="TypeScript" />
            <RegularComponent name="JavaScript" />
            <Click />
            <Click name="Shidoon" />
            <PureComp name="Ecady" />
            <PureComp name="Ave" />
            <PureComp />
          </div>
        </main>
        <footer></footer>
      </section>
    </>
  );
};

export default App;

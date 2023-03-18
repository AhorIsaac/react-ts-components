import React from "react";
import FunctionalComponent from "./components/FunctionalComponent";
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
          </div>
        </main>
        <footer></footer>
      </section>
    </>
  );
};

export default App;

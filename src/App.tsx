import React from "react";
import { ClassCompI, ClassCompJ } from "./components/ClassComponent";
import { Click } from "./components/Click";
import FunctionalComponent from "./components/FunctionalComponent";

const App = () => {
  return (
    <>
      <section>
        <header>
          <FunctionalComponent />
        </header>
        <main className="mt-0">
          <div className="container col-xxl-8 px-2 py-5">
            <div className="row justify-content-center align-items-center g-1 py-5">
              <div className="col-lg-6 col-sm-12 col-lg-6 mb-sm-2">
                {/* the introductory component */}
                <ClassCompI />
              </div>
              <div className="col-lg-6 px-2">
                {/* the carousel */}
                <ClassCompJ />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <Click name="Smart Search" />
        </footer>
      </section>
    </>
  );
};

export default App;

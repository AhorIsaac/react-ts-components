/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, ReactElement } from "react";

export interface IFuncComp {}

const FunctionalComponent: FC<IFuncComp> = (): ReactElement => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/assets/shidoon-light.jpg"
              style={{ height: "35px", width: "110px", borderRadius: "4px" }}
              alt={"shidoon"}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-info" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FunctionalComponent;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

/* Class Component, Carousel */
export class ClassCompI extends React.Component<{}, {}> {
  render() {
    return (
      <article>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* list of carousel indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
          </div>

          {/* list of carousel items */}
          <div className="carousel-inner">
            {/* carousel item */}
            <div className="carousel-item active">
              <img
                src={"assets/images/img-1.jpg"}
                alt="Footy-haus"
                className="d-block w-100 rounded"
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1> Footy Haus </h1>
                  <p>We are the best at what we do!</p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* carousel item */}
            <div className="carousel-item">
              <img
                src={"assets/images/img-3.jpg"}
                alt="Footy-haus"
                className="d-block w-100 rounded"
              />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Excellence</h1>
                  <p>Swim in a Pristine Pool of Eliteness.</p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* carousel item */}
            <div className="carousel-item">
              <img
                src={`assets/images/img-4.jpg`}
                alt="Footy-haus"
                className="d-block w-100 rounded"
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1> Footy Haus </h1>
                  <p>We are the best at what we do!</p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* carousel item */}
            <div className="carousel-item">
              <img
                src={`assets/images/img-5.jpg`}
                alt="Footy-haus"
                className="d-block w-100 rounded"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Beauty as a Personality.</h1>
                  <p>Partner with Us.</p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Click to get started
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* carousel item */}
            <div className="carousel-item">
              <img
                src={`assets/images/img-6.png`}
                alt="Footy-haus"
                className="d-block w-100 rounded"
              />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Excellence</h1>
                  <p>Swim in a Pristine Pool of Eliteness.</p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* carousel item */}
            <div className="carousel-item">
              <img
                src={`assets/images/img-7.jpg`}
                alt="Footy-haus"
                className="d-block w-100 rounded"
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1> Footy Haus </h1>
                  <p>We are the best at what we do!</p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* carousel controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </article>
    );
  }
}

/* className Component, Introductory Heading and Paragraph */
export class ClassCompJ extends React.Component<{}, {}> {
  render() {
    return (
      <article className="px-2">
        <h1 className="display-5 fw-normal lh-1 mb-3">React Components </h1>
        <p className="lead">
          <p className="lead p-light">
            We take pride in our work and put in a lot of effort to ensure that
            our clients are happy by providing them with very quality housing
            and apartments at very affordable prices, that solve their
            environmental problems.
          </p>
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
            Get Started
          </button>
        </div>
      </article>
    );
  }
}

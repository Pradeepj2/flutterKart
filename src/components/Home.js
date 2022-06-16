import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Home = () => {
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}`)
  //     .then((res) => console.log(res));
  // }, []);

  return (
    <React.Fragment>
      <div id="main-nav" className="shadow-sm menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand">
                {" "}
                <img src="img/logo.svg" className="img-fluid" />{" "}
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item ">
                    <NavLink to="/" className="nav-link">
                      {" "}
                      <i className="fas fa-search"></i>{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink to="/" className="nav-link">
                      {" "}
                      <i className="fas fa-filter"></i>{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink to="/" className="nav-link">
                      {" "}
                      Sell & Earn{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link" to="/login">
                      <button type="button" className="btn btn-warning signin">
                        Sign In
                      </button>{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link" to="/signup">
                      <button
                        type="button"
                        className="btn btn-outline-warning signup"
                      >
                        Sign Up
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div id="carousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="img/carousel-1.svg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption ">
                <h3>Discover World's Best</h3>
                <h1>Flutter Developing Tool's</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br /> Lorem Ipsum has been the
                  industry's standard dummy text{" "}
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="img/carousel-2.svg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption">
                <h3>Discover World's Best</h3>
                <h2>Flutter Developing Tool's</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br /> Lorem Ipsum has been the
                  industry's standard dummy text{" "}
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="img/carousel-3.svg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption ">
                <h3>Discover World's Best</h3>
                <h2>Flutter Developing Tool's</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br /> Lorem Ipsum has been the
                  industry's standard dummy text{" "}
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
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
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div id="filter-box" className="shadow-sm">
        <div className="container">
          <ul className="list-inline">
            <li className="list-inline-item">
              <button
                type="button"
                className="btn btn-outline-warning filter-btn"
              >
                Flutter UI/UX
              </button>
            </li>
            <li className="list-inline-item">
              <button
                type="button"
                className="btn btn-outline-warning filter-btn"
              >
                Kit
              </button>
            </li>
            <li className="list-inline-item">
              <button
                type="button"
                className="btn btn-outline-warning filter-btn"
              >
                Template
              </button>
            </li>

            <li className="list-inline-item">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-danger dropdown-toggle filter-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catagery
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Mobile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Full Application
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Template
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      UI Elements
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Utilites
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* ------------------------------- filter-box close ---------------------------------> */}

      <div className="product-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-12">
              <img
                src="img/product-image-1.png"
                className="img-fluid product-image"
              />
            </div>

            <div className="col-xl-5 col-lg-5 col-sm-8">
              <h3>UI/UX Kit - Delivery App</h3>
              <p>Software Version : Flutter 2.x</p>
              <p>File Types Included : </p>
              <p>DartYamllayered Png</p>
              <ul className="list-inline mt-4 button-group d-none d-sm-block">
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-outline-warning buy-now-btn"
                  >
                    Buy Now
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-outline-warning preview-btn"
                  >
                    Preview
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-4 product-details">
              <div className="center-section">
                <h2 className="text-center">$45</h2>
                <ul className="list-inline mt-4 rating ">
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="far fa-star"></i>
                  </li>
                </ul>
                <p>No Of Sales ( 24 )</p>
              </div>
              <div className=" d-none d-sm-block">
                <div className="d-flex justify-content-between">
                  <NavLink to="/">
                    {" "}
                    <div>
                      <i className="far fa-heart fa-heart-icon"></i>
                    </div>{" "}
                  </NavLink>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-warning cart-btn"
                    >
                      {" "}
                      <img src="img/cart.svg" className="img-fluid" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-9">
                <ul className="list-inline button-group d-block d-sm-none">
                  <li className="list-inline-item">
                    <button
                      type="button"
                      className="btn btn-outline-warning buy-now-btn"
                    >
                      Buy Now
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      type="button"
                      className="btn btn-outline-warning preview-btn"
                    >
                      Preview
                    </button>
                  </li>
                </ul>
              </div>

              <div className="col-3 mobile-screen">
                <div className="d-flex justify-content-between d-block d-sm-none">
                  <NavLink to="/">
                    {" "}
                    <div>
                      <i className="far fa-heart fa-heart-icon"></i>
                    </div>{" "}
                  </NavLink>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-warning cart-btn"
                    >
                      {" "}
                      <img src="img/cart.svg" className="img-fluid" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product-box 1 --> */}

      <div className="product-box">
        {/* product-box 2 --> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-12">
              <img
                src="img/product-image-2.png"
                className="img-fluid product-image"
              />
            </div>

            <div className="col-xl-5 col-lg-5 col-sm-8">
              <h3>Active eCommerce Flutter App</h3>
              <p>Software Version : Flutter 2.x</p>
              <p>File Types Included : </p>
              <p>DartYamllayered Png</p>
              <ul className="list-inline mt-4 button-group d-none d-sm-block">
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-outline-warning buy-now-btn"
                  >
                    Buy Now
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-outline-warning preview-btn"
                  >
                    Preview
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-4 product-details">
              <div className="center-section">
                <h2 className="text-center">$45</h2>
                <ul className="list-inline mt-4 rating ">
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="far fa-star"></i>
                  </li>
                </ul>
                <p>No Of Sales ( 24 )</p>
              </div>
              <div className=" d-none d-sm-block">
                <div className="d-flex justify-content-between">
                  <NavLink to="/">
                    {" "}
                    <div>
                      <i className="far fa-heart fa-heart-icon"></i>
                    </div>{" "}
                  </NavLink>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-warning cart-btn"
                    >
                      {" "}
                      {/* <i className="fa fa-shopping-cart" aria-hidden="true"></i> */}
                      <img src="img/cart.svg" className="img-fluid" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-9">
                <ul className="list-inline button-group d-block d-sm-none">
                  <li className="list-inline-item">
                    <button
                      type="button"
                      className="btn btn-outline-warning buy-now-btn"
                    >
                      Buy Now
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      type="button"
                      className="btn btn-outline-warning preview-btn"
                    >
                      Preview
                    </button>
                  </li>
                </ul>
              </div>

              <div className="col-3 mobile-screen">
                <div className="d-flex justify-content-between d-block d-sm-none">
                  <NavLink to="/">
                    {" "}
                    <div>
                      <i className="far fa-heart fa-heart-icon"></i>
                    </div>{" "}
                  </NavLink>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-warning cart-btn"
                    >
                      {" "}
                      <img src="img/cart.svg" className="img-fluid" />{" "}
                      {/* <i className="fa fa-shopping-cart" aria-hidden="true"></i> */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product-box 2 --> */}

      <div className="product-box">
        {/* product-box 3 --> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-12">
              <img
                src="img/product-image-3.png"
                className="img-fluid product-image"
              />
            </div>

            <div className="col-xl-5 col-lg-5 col-sm-8">
              <h3>UI/UX Kit - Delivery App</h3>
              <p>Software Version : Flutter 2.x</p>
              <p>File Types Included : </p>
              <p>DartYamllayered Png</p>
              <ul className="list-inline mt-4 button-group d-none d-sm-block">
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-outline-warning buy-now-btn"
                  >
                    Buy Now
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-outline-warning preview-btn"
                  >
                    Preview
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-4 product-details">
              <div className="center-section">
                <h2 className="text-center">$45</h2>
                <ul className="list-inline mt-4 rating ">
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="far fa-star"></i>
                  </li>
                </ul>
                <p>No Of Sales ( 24 )</p>
              </div>
              <div className=" d-none d-sm-block">
                <div className="d-flex justify-content-between">
                  <NavLink to="/">
                    {" "}
                    <div>
                      <i className="far fa-heart fa-heart-icon"></i>
                    </div>{" "}
                  </NavLink>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-warning cart-btn"
                    >
                      {" "}
                      <img src="img/cart.svg" className="img-fluid" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-9">
                <ul className="list-inline button-group d-block d-sm-none">
                  <li className="list-inline-item">
                    <button
                      type="button"
                      className="btn btn-outline-warning buy-now-btn"
                    >
                      Buy Now
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      type="button"
                      className="btn btn-outline-warning preview-btn"
                    >
                      Preview
                    </button>
                  </li>
                </ul>
              </div>

              <div className="col-3 mobile-screen">
                <div className="d-flex justify-content-between d-block d-sm-none">
                  <NavLink to="/">
                    {" "}
                    <div>
                      <i className="far fa-heart fa-heart-icon"></i>
                    </div>{" "}
                  </NavLink>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-warning cart-btn"
                    >
                      {" "}
                      <img src="img/cart.svg" className="img-fluid" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product-box 3 --> */}

      <div className="product-box">
        {/* product-box 4 --> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-12">
              <img
                src="img/product-image-4.png"
                className="img-fluid product-image"
              />
            </div>

            <div className="col-xl-5 col-lg-5 col-sm-8">
              <h3>UI/UX Kit - Delivery App</h3>
              <p>Software Version : Flutter 2.x</p>
              <p>File Types Included : </p>
              <p>DartYamllayered Png</p>
              <ul className="list-inline mt-4 button-group d-none d-sm-block">
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-outline-warning buy-now-btn"
                  >
                    Buy Now
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-outline-warning preview-btn"
                  >
                    Preview
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-4 product-details">
              <div className="center-section">
                <h2 className="text-center">$45</h2>
                <ul className="list-inline mt-4 rating ">
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="far fa-star"></i>
                  </li>
                </ul>
                <p>No Of Sales ( 24 )</p>
              </div>
              <div className=" d-none d-sm-block">
                <div className="d-flex justify-content-between">
                  <NavLink to="/">
                    {" "}
                    <div>
                      <i className="far fa-heart fa-heart-icon"></i>
                    </div>{" "}
                  </NavLink>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-warning cart-btn"
                    >
                      {" "}
                      <img src="img/cart.svg" className="img-fluid" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-9">
                <ul className="list-inline button-group d-block d-sm-none">
                  <li className="list-inline-item">
                    <button
                      type="button"
                      className="btn btn-outline-warning buy-now-btn"
                    >
                      Buy Now
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      type="button"
                      className="btn btn-outline-warning preview-btn"
                    >
                      Preview
                    </button>
                  </li>
                </ul>
              </div>

              <div className="col-3 mobile-screen">
                <div className="d-flex justify-content-between d-block d-sm-none">
                  <NavLink to="/">
                    {" "}
                    <div>
                      <i className="far fa-heart fa-heart-icon"></i>
                    </div>{" "}
                  </NavLink>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-warning cart-btn"
                    >
                      {" "}
                      <img src="../img/cart.svg" className="img-fluid" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product-box 4 --> */}

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 footer-menu">
              <ul className="list-inline mt-4 ">
                <li className="list-inline-item">
                  <NavLink className="NavLink" to="/TermsAndCondition">
                    {" "}
                    Terms and Condition{" "}
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink className="NavLink" to="/HelpCenter">
                    {" "}
                    Help Center{" "}
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink className="NavLink" to="/home">
                    {" "}
                    Blogs{" "}
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink className="NavLink" to="/Carries">
                    {" "}
                    Carrers{" "}
                  </NavLink>
                </li>
              </ul>

              <ul className="list-inline mt-4 ">
                <li className="list-inline-item">
                  <NavLink className="NavLink" to="/ContactUs">
                    {" "}
                    Contact Us
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink className="NavLink" to="/PrivacyPolicy">
                    {" "}
                    Privacy Policy
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink className="NavLink" to="/CopyRights">
                    {" "}
                    Copy Rights
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink className="NavLink" to="/NewRelase">
                    {" "}
                    New Relase
                  </NavLink>
                </li>
              </ul>

              <ul className="list-inline mt-4 ">
                <li className="list-inline-item">
                  <NavLink className="NavLink" to="/Licence">
                    {" "}
                    Licence
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink className="NavLink" to="/AboutUs">
                    {" "}
                    About Us
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink className="NavLink" to="/Testimonial">
                    {" "}
                    Testimonial
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-xl-3">
              <div className="center-section mt-4">
                <img src="img/logo.svg" className="img-fluid" />
                <ul className="list-inline mt-5 social-media ">
                  <li className="list-inline-item">
                    <NavLink className="NavLink" to="/home">
                      {" "}
                      <i className="fab fa-facebook-f"></i>
                    </NavLink>{" "}
                  </li>
                  <li className="list-inline-item">
                    <NavLink className="NavLink" to="/home">
                      {" "}
                      <i className="fab fa-instagram"></i>
                    </NavLink>{" "}
                  </li>
                  <li className="list-inline-item">
                    <NavLink className="NavLink" to="/home">
                      {" "}
                      <i className="fab fa-reddit"></i>
                    </NavLink>{" "}
                  </li>
                  <li className="list-inline-item">
                    <NavLink className="NavLink" to="/home">
                      {" "}
                      <i className="fab fa-twitter"></i>
                    </NavLink>{" "}
                  </li>
                  <li className="list-inline-item">
                    <NavLink className="NavLink" to="/home">
                      {" "}
                      <i className="fab fa-pinterest"></i>
                    </NavLink>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
        integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
        crossOrigin="anonymous"
      ></script> */}

      {/* <script>
   $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 150) {
          $('.menu').addClass('fixed');
      } else {
          $('.menu').removeClass('fixed');
      }
   });

</script> */}
    </React.Fragment>
  );
};

export default Home;

import React from "react";
import { NavLink } from "react-router-dom";

const NewRelese = () => {
  return (
    <React.Fragment>
      <div id="main-nav" class="shadow-sm menu">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                {" "}
                <img src="./img/logo.svg" class="img-fluid" />{" "}
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="main_nav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item ">
                    <a class="nav-link" href="#">
                      {" "}
                      <i class="fas fa-search"></i>{" "}
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link" href="#">
                      {" "}
                      Sell & Earn
                    </a>
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
              {/* <!-- navbar-collapse.// --> */}
            </div>
            {/* <!-- container-fluid.// --> */}
          </nav>
        </div>
      </div>
      {/* <!-- main-nav Close --> */}

      <div class="container mt-5 mb-5">
        <div class="col-xl-12 mb-4">
          <h4 class="mt-4">New Relases</h4>

          <div class="row">
            <div class="col-xl-4 col-lg-4 col-sm-6 mb-4">
              <div class="product-box products-listing new-relases mt-4">
                <div class="col-12">
                  <img src="./img/product-image-3.png" class="img-fluid" />
                </div>
                <div class="col-12 pe-3 ps-3">
                  <h3>
                    Mediphrma Online Pharmacy Store <br />
                    Flutter Full App UI Kit
                  </h3>
                  <p>in Mobile/Flutter</p>
                  <p>Software Version : Flutter 1.x</p>
                  <h3 class="mb-0">$45</h3>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="ps-3">
                      <ul class="list-inline mt-2 rating mb-0">
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="far fa-star"></i>
                        </li>
                      </ul>
                      <p>
                        {" "}
                        <small>No Of Sales ( 24 )</small>{" "}
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex justify-content-end pe-3">
                      <a href="#" class="me-3">
                        <div>
                          <i class="far fa-heart fa-heart-icon"></i>
                        </div>
                      </a>
                      <div>
                        <button
                          type="button"
                          class="btn btn-outline-warning cart-btn p-0"
                        >
                          {" "}
                          <img src="img/cart.svg" class="img-fluid" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-sm-6 mb-4">
              <div class="product-box products-listing new-relases mt-4">
                <div class="col-12">
                  <img src="img/product-image-3.png" class="img-fluid" />
                </div>
                <div class="col-12 pe-3 ps-3">
                  <h3> UI/UX Kit - Delivery App </h3>
                  <p>in Mobile/Flutter</p>
                  <p>Software Version : Flutter 1.x</p>
                  <h3 class="mb-0">$45</h3>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="ps-3">
                      <ul class="list-inline mt-2 rating mb-0">
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="far fa-star"></i>
                        </li>
                      </ul>
                      <p>
                        {" "}
                        <small>No Of Sales ( 24 )</small>{" "}
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex justify-content-end pe-3">
                      <a href="#" class="me-3">
                        <div>
                          <i class="far fa-heart fa-heart-icon"></i>
                        </div>
                      </a>
                      <div>
                        <button
                          type="button"
                          class="btn btn-outline-warning cart-btn p-0"
                        >
                          {" "}
                          <img src="img/cart.svg" class="img-fluid" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-sm-6 mb-4">
              <div class="product-box products-listing new-relases mt-4">
                <div class="col-12">
                  <img src="img/product-image-3.png" class="img-fluid" />
                </div>
                <div class="col-12 pe-3 ps-3">
                  <h3>Active eCommerce Flutter App</h3>
                  <p>in Mobile/Flutter</p>
                  <p>Software Version : Flutter 1.x</p>
                  <h3 class="mb-0">$45</h3>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="ps-3">
                      <ul class="list-inline mt-2 rating mb-0">
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="far fa-star"></i>
                        </li>
                      </ul>
                      <p>
                        {" "}
                        <small>No Of Sales ( 24 )</small>{" "}
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex justify-content-end pe-3">
                      <a href="#" class="me-3">
                        <div>
                          <i class="far fa-heart fa-heart-icon"></i>
                        </div>
                      </a>
                      <div>
                        <button
                          type="button"
                          class="btn btn-outline-warning cart-btn p-0"
                        >
                          {" "}
                          <img src="img/cart.svg" class="img-fluid" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-xl-4 col-lg-4 col-sm-6 mb-4">
              <div class="product-box products-listing new-relases mt-4">
                <div class="col-12">
                  <img src="img/product-image-3.png" class="img-fluid" />
                </div>
                <div class="col-12 pe-3 ps-3">
                  <h3>
                    Mediphrma Online Pharmacy Store <br />
                    Flutter Full App UI Kit
                  </h3>
                  <p>in Mobile/Flutter</p>
                  <p>Software Version : Flutter 1.x</p>
                  <h3 class="mb-0">$45</h3>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="ps-3">
                      <ul class="list-inline mt-2 rating mb-0">
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="far fa-star"></i>
                        </li>
                      </ul>
                      <p>
                        {" "}
                        <small>No Of Sales ( 24 )</small>{" "}
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex justify-content-end pe-3">
                      <a href="#" class="me-3">
                        <div>
                          <i class="far fa-heart fa-heart-icon"></i>
                        </div>
                      </a>
                      <div>
                        <button
                          type="button"
                          class="btn btn-outline-warning cart-btn p-0"
                        >
                          {" "}
                          <img src="img/cart.svg" class="img-fluid" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-sm-6 mb-4">
              <div class="product-box products-listing new-relases mt-4">
                <div class="col-12">
                  <img src="img/product-image-3.png" class="img-fluid" />
                </div>
                <div class="col-12 pe-3 ps-3">
                  <h3> UI/UX Kit - Delivery App </h3>
                  <p>in Mobile/Flutter</p>
                  <p>Software Version : Flutter 1.x</p>
                  <h3 class="mb-0">$45</h3>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="ps-3">
                      <ul class="list-inline mt-2 rating mb-0">
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="far fa-star"></i>
                        </li>
                      </ul>
                      <p>
                        {" "}
                        <small>No Of Sales ( 24 )</small>{" "}
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex justify-content-end pe-3">
                      <a href="#" class="me-3">
                        <div>
                          <i class="far fa-heart fa-heart-icon"></i>
                        </div>
                      </a>
                      <div>
                        <button
                          type="button"
                          class="btn btn-outline-warning cart-btn p-0"
                        >
                          {" "}
                          <img src="img/cart.svg" class="img-fluid" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-sm-6 mb-4">
              <div class="product-box products-listing new-relases mt-4">
                <div class="col-12">
                  <img src="img/product-image-3.png" class="img-fluid" />
                </div>
                <div class="col-12 pe-3 ps-3">
                  <h3>Active eCommerce Flutter App</h3>
                  <p>in Mobile/Flutter</p>
                  <p>Software Version : Flutter 1.x</p>
                  <h3 class="mb-0">$45</h3>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="ps-3">
                      <ul class="list-inline mt-2 rating mb-0">
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="far fa-star"></i>
                        </li>
                      </ul>
                      <p>
                        {" "}
                        <small>No Of Sales ( 24 )</small>{" "}
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex justify-content-end pe-3">
                      <a href="#" class="me-3">
                        <div>
                          <i class="far fa-heart fa-heart-icon"></i>
                        </div>
                      </a>
                      <div>
                        <button
                          type="button"
                          class="btn btn-outline-warning cart-btn p-0"
                        >
                          {" "}
                          <img src="img/cart.svg" class="img-fluid" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="top-button">
        <a href="#top" id="bottom">
          <i class="fa fa-chevron-circle-up"></i>
        </a>
      </div>

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

      {/* 


<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script> */}

      {/* <script>
   $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 150) {
          $('.menu').addClass('fixed');
      } else {
          $('.menu').removeClass('fixed');
      }
   }); */}

      {/* 
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -50
        }, 1000);
        return false;
      }
    }
  }); */}
      {/* });

// </script> */}
    </React.Fragment>
  );
};

export default NewRelese;

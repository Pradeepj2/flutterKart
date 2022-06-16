import React from "react";
import { NavLink } from "react-router-dom";

const ProductPage = () => {
  return (
    <div>
      <div id="main-nav" class="shadow-sm menu">
        {/* <!-- main-nav Open -->  */}
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
              <NavLink to="/" className="navbar-brand">
                {" "}
                <img src="img/logo.svg" className="img-fluid" />{" "}
              </NavLink>
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
        <div class="row">
          <div class="col-xl-8 col-lg-8">
            <div class="row">
              <div class="col-xl-8 col-sm-10 col-8">
                <h3>
                  {" "}
                  Mediphrma Online Pharmacy Store <br />
                  Flutter Full App UI Kit{" "}
                </h3>
              </div>

              <div class="col-xl-4 col-4 d-block d-sm-none ">
                <a href="#licence">
                  <button type="button" class="btn btn-warning buynow_btn">
                    {" "}
                    <img
                      src="img/cart.svg"
                      class="img-fluid price-icon mr-3"
                    />{" "}
                    $85
                  </button>
                </a>
              </div>

              <div class="col-xl-4 col-sm-2 col-4 d-none d-md-block d-lg-none ">
                <a href="#licence">
                  <button type="button" class="btn btn-warning buynow_btn">
                    {" "}
                    <img
                      src="img/cart.svg"
                      class="img-fluid price-icon mr-3"
                    />{" "}
                    $85
                  </button>{" "}
                </a>{" "}
              </div>
              <div class="col-xl-4 col-sm-2 col-4 d-none d-lg-block d-xl-none ">
                <a href="#licence">
                  <button type="button" class="btn btn-warning buynow_btn">
                    {" "}
                    <img
                      src="img/cart.svg"
                      class="img-fluid price-icon mr-3"
                    />{" "}
                    $85
                  </button>{" "}
                </a>{" "}
              </div>
            </div>

            <ul class="list-inline mt-4">
              <li class="list-inline-item">
                {" "}
                <button
                  type="button"
                  class="btn btn-primary item-details-btn button-active"
                >
                  Item Details
                </button>{" "}
              </li>
              <li class="list-inline-item">
                {" "}
                <a href="comments.html">
                  {" "}
                  <button
                    type="button"
                    class="btn btn-outline-primary comments-btn"
                  >
                    Comments
                  </button>{" "}
                </a>{" "}
              </li>
            </ul>

            <img src="img/product-details.png" class="img-fluid" />

            <div class="row">
              <div class="col-xl-6 col-lg-6 col-sm-6">
                <ul class="list-inline mt-4 center-responsive">
                  <li class="list-inline-item">
                    {" "}
                    <button type="button" class="btn btn-warning buynow_btn ">
                      Buy Now
                    </button>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-outline-warning preview_btn"
                    >
                      Preview
                    </button>{" "}
                  </li>
                </ul>
              </div>

              <div class="col-xl-6 col-lg-6 col-sm-6 mt-4">
                <ul class="list-inline share-button-box center-responsive">
                  <li class="list-inline-item ml-3">
                    {" "}
                    <a href="#">
                      {" "}
                      <div>
                        <i class="far fa-heart fa-heart-icon"></i>
                      </div>{" "}
                    </a>{" "}
                  </li>
                  <li class="list-inline-item">
                    <div class="share-button">
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic radio toggle button group"
                      >
                        <input
                          type="radio"
                          class="btn-check"
                          name="btnradio"
                          id="btnradio1"
                          autocomplete="off"
                          checked
                        />
                        <label class="btn btn-outline-primary" for="btnradio1">
                          {" "}
                          <i class="fas fa-share-alt"></i>{" "}
                        </label>

                        <input
                          type="radio"
                          class="btn-check"
                          name="btnradio"
                          id="btnradio2"
                          autocomplete="off"
                        />
                        <label class="btn btn-outline-primary" for="btnradio2">
                          {" "}
                          <i class="fab fa-instagram"></i>{" "}
                        </label>

                        <input
                          type="radio"
                          class="btn-check"
                          name="btnradio"
                          id="btnradio3"
                          autocomplete="off"
                        />
                        <label class="btn btn-outline-primary" for="btnradio3">
                          {" "}
                          <i class="fab fa-reddit"></i>{" "}
                        </label>

                        <input
                          type="radio"
                          class="btn-check"
                          name="btnradio"
                          id="btnradio3"
                          autocomplete="off"
                        />
                        <label class="btn btn-outline-primary" for="btnradio3">
                          {" "}
                          <i class="fab fa-twitter"></i>{" "}
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-5">
              <h4>Product Description</h4>
              <p class="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <ul class="list-inline mt-4 center-responsive">
                <li class="list-inline-item">
                  {" "}
                  <button
                    type="button"
                    class="btn btn-outline-primary reviews-btn"
                  >
                    Reviews
                  </button>{" "}
                </li>
                <li class="list-inline-item">
                  {" "}
                  <h6>120 Ratings</h6>{" "}
                </li>
              </ul>

              <ul class="list-inline mt-4 rating ">
                <li class="list-inline-item">
                  <i class="fas fa-star yellow-text"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fas fa-star yellow-text"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fas fa-star yellow-text"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fas fa-star yellow-text"></i>
                </li>
                <li class="list-inline-item">
                  <i class="far fa-star yellow-text"></i>
                </li>
              </ul>
              <h6 class="mb-4">No Of Sales ( 34 )</h6>
            </div>

            <hr />

            <div class="mt-4">
              <h4>Template Feature</h4>

              <p class="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div class="mt-4">
              <h4>Feature Include</h4>

              <p class="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div class="mt-4">
              <h4>Page Include</h4>

              <img src="img/page-include-img-1.png" class="img-fluid mt-4" />
              <img src="img/page-include-img-2.png" class="img-fluid mt-4" />
              <img src="img/page-include-img-3.png" class="img-fluid mt-4" />
            </div>

            <div class="mt-4">
              <h4>Graphics Card Include</h4>

              <p class="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div class="row" id="graphics-card-include">
              <h4 class="mt-5 mb-4">Graphics Card Include</h4>
              <div class="col-xl-4 col-lg-4 col-sm-6 col-12">
                <img src="img/related-product-1.png" class="img-fluid" />
                <div class="center-section ">
                  <h6 class="text-center mt-3">Food Delivery App</h6>
                  <h5 class="text-center">$ 45</h5>
                  <ul class="list-inline mt-1 rating center-section">
                    <li class="list-inline-item">
                      <i class="fas fa-star yellow-text"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star yellow-text"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star yellow-text"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star yellow-text"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="far fa-star yellow-text"></i>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-sm-6 col-12">
                <img src="img/related-product-2.png" class="img-fluid" />
                <div class="center-section ">
                  <h6 class="text-center mt-3">E-Commerce App</h6>
                  <h5 class="text-center">$ 15</h5>
                  <ul class="list-inline mt-1 rating center-section">
                    <li class="list-inline-item">
                      <i class="fas fa-star yellow-text"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star yellow-text"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star yellow-text"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star yellow-text"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="far fa-star yellow-text"></i>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-sm-6 col-12">
                <img src="img/related-product-3.png" class="img-fluid" />
                <div class="center-section ">
                  <h6 class="text-center mt-3">Fitness App</h6>
                  <h5 class="text-center">$ 142</h5>
                  <ul class="list-inline mt-1 rating center-section">
                    <li class="list-inline-item">
                      <i class="fas fa-star yellow-text"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star yellow-text"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star yellow-text"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star yellow-text"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="far fa-star yellow-text"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-4 mt-5">
            <div id="licence">
              <div class="row">
                <div class="col-xl-10 col-10">
                  <div class="btn-group licence">
                    <button
                      type="button"
                      class="btn btn-warning dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Regular Licence
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Regular Licence
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Extended Licence
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-xl-2 col-2">
                  <p class="text-center mb-0 mt-2">
                    <strong>$80</strong>
                  </p>
                </div>
              </div>

              <div class="support-section">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Additional support cost
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Installation support cost
                  </label>
                </div>

                <button
                  type="button"
                  class="btn btn-warning buynow_btn center-section center-responsive"
                >
                  {" "}
                  <img src="img/cart.svg" class="img-fluid mr-3" /> Add to Cart
                </button>
              </div>
            </div>

            <div class="badge-section">
              <div class="badge-head">
                {" "}
                <h4>Badge</h4>{" "}
              </div>

              <div class="badge-box">
                <div class="d-flex justify-content-between">
                  <div>
                    <i class="fas fa-star yellow-text"></i>
                  </div>
                  <div>
                    <i class="far fa-star yellow-text"></i>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="btn btn-outline-primary comments-btn center-section center-responsive mt-3 mb-3"
              >
                View Creator
              </button>
            </div>

            <div class="tag-section">
              <dl class="row">
                <dd class="col-sm-5 col-5">Last Update </dd>
                <dd class="col-sm-1 col-1">:</dd>
                <dd class="col-sm-6 col-5">02 may 2020</dd>

                <dd class="col-sm-5 col-5">Created</dd>
                <dd class="col-sm-1 col-1">:</dd>
                <dd class="col-sm-6 col-5">18 February 28</dd>

                <dd class="col-sm-5 col-5">File Included</dd>
                <dd class="col-sm-1 col-1">:</dd>
                <dd class="col-sm-6 col-5">Dart</dd>

                <dd class="col-sm-5 col-5">Software Version</dd>
                <dd class="col-sm-1 col-1">:</dd>
                <dd class="col-sm-6 col-5">Flutter 1.x</dd>

                <dd class="col-sm-5 col-5">Tags</dd>
                <dd class="col-sm-1 col-1">:</dd>
                <dd class="col-sm-6 col-5">
                  Android, Application, Apps, Dart, Elements, Flutter, ios, Kit,
                  Mobile, Mobile app, Online, Pharma, Pharmacy, Store, UI
                </dd>
              </dl>
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

      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
        integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
        crossorigin="anonymous"
      ></script>

      {/* 
<script>
   $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 150) {
          $('.menu').addClass('fixed');
      } else {
          $('.menu').removeClass('fixed');
      }
   });



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
  });
});


</script> */}
    </div>
  );
};

export default ProductPage;

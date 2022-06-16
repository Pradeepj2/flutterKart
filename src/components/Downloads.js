import React from "react";
import { NavLink } from "react-router-dom";

const Downloads = () => {
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
        <div class="col-xl-12 mb-4">
          <h3>downloads</h3>
        </div>

        <div class="download-box">
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-sm-6">
              <img src="img/cart-item-1.png" class="img-fluid" />
            </div>
            <div class="col-xl-5 col-lg-6 col-sm-6">
              <div class="cart-item">
                <h4 class="mt-3">
                  Mediphrma Online Pharmacy Store <br /> Flutter Full App UI Kit
                </h4>
                <h3 class="mt-4">$85</h3>
                <div class="row mt-3">
                  <div class="col-xl-10 col-sm-10 col-10">
                    <button
                      type="button"
                      class="btn btn-outline-primary secondary-button"
                    >
                      Licence : Regular
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-1 download-divider"></div>
            <div class="col-xl-3">
              <div class="mailsupport">
                <div class="d-flex justify-content-center mt-3">
                  <div>
                    {" "}
                    <button
                      type="button"
                      class="btn btn-outline-primary secondary-button"
                    >
                      Mail Support
                    </button>{" "}
                  </div>
                </div>

                <div class="d-flex justify-content-center mt-4">
                  <div>
                    <button type="button" class="btn btn-warning">
                      Download
                    </button>
                  </div>
                  <div class="ms-3">
                    <button type="button" class="btn btn-warning">
                      Install Theme
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="download-box mt-5">
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-sm-6">
              <img src="img/cart-item-1.png" class="img-fluid" />
            </div>
            <div class="col-xl-5 col-lg-6 col-sm-6">
              <div class="cart-item">
                <h4 class="mt-3">
                  Mediphrma Online Pharmacy Store <br /> Flutter Full App UI Kit
                </h4>
                <h3 class="mt-4">$85</h3>
                <div class="row mt-3">
                  <div class="col-xl-10 col-sm-10 col-10">
                    <button
                      type="button"
                      class="btn btn-outline-primary secondary-button"
                    >
                      Licence : Regular
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-1 download-divider"></div>
            <div class="col-xl-3">
              <div class="mailsupport">
                <div class="d-flex justify-content-center mt-3">
                  <div>
                    {" "}
                    <button
                      type="button"
                      class="btn btn-outline-primary secondary-button"
                    >
                      Mail Support
                    </button>{" "}
                  </div>
                </div>

                <div class="d-flex justify-content-center mt-4">
                  <div>
                    <button type="button" class="btn btn-warning">
                      Download
                    </button>
                  </div>
                  <div class="ms-3">
                    <button type="button" class="btn btn-warning">
                      Install Theme
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="download-box mt-5">
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-sm-6">
              <img src="img/cart-item-1.png" class="img-fluid" />
            </div>
            <div class="col-xl-5 col-lg-6 col-sm-6">
              <div class="cart-item">
                <h4 class="mt-3">
                  Mediphrma Online Pharmacy Store <br /> Flutter Full App UI Kit
                </h4>
                <h3 class="mt-4">$85</h3>
                <div class="row mt-3">
                  <div class="col-xl-10 col-sm-10 col-10">
                    <button
                      type="button"
                      class="btn btn-outline-primary secondary-button"
                    >
                      Licence : Regular
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-1 download-divider"></div>
            <div class="col-xl-3">
              <div class="mailsupport">
                <div class="d-flex justify-content-center mt-3">
                  <div>
                    {" "}
                    <button
                      type="button"
                      class="btn btn-outline-primary secondary-button"
                    >
                      Mail Support
                    </button>{" "}
                  </div>
                </div>

                <div class="d-flex justify-content-center mt-4">
                  <div>
                    <button type="button" class="btn btn-warning">
                      Download
                    </button>
                  </div>
                  <div class="ms-3">
                    <button type="button" class="btn btn-warning">
                      Install Theme
                    </button>
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
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>


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

export default Downloads;

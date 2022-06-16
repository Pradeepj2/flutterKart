import React from "react";
import { NavLink } from "react-router-dom";

const HelpCenter = () => {
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

      <div class="help-center mb-5">
        <div class="col-xl-12">
          <div class="d-flex justify-content-center mt-4">
            <h3>Help Center</h3>
          </div>
          <div class="d-flex justify-content-center mt-4 mb-4">
            <p class="textcenter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />{" "}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco labo
              ris nisi ut aliquip.
            </p>
          </div>

          <div class="d-flex justify-content-center mb-5">
            <div class="form-group has-search col-xl-6 col-lg-7 col-sm-7 col-12">
              <span class="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                class="form-control help-center-form"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-6 col-ms-6 col-12 mb-4">
            <div class="help-center-box">
              <div class="d-flex justify-content-center mb-3">
                <div class="help-icon-box">
                  {" "}
                  <img src="img/help-icon-1.svg" />{" "}
                </div>
              </div>
              <h5 class="textcenter mt-3 mb-3">Help Center</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-6 col-ms-6 col-12 mb-4">
            <div class="help-center-box">
              <div class="d-flex justify-content-center mb-3">
                <div class="help-icon-box">
                  {" "}
                  <img src="img/help-icon-2.svg" />{" "}
                </div>
              </div>
              <h5 class="textcenter mt-3 mb-3">Help Center</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-6 col-ms-6 col-12 mb-4">
            <div class="help-center-box">
              <div class="d-flex justify-content-center mb-3">
                <div class="help-icon-box">
                  {" "}
                  <img src="img/help-icon-3.svg" />{" "}
                </div>
              </div>
              <h5 class="textcenter mt-3 mb-3">Help Center</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-6 col-ms-6 col-12 mb-4">
            <div class="help-center-box">
              <div class="d-flex justify-content-center mb-3">
                <div class="help-icon-box">
                  {" "}
                  <img src="img/help-icon-1.svg" />{" "}
                </div>
              </div>
              <h5 class="textcenter mt-3 mb-3">Help Center</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-6 col-ms-6 col-12 mb-4">
            <div class="help-center-box">
              <div class="d-flex justify-content-center mb-3">
                <div class="help-icon-box">
                  {" "}
                  <img src="img/help-icon-2.svg" />{" "}
                </div>
              </div>
              <h5 class="textcenter mt-3 mb-3">Help Center</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-6 col-ms-6 col-12 mb-4">
            <div class="help-center-box">
              <div class="d-flex justify-content-center mb-3">
                <div class="help-icon-box">
                  {" "}
                  <img src="img/help-icon-3.svg" />{" "}
                </div>
              </div>
              <h5 class="textcenter mt-3 mb-3">Help Center</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
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

export default HelpCenter;

import React from "react";
import { NavLink } from "react-router-dom";

const Payment = () => {
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
          <div class="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12 mb-5">
            <div class="col-xl-12 mb-4">
              <h3>Billing Details</h3>
            </div>

            <div class="col-xl-12">
              <div class="details-box">
                <div class="d-flex justify-content-between">
                  <div>
                    <h6 class="mt-2">Invoice</h6>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-outline-warning primary-out-line-button"
                    >
                      <i class="far fa-edit"></i>
                    </button>{" "}
                  </div>
                </div>
                <p class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h6>$ 93.8</h6>
              </div>
            </div>

            <div class="col-xl-12 mt-4">
              <div class="details-box">
                <h6 class="mt-2">Select Payment Method</h6>

                <ul class="list-inline mt-4 payment-method">
                  <li class="list-inline-item">
                    {" "}
                    <button type="button" class="btn btn-link normal-btn">
                      <img
                        src="img/payment-method-icon-1.svg"
                        class="img-fluid"
                      />
                    </button>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <button type="button" class="btn btn-link normal-btn">
                      <img
                        src="img/payment-method-icon-2.svg"
                        class="img-fluid"
                      />
                    </button>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <button type="button" class="btn btn-link normal-btn">
                      <img
                        src="img/payment-method-icon-3.svg"
                        class="img-fluid"
                      />
                    </button>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <button type="button" class="btn btn-link normal-btn">
                      <img
                        src="img/payment-method-icon-4.svg"
                        class="img-fluid"
                      />
                    </button>{" "}
                  </li>
                </ul>

                <form class="row g-3">
                  <div class="col-md-6">
                    <label for="inputCity" class="form-label form-box-label">
                      Card No
                    </label>
                    <input
                      type="text"
                      class="form-control form-box"
                      id="inputCity"
                    />
                  </div>
                </form>

                <form class="row g-3 mt-1">
                  <div class="col-md-3">
                    <label for="inputCity" class="form-label form-box-label">
                      Exp Date
                    </label>
                    <input
                      type="text"
                      class="form-control form-box"
                      id="inputCity"
                      placeholder="Month"
                    />
                  </div>

                  <div class="col-md-3">
                    <label
                      for="inputCity"
                      class="form-label form-box-label"
                    ></label>
                    <input
                      type="text"
                      class="form-control form-box year-box"
                      id="inputCity"
                      placeholder="Year"
                    />
                  </div>
                </form>

                <form class="row g-3">
                  <div class="col-md-3">
                    <label
                      for="inputCity"
                      class="form-label form-box-label"
                    ></label>
                    <input
                      type="text"
                      class="form-control form-box"
                      id="inputCity"
                      placeholder="CVV"
                    />
                  </div>
                </form>
              </div>
            </div>

            <div class="col-xl-12 mt-4">
              <div class="details-box">
                <h6>Your Order</h6>

                <dl class="row p-3 order">
                  <dd class="col-sm-6 col-5">
                    <p> Handling Fees</p>
                  </dd>
                  <dd class="col-sm-1 col-1">:</dd>
                  <dd class="col-sm-2 col-4">
                    <p>$ 2 </p>
                  </dd>

                  <dd class="col-sm-6 col-5">
                    <p>GST</p>{" "}
                  </dd>
                  <dd class="col-sm-1 col-1">:</dd>
                  <dd class="col-sm-2 col-3">
                    <p>$ 8.8 </p>
                  </dd>

                  <hr />

                  <dd class="col-sm-6 col-5">
                    <h6>Total</h6>
                  </dd>
                  <dd class="col-sm-1 col-1">:</dd>
                  <dd class="col-sm-2 col-4">
                    <h6>$ 95.8</h6>
                  </dd>
                </dl>
              </div>
            </div>

            <div class="col-12 mt-5">
              <button
                type="submit"
                class="btn btn-primary btn-warning center-section"
              >
                Make Payment
              </button>
            </div>
          </div>

          {/* <!-- ------------------------------------------- col-xl-8   -------------------------------------------------------------------- --> */}

          <div class="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12 mt-5">
            <div class="badge-section">
              <div class="badge-head">
                {" "}
                <h4>Order Summary</h4>{" "}
              </div>
              <dl class="row p-3">
                <dd class="col-sm-7 col-7">
                  <h6>
                    {" "}
                    Mediphrma Online Pharmacy Store Flutter Full App UI Kit
                  </h6>{" "}
                </dd>
                <dd class="col-sm-1 col-1">:</dd>
                <dd class="col-sm-4 col-3">
                  <h6>$ 85 </h6>
                </dd>
                <dd></dd>
                <dd class="col-sm-7 col-7">
                  <h6>Handling Fees </h6>
                </dd>
                <dd class="col-sm-1 col-1">:</dd>
                <dd class="col-sm-4 col-3">
                  <h6>$ 0.0</h6>
                </dd>
                <dd></dd>
                <dd class="col-sm-7 col-7">
                  <h6>GST </h6>
                </dd>
                <dd class="col-sm-1 col-1">:</dd>
                <dd class="col-sm-4 col-3">
                  <h6>$ 8.8</h6>
                </dd>
                <dd></dd>
                <hr />
                <dd></dd>
                <dd class="col-sm-7 col-6">
                  <h5>Total </h5>
                </dd>
                <dd class="col-sm-1 col-1">:</dd>
                <dd class="col-sm-4 col-4">
                  <h5>$ 93.8</h5>
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

export default Payment;

import React from "react";

const SignUp = () => {
  return (
    <div>
      <div class="col-xl-6 m-auto">
        <div class="signup-box">
          <div class="col-xl-8 col-lg-8 col-sm-8 col-10 signup-login-box p-4 rounded-3">
            <img
              src="img/login-logo.svg"
              class="img-fluid mx-auto d-block w-50 "
            />
            <h5 class="mb-5 mt-1"> Welcome Fluttermarketplace </h5>

            <div class="signup-form">
              <div class="d-flex justify-content-center mb-3">
                <div class="col-md-10 col-12 ">
                  <label for="inputEmail4" class="form-label form-box-label">
                    Mail Id
                  </label>
                  <input
                    type="email"
                    class="form-control form-box"
                    id="inputEmail4"
                  />
                </div>
              </div>

              <div class="d-flex justify-content-center mb-3">
                <div class="col-md-10 col-12 ">
                  <label for="inputEmail4" class="form-label form-box-label">
                    Username
                  </label>
                  <input
                    type="email"
                    class="form-control form-box"
                    id="inputEmail4"
                  />
                </div>
              </div>

              <div class="d-flex justify-content-center mb-3">
                <div class="col-md-10 col-12 position-relative ">
                  <label for="inputEmail4" class="form-label form-box-label">
                    Password
                  </label>
                  <img src="img/eye-icon.svg" class="password-eye" />
                  <input
                    type="password"
                    class="form-control form-box"
                    id="inputEmail4"
                  />
                </div>
              </div>

              <div class="d-flex justify-content-center mb-3">
                <div class="col-md-10 col-12 position-relative ">
                  <label for="inputEmail4" class="form-label form-box-label">
                    Re-Enter Passowrd
                  </label>
                  <img src="img/eye-icon.svg" class="password-eye" />
                  <input
                    type="password"
                    class="form-control form-box"
                    id="inputEmail4"
                  />
                </div>
              </div>
            </div>
            <a
              class="btn btn-light mt-5 signup-form-btn mb-4 col-xl-8 col-lg-10 col-md-10 col-12"
              href="#"
              role="button"
            >
              {" "}
              Sign Up{" "}
            </a>

            <a
              class="btn btn-light mt-5 signup-button mb-4 col-xl-8 col-lg-10 col-md-10 col-12"
              href="#"
              role="button"
            >
              {" "}
              <img src="img/google.svg" class="img-fluid signup-icon" /> Sign Up
              with google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

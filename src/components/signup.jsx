import { Link } from "react-router-dom";

export const Signup = () => (
    <div className="main-wrapper">
      <div className="account-content">
        <div className="login-wrapper">
          <div className="login-content">
            <div className="login-userset">
              <div className="login-logo">
                <img src="assets/img/logo.png" alt="img" />
              </div>
              <div className="login-userheading">
                <h3>Create an Account</h3>
                <h4>Continue where you left off</h4>
              </div>
              <div className="form-login">
                <label>Full Name</label>
                <div className="form-addons">
                  <input type="text" placeholder="Enter your full name" />
                  <img src="assets/img/icons/users1.svg" alt="img" />
                </div>
              </div>
              <div className="form-login">
                <label>Email</label>
                <div className="form-addons">
                  <input type="text" placeholder="Enter your email address" />
                  <img src="assets/img/icons/mail.svg" alt="img" />
                </div>
              </div>
              <div className="form-login">
                <label>Password</label>
                <div className="pass-group">
                  <input
                    type="password"
                    className="pass-input"
                    placeholder="Enter your password"
                  />
                  <span className="fas toggle-password fa-eye-slash" />
                </div>
              </div>
              <div className="form-login">
                <Link to="/" className="btn btn-login">Sign Up</Link>
              </div>
              <div className="signinform text-center">
                <h4>
                  Already a user?{" "}
                  <Link to="/signin" className="hover-a">
                    Sign In
                  </Link>
                </h4>
              </div>
              <div className="form-setlogin">
                <h4>Or sign up with</h4>
              </div>
              <div className="form-sociallink">
                <ul>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="assets/img/icons/google.png"
                        className="me-2"
                        alt="google"
                      />
                      Sign Up using Google
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="assets/img/icons/facebook.png"
                        className="me-2"
                        alt="google"
                      />
                      Sign Up using Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="login-img">
            <img src="assets/img/login.jpg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
  
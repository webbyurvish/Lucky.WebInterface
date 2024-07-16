import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../redux/store";

const Header = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate();

  console.log({ isRegister, isLogin });

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit");
    const credentials = { username, password };
    try {
      dispatch(loginUser({ credentials }));
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      {/* <!--==== Header top Here  ====== --> */}
      <header className="header-section header-hidden">
        <div className="header-wrapper">
          <div className="menu-logo-adjust d-flex align-items-center">
            <div className="logo-menu me-5">
              <a href="index.html" className="logo">
                <img src="./src/assets/img/logo/luckylogo.png" alt="logo" />
              </a>
              <a href="index.html" className="dark-logo">
                <img src="./src/assets/img/logo/luckylogo.png" alt="logo" />
              </a>
            </div>
            <ul className="main-menu"></ul>
          </div>
          <div className="right-menu-reature">
            <div className="signup-area">
              <a
                href="#0"
                className="btn--two"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setIsLogin((prevState) => !prevState)}
              >
                <span>Sign In</span>
              </a>
              <a
                href="#0"
                className="cmn--btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
                onClick={() => setIsRegister((prevState) => !prevState)}
              >
                <span>Register</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <!--==== Header top End  ====== --> */}
      {/* <!-- Popup Section Start --> */}
      <div
        className="modal mylogin signup-popup fade"
        id="exampleModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="head">
                <h5>Sign into your account</h5>
                <p>
                  Don't have an account?{" "}
                  <a href="#0" className="text-base">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn-close cross-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <div className="register-from">
                <form onSubmit={handleSignIn}>
                  <div className="items">
                    <div className="form-input">
                      <label htmlFor="email3" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email3"
                        placeholder="Email or Username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="items">
                    <div className="form-input">
                      <label htmlFor="password-field" className="form-label">
                        Password
                      </label>
                      <div className="form-group">
                        <input
                          id="password-field"
                          type="password"
                          className="form-control"
                          placeholder="Your Password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                          id="#password-field"
                          className="fa fa-fw fa-eye field-icon toggle-password"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="items">
                    <div className="remember d-flex align-items-center justify-content-between">
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault22"
                        >
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault22"
                          />
                          Remember me
                        </label>
                      </div>
                      <a href="#0" className="forget">
                        Forget password?
                      </a>
                    </div>
                  </div>
                  <div className="items text-center">
                    <button
                      type="submit"
                      className="cmn--btn cd-popup-close repopup"
                    >
                      <span>Start Playing</span>
                    </button>
                  </div>
                  <div className="orbar">
                    <span>OR</span>
                  </div>
                  <ul className="log-social">
                    <li>
                      <a href="#0">
                        <i className="fab fa-steam-symbol"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal mylogin fade" id="exampleModal2" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="head">
                <h5>Create New Account</h5>
                <p>
                  Already have an account?
                  <a href="#0" className="text-base">
                    Login
                  </a>
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn-close cross-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <div className="register-from">
                <form onSubmit={handleRegister}>
                  <div className="items">
                    <div className="form-input">
                      <label htmlFor="uname" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        id="uname"
                        placeholder="Your Username"
                      />
                    </div>
                  </div>
                  <div className="items">
                    <div className="form-input">
                      <label htmlFor="email33" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email33"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="items">
                    <div className="form-input">
                      <label htmlFor="password-field" className="form-label">
                        Password
                      </label>
                      <div className="form-group">
                        <input
                          id="password-field2"
                          type="password"
                          className="form-control"
                          placeholder="Your Password"
                          name="password"
                          value=""
                        />
                        <span
                          id="#password-field2"
                          className="fa fa-fw fa-eye field-icon toggle-password2"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="items">
                    <div className="check-area">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="ones1"
                        />
                        <label className="form-check-label" htmlFor="ones1">
                          I certify that I am at least 18 years of age
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="ones2"
                        />
                        <label className="form-check-label" htmlFor="ones2">
                          I agree to the{" "}
                          <a href="#0" className="text-base">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="ones3"
                        />
                        <label className="form-check-label" htmlFor="ones3">
                          I want to receive{" "}
                          <a href="#0" className="text-base">
                            news and offers
                          </a>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="items text-center">
                    <button
                      type="submit"
                      className="cmn--btn cd-popup-close repopup"
                    >
                      <span>Start Playing</span>
                    </button>
                  </div>
                  <div className="orbar">
                    <span>OR</span>
                  </div>
                  <ul className="log-social">
                    <li>
                      <a href="#0">
                        <i className="fab fa-steam-symbol"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Popup Section End --> */}
    </div>
  );
};

export default Header;

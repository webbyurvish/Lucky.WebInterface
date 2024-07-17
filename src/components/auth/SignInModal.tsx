import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slice/authSlice";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/RootState";
import { useState } from "react";

const SignInModal = () => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log({ user });

  // const navigate = useNavigate();

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
  return (
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
  );
};

export default SignInModal;

import React, { useState } from "react";
import { signupUser } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/RootState";

const RegisterModal = () => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<Date | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log({ user });
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
      dateOfBirth: dob?.toISOString().split("T")[0],
      phoneNumber,
      code,
    };
    try {
      dispatch(signupUser({ userData }));
    } catch (error) {
      console.error("Registration failed: ", error);
    }
    console.log("submit", userData);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = e.target.value;
    const selectedDate = dateString ? new Date(dateString) : null;
    setDob(selectedDate);
  };

  return (
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
                    <label htmlFor="email33" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email33"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="items">
                  <div className="form-input">
                    <label htmlFor="uname" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      id="uname"
                      placeholder="Your Username"
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
                        id="password-field2"
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        id="#password-field2"
                        className="fa fa-fw fa-eye field-icon toggle-password2"
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="items">
                  <div className="form-input">
                    <label htmlFor="datepicker" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="datepicker"
                      value={dob ? dob.toISOString().split("T")[0] : ""} // Convert Date to 'yyyy-MM-dd' string
                      onChange={handleDateChange}
                      placeholder="Select Date"
                    />
                  </div>
                </div>

                <div className="items">
                  <div className="form-input">
                    <label htmlFor="phone" className="form-label">
                      Phone (Optional)
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
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
                        I agree to the
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
  );
};

export default RegisterModal;

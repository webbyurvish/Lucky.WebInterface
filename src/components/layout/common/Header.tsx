// import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/RootState";
import SignInModal from "../../auth/SignInModal";
import RegisterModal from "../../auth/RegisterModal";
import { useSelector } from "react-redux";

const Header = () => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  console.log({ user });

  // const navigate = useNavigate();

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
            {isAuthenticated ? (
              <img
                src="./src/assets/img/man.png"
                style={{ maxWidth: "30px" }}
                alt="man"
              />
            ) : (
              <div className="signup-area">
                <a
                  href="#0"
                  className="btn--two"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <span>Sign In</span>
                </a>
                <a
                  href="#0"
                  className="cmn--btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  <span>Register</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
      {/* <!--==== Header top End  ====== --> */}
      {/* <!-- Popup Section Start --> */}
      <SignInModal />
      <RegisterModal />
      {/* <!-- Popup Section End --> */}
    </div>
  );
};

export default Header;

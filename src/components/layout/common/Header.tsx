const Header = () => {
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
            {/* <div className="header-bar">
              <span></span>
              <span></span>
              <span></span>
            </div> */}
            <ul className="main-menu">
              {/* <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="live.html">Live</a>
              </li>
              <li>
                <a href="football.html">Sports</a>
              </li>
              <li>
                <a href="cricket.html">V-Sport</a>
              </li>
              <li>
                <a href="profile.html">Promotions</a>
              </li>
              <li>
                <a href="cricket.html">eSports</a>
              </li>
              <li>
                <a
                  href="#0"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Quick Bets
                </a>
              </li> */}
              {/* <li className="menu--btn">
                <a
                  href="#0"
                  className="btn--two"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <span>Log In</span>
                </a>
              </li>
              <li className="menu--btn">
                <a
                  href="#0"
                  className="cmn--btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  <span>Sign Up</span>
                </a>
              </li> */}
            </ul>
          </div>
          <div className="right-menu-reature">
            {/* <div className="language">
              <div className="nice-select">
                <span className="current">En</span>
                <ul className="list">
                  <li data-value="1" className="option selected focus">
                    En
                  </li>
                  <li data-value="2" className="option">
                    Bn
                  </li>
                  <li data-value="3" className="option">
                    Us
                  </li>
                </ul>
                <div className="glo-icon">
                  <i className="fas fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="mode--toggle">
              <img src="./src/assets/img/sun.png" alt="" />
            </div> */}
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
          </div>
        </div>
      </header>
      {/* <!--==== Header top End  ====== --> */}
    </div>
  );
};

export default Header;

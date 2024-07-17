import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { logout } from "../../../redux/slice/authSlice";

const HeaderProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div>
      <div className="dd">
        <div className="dd-a d-flex align-items-center justify-content-between">
          <div className="cont d-flex align-items-center">
            <div className="icon">
              <img
                src="./src/assets/img/man.png"
                style={{ maxWidth: "30px" }}
                alt="man"
              />
            </div>
          </div>
        </div>
        <input type="checkbox" />
        <div className="dd-c">
          <ul>
            <li>
              <a onClick={handleLogOut}>
                <div className="icon">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </div>
                <span>LogOut</span>
              </a>
            </li>
            <li>
              <a href="efootball.html">
                <div className="icon">
                  <i className="icon-football"></i>
                </div>
                <span>eFootball</span>
              </a>
            </li>
            <li>
              <a href="football.html">
                <div className="icon">
                  <i className="icon-football"></i>
                </div>
                <span>bFootball</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.scss";

const User = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <Link to="/newUser">
          <button className="user-add-button">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="user-show-top-title">
              <div className="user-show-username">Anna Becker</div>
              <div className="user-show-occupation">Software Engineer</div>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-bottom-title">Account details</span>
            <div className="user-show-bottom-info">
              <PermIdentity className="user-show-bottom-icon" />
              <span className="user-show-bottom-info-title">annabeck99</span>
            </div>
            <div className="user-show-bottom-info">
              <CalendarToday className="user-show-bottom-icon" />
              <span className="user-show-bottom-info-title">10.12.1999</span>
            </div>
            <span className="user-show-bottom-title">Contact details</span>
            <div className="user-show-bottom-info">
              <PhoneAndroid className="user-show-bottom-icon" />
              <span className="user-show-bottom-info-title">+1 123 456 67</span>
            </div>
            <div className="user-show-bottom-info">
              <MailOutline className="user-show-bottom-icon" />
              <span className="user-show-bottom-info-title">
                annabeck99@gmail.com
              </span>
            </div>
            <div className="user-show-bottom-info">
              <LocationSearching className="user-show-bottom-icon" />
              <span className="user-show-bottom-info-title">New York, USA</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <div className="user-update-title">Edit</div>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="user-update-input"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  className="user-update-image"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="user-update-icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user-update-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;

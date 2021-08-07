import "./topbar.scss";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <span className="logo">DEL Admin</span>
        </div>
        <div className="top-right">
          <div className="topbar-icon-container">
            <NotificationsNone />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Language />
          </div>
          <div className="topbar-icon-container">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="top-avatar"
          />
        </div>
      </div>
    </div>
  );
}

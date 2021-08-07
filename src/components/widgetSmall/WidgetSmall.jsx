import "./widgetSmall.scss";
import { Visibility } from "@material-ui/icons";

export default function WidgetSmall() {
  return (
    <div className="widget-small">
      <span className="widget-small--title">Newly Joined Members</span>
      <ul className="widget-small--list">
        <li className="widget-small--list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widget-small--image"
          />
          <div className="widget-small--user">
            <span className="widget-small--user-username">Anna Keller</span>
            <span className="widget-small--user-occupation">
              Software Engineer
            </span>
          </div>
          <button className="widget-small--button">
            <Visibility className="widget-small--icon" /> Display
          </button>
        </li>
        <li className="widget-small--list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widget-small--image"
          />
          <div className="widget-small--user">
            <span className="widget-small--user-username">Anna Keller</span>
            <span className="widget-small--user-occupation">
              Software Engineer
            </span>
          </div>
          <button className="widget-small--button">
            <Visibility className="widget-small--icon" /> Display
          </button>
        </li>
        <li className="widget-small--list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widget-small--image"
          />
          <div className="widget-small--user">
            <span className="widget-small--user-username">Anna Keller</span>
            <span className="widget-small--user-occupation">
              Software Engineer
            </span>
          </div>
          <button className="widget-small--button">
            <Visibility className="widget-small--icon" /> Display
          </button>
        </li>
        <li className="widget-small--list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widget-small--image"
          />
          <div className="widget-small--user">
            <span className="widget-small--user-username">Anna Keller</span>
            <span className="widget-small--user-occupation">
              Software Engineer
            </span>
          </div>
          <button className="widget-small--button">
            <Visibility className="widget-small--icon" /> Display
          </button>
        </li>
        <li className="widget-small--list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widget-small--image"
          />
          <div className="widget-small--user">
            <span className="widget-small--user-username">Anna Keller</span>
            <span className="widget-small--user-occupation">
              Software Engineer
            </span>
          </div>
          <button className="widget-small--button">
            <Visibility className="widget-small--icon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}

import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.scss";
import { userData } from "../../dummyData";
import Chart from "../../components/chart/Chart";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid="true"
        dataKey="activeUser"
      />
      <div className="home-widgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

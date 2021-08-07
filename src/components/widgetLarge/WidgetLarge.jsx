import "./widgetLarge.scss";

export default function WidgetLarge() {
  return (
    <div className="widget-large">
      <h3 className="widget-large--title">Latest transactions</h3>
      <table className="widget-large--table">
        <tr className="widget-large--tr">
          <th className="widget-large--th">Customer</th>
          <th className="widget-large--th">Date</th>
          <th className="widget-large--th">Amount</th>
          <th className="widget-large--th">Status</th>
        </tr>
        <tr className="widget-large--tr">
          <td className="widget-large--user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widget-large--image"
            />
            <span className="widget-large--name">Susan Carol</span>
          </td>
          <td className="widget-large--date">2 Jun 2021</td>
          <td className="widget-large--amount">$122.00</td>
          <td className="widget-large--status">
            <button className="widget-large--button approved">Approved</button>
          </td>
        </tr>
        <tr className="widget-large--tr">
          <td className="widget-large--user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widget-large--image"
            />
            <span className="widget-large--name">Susan Carol</span>
          </td>
          <td className="widget-large--date">2 Jun 2021</td>
          <td className="widget-large--amount">$122.00</td>
          <td className="widget-large--status">
            <button className="widget-large--button declined">Declined</button>
          </td>
        </tr>
        <tr className="widget-large--tr">
          <td className="widget-large--user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widget-large--image"
            />
            <span className="widget-large--name">Susan Carol</span>
          </td>
          <td className="widget-large--date">2 Jun 2021</td>
          <td className="widget-large--amount">$122.00</td>
          <td className="widget-large--status">
            <button className="widget-large--button pending">Pending</button>
          </td>
        </tr>
        <tr className="widget-large--tr">
          <td className="widget-large--user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widget-large--image"
            />
            <span className="widget-large--name">Susan Carol</span>
          </td>
          <td className="widget-large--date">2 Jun 2021</td>
          <td className="widget-large--amount">$122.00</td>
          <td className="widget-large--status">
            <button className="widget-large--button approved">Approved</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

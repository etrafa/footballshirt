import { useState } from "react";
import { Link } from "react-router-dom";
import leaugeOneData from "./LeaugeOneData";
import "./Leauges.css";

const LeaugeOne = () => {
  const [showItem, setShowItem] = useState(6);
  const [visible, setVisible] = useState(true);

  const showMoreItems = () => {
    setShowItem((previous) => previous + 6);
    if (showItem >= 6) {
      setVisible(false);
    }
  };

  return (
    <>
      <div className="sales__container">
        {leaugeOneData.slice(0, showItem).map((sales) => {
          const { id, text, image, price, route } = sales;
          return (
            <div key={id}>
              <Link to={route}>
                <img src={image} alt="" />
              </Link>
              <Link to={route}>
                <p className="tshirt__names">{text}</p>
              </Link>
              <p className="best__seller__price">{price}</p>
            </div>
          );
        })}
      </div>
      <button
        className={
          visible ? "show__more__button" : "show__more__button-deactive"
        }
        onClick={showMoreItems}
      >
        Show More
      </button>
    </>
  );
};

export default LeaugeOne;

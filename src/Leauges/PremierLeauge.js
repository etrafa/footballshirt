import premierLeaugeData from "./PremierLeaugeData";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Leauges.css";

const PremierLeauge = () => {
  const [showItem, setShowItem] = useState(6);
  const [visible, setVisible] = useState(true);

  const showMoreItems = () => {
    setShowItem((prevValue) => prevValue + 6);
    if (showItem >= 50) {
      setVisible(false);
    }
  };

  return (
    <>
      <div className="sales__container">
        {premierLeaugeData.slice(0, showItem).map((sales) => {
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

export default PremierLeauge;

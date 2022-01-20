import nationalTeamData from "./NationalTeamData";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Leauges.css";

const NationalTeam = () => {
  const [showItem, setShowItem] = useState(6);
  const [visible, setVisible] = useState(true);

  const showMoreItems = () => {
    setShowItem((prevValue) => prevValue + 6);
    if (showItem >= 38) {
      setVisible(false);
    }
  };

  return (
    <>
      <div className="sales__container">
        {nationalTeamData.slice(0, showItem).map((sales) => {
          const { id, text, image, route } = sales;
          return (
            <div key={id}>
              <Link to={route}>
                <img src={image} alt="" />
              </Link>
              <Link to={route}>
                <p className="tshirt__names">{text}</p>
              </Link>
              <p className="best__seller__price">$ 50.00</p>
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

export default NationalTeam;

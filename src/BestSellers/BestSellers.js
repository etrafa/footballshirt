import React from "react";
import "./bestSellers.css";
import bestSellersData from "./bestSellersData";
import "./bestSellers.css";
import { Link } from "react-router-dom";

const HomePageSales = () => {
  return (
    <React.Fragment>
      <div className="sales__container">
        {bestSellersData.map((sales) => {
          const { id, text, image, route } = sales;
          return (
            <div key={id}>
              <Link to={route}>
                <img src={image} alt="" />
              </Link>
              <Link to={route}>{text}</Link>
              <p className="best__seller__price">$ 50.00</p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default HomePageSales;

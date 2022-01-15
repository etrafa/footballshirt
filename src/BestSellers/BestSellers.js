import React from "react";
import "./bestSellers.css";
import bestSellersData from "./bestSellersData";
import "./bestSellers.css";

const HomePageSales = () => {
  return (
    <React.Fragment>
      <div className="sales__container">
        {bestSellersData.map((sales) => {
          const { id, text, image, route } = sales;
          return (
            <div key={id}>
              <img src={image} alt="" />
              <div className="bestseller-price-container">
                <p>{text}</p>
                <span className="best__seller__price">$ 50.00</span>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default HomePageSales;

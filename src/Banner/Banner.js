import { useNavigate } from "react-router-dom";
import "./Banner.css";
import LiverpoolAsset from "./banner-asset/liverpool.png";
import ManCityAsset from "./banner-asset/mancity.png";
import ManUnitedAsset from "./banner-asset/manunited.png";
import ArsenalAsset from "./banner-asset/arsenal.png";
import BestSellers from "../BestSellers/BestSellers";

const Banner = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="banner__container">
        <img
          onClick={() => {
            navigate("/liverpool-sales");
          }}
          src={LiverpoolAsset}
          alt="liverpool-banner"
        />
        <img
          onClick={() => {
            navigate("/mancity-sales");
          }}
          src={ManCityAsset}
          alt="mancity-banner"
        />
        <img
          onClick={() => {
            navigate("/manunited-sales");
          }}
          src={ManUnitedAsset}
          alt="manunited-banner"
        />
        <img
          onClick={() => {
            navigate("/arsenal-sales");
          }}
          src={ArsenalAsset}
          alt="arsenal-banner"
        />
      </div>
      <BestSellers />
    </>
  );
};

export default Banner;

import "./Banner.css";
import LiverpoolAsset from "./banner-asset/liverpool.png";
import ManCityAsset from "./banner-asset/mancity.png";
import ManUnitedAsset from "./banner-asset/manunited.png";
import ArsenalAsset from "./banner-asset/arsenal.png";

const Banner = () => {
  return (
    <div className="banner__container">
      <img src={LiverpoolAsset} alt="" />
      <img src={ManCityAsset} alt="" />
      <img src={ManUnitedAsset} alt="" />
      <img src={ArsenalAsset} alt="" />
    </div>
  );
};

export default Banner;

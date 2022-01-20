import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import ScrollTop from "./ScrollToTop";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import LiverpoolSales from "./Pages/LiverpoolSales";
import ManCitySales from "./Pages/ManCitySales";
import ManUnitedSales from "./Pages/ManUnitedSales";
import ArsenalSales from "./Pages/ArsenalSales";
import AboutUs from "./Footer/AboutUs";
import DeliveryGuarantee from "./Footer/Delivery";
import PrivacyPolicy from "./Footer/Privacy";
import TermsOfUse from "./Footer/Terms";
import SizeChart from "./Footer/SizeChart";
import FaqHelp from "./Footer/Faq-help";
import Shipping from "./Footer/Shipping";
import ReturnPolicy from "./Footer/ReturnPolicy";
import PaymentMethod from "./Footer/PaymentMehdod";
import Login from "./Footer/Login";
import SignUp from "./Footer/CreateAccount";
import MyAccount from "./Footer/Login";
import MyOrders from "./Footer/Login";
import ForgotPassword from "./Footer/ForgetPassword";
import AjaxTshirtThird from "./BestSellers/Ajax-tshirt-third";
import LionelTshirtAway from "./BestSellers/Lionel-tshirt-away";
import LionelTshirtHome from "./BestSellers/Lionel-tshirt-home";
import BarcelonaTshirtAway from "./BestSellers/Barcelona-tshirt-away";
import ManUnitedTshirtHome from "./BestSellers/ManUnited-tshirt-home";
import InterMilanTshirtHome from "./BestSellers/InterMilan-tshirt-home";
import BayernMunichTshirtAway from "./BestSellers/BayernMunichTshirtAway";
import PsgTshirtHome from "./BestSellers/Psg-tshirt-home";
import ChelseaTshirtHome from "./BestSellers/Chelsea-tshirt-home";
import TottenhamTshirtAway from "./BestSellers/Tottenham-tshirt-away";
import NationalTeam from "./Leauges/NationalTeam";
import PremierLeauge from "./Leauges/PremierLeauge";
import BundesLiga from "./Leauges/BundesLiga";
import LaLiga from "./Leauges/LaLiga";
import LeaugeOne from "./Leauges/LeuageOne";
import OtherClub from "./Leauges/OtherClub";
import MexicoShirt from "./Leauges/NationalTeam-Pages/MexicoShirt";
import BrazilHome from "./Leauges/NationalTeam-Pages/BrazilHome";
import BrazilAway from "./Leauges/NationalTeam-Pages/BrazilAway";
import ColombiaAway from "./Leauges/NationalTeam-Pages/ColombiaAway";
import ArgentinaAway from "./Leauges/NationalTeam-Pages/ArgentinaAway";
import ArgentinaHome from "./Leauges/NationalTeam-Pages/ArgentinaHome";
import KroosHome from "./Leauges/NationalTeam-Pages/KroosHome";
import KroosAway from "./Leauges/NationalTeam-Pages/KroosAway";
import RonaldoHome from "./Leauges/NationalTeam-Pages/RonaldoHome";
import RonaldoAway from "./Leauges/NationalTeam-Pages/RonaldoAway";
import DepayHome from "./Leauges/NationalTeam-Pages/DepayHome";
import DepayAway from "./Leauges/NationalTeam-Pages/DepayAway";
import DeJongHome from "./Leauges/NationalTeam-Pages/DeJongHome";
import DeJongAway from "./Leauges/NationalTeam-Pages/DeJongAway";
import MbappeHome from "./Leauges/NationalTeam-Pages/MbappeHome";
import MbappeAway from "./Leauges/NationalTeam-Pages/MbappeAway";
import GriezmannHome from "./Leauges/NationalTeam-Pages/GriezmannHome";
import GriezmannAway from "./Leauges/NationalTeam-Pages/GriezmannAway";
import Pogba from "./Leauges/NationalTeam-Pages/PogbaHome";
import PogbaHome from "./Leauges/NationalTeam-Pages/PogbaHome";
import ModricHome from "./Leauges/NationalTeam-Pages/ModricHome";
import DeBruyneHome from "./Leauges/NationalTeam-Pages/DeBruyneHome";
import DeBruyneAway from "./Leauges/NationalTeam-Pages/DeBruyneAway";
import HarryKaneHome from "./Leauges/NationalTeam-Pages/HarryKaneHome";
import HarryKaneAway from "./Leauges/NationalTeam-Pages/HarryKaneAway";
import ItalyHome from "./Leauges/NationalTeam-Pages/ItalyHome";
import ItalyAway from "./Leauges/NationalTeam-Pages/ItalyAway";
import SwedenHome from "./Leauges/NationalTeam-Pages/SwedenHome";
import SwedenAway from "./Leauges/NationalTeam-Pages/SwedenAway";
import PolandHome from "./Leauges/NationalTeam-Pages/PolandHome";
import PortugalHome from "./Leauges/NationalTeam-Pages/PortugalHome";
import PortugalAway from "./Leauges/NationalTeam-Pages/PortugalAway";
import GermanyHome from "./Leauges/NationalTeam-Pages/GermanyHome";
import GermanyAway from "./Leauges/NationalTeam-Pages/GermanyAway";
import NetherlandHome from "./Leauges/NationalTeam-Pages/NetherlandHome";
import NetherlandAway from "./Leauges/NationalTeam-Pages/NetherlandAway";
import SpainHome from "./Leauges/NationalTeam-Pages/SpainHome";
import SpainAway from "./Leauges/NationalTeam-Pages/SpainAway";
import FranceHome from "./Leauges/NationalTeam-Pages/FranceHome";
import FranceAway from "./Leauges/NationalTeam-Pages/FranceAway";
import CroatiaHome from "./Leauges/NationalTeam-Pages/CroatiaHome";
import CroatiaAway from "./Leauges/NationalTeam-Pages/CroatiaAway";
import BelgiumHome from "./Leauges/NationalTeam-Pages/BelgiumHome";
import BelgiumAway from "./Leauges/NationalTeam-Pages/BelgiumAway";
import EnglandHome from "./Leauges/NationalTeam-Pages/EnglandHome";
import EnglandAway from "./Leauges/NationalTeam-Pages/EnglandAway";
import ArsenalAwayShirt from "./Leauges/PremierLeauge-Pages/ArsenalAwayShirt";
import ArsenalAwayKids from "./Leauges/PremierLeauge-Pages/ArsenalAwayKids";
import ChelseaHomeWomen from "./Leauges/PremierLeauge-Pages/ChelseaHomeWomen";
import ChelseaHomeShirt from "./Leauges/PremierLeauge-Pages/ChelseaHomeShirt";
import ChelseaHomeKids from "./Leauges/PremierLeauge-Pages/ChelseaHomeKids";
import LiverpoolHomeWomen from "./Leauges/PremierLeauge-Pages/LiverpoolHomeWomen";
import LiverpoolHomeKids from "./Leauges/PremierLeauge-Pages/LiverpoolHomeKids";
import LiverpoolHomeShirt from "./Leauges/PremierLeauge-Pages/LiverpoolHomeShirt";
import ArsenalThirdLong from "./Leauges/PremierLeauge-Pages/ArsenalThirdLong";
import ArsenalThirdShirt from "./Leauges/PremierLeauge-Pages/ArsenalThirdShirt";
import ArsenalThirdShort from "./Leauges/PremierLeauge-Pages/ArsenalThirdShort";
import ArsenalAwayLong from "./Leauges/PremierLeauge-Pages/ArsenalAwayLong";
import ArsenalAwayShort from "./Leauges/PremierLeauge-Pages/ArsenalAwayShort";
import ArsenalHomeLong from "./Leauges/PremierLeauge-Pages/ArsenalHomeLong";
import ArsenalHomeShirt from "./Leauges/PremierLeauge-Pages/ArsenalHomeShirt";
import ArsenalHomeWomen from "./Leauges/PremierLeauge-Pages/ArsenalHomeWomen";
import ArsenalHomeShort from "./Leauges/PremierLeauge-Pages/ArsenalHomeShort";
import TottenhamHomeShirt from "./Leauges/PremierLeauge-Pages/TottenhamHomeShirt";
import ChelseaThirdShirt from "./Leauges/PremierLeauge-Pages/ChelseaThirdShirt";
import ChelseaThirdKids from "./Leauges/PremierLeauge-Pages/ChelseaThirdKids";
import ChelseaThirdShort from "./Leauges/PremierLeauge-Pages/ChelseaThirdShort";
import ChelseaAwayShirt from "./Leauges/PremierLeauge-Pages/ChelseaAwayShirt";
import ChelseaAwayKids from "./Leauges/PremierLeauge-Pages/ChelseaAwayKids";
import ChelseaAwayShort from "./Leauges/PremierLeauge-Pages/ChelseaAwayShort";
import ChelseaHomeShort from "./Leauges/PremierLeauge-Pages/ChelseaHomeShort";
import LiverpoolThirdShirt from "./Leauges/PremierLeauge-Pages/LiverpoolThirdShirt";
import LiverpoolThirdWomen from "./Leauges/PremierLeauge-Pages/LiverpoolThirdWomen";
import LiverpoolThirdKids from "./Leauges/PremierLeauge-Pages/LiverpoolThirdKids";
import LiverpoolThirdShorts from "./Leauges/PremierLeauge-Pages/LiverpoolThirdShort";
import LiverpoolHomeShorts from "./Leauges/PremierLeauge-Pages/LiverpoolHomeShort";
import LiverpoolAwayShorts from "./Leauges/PremierLeauge-Pages/LiverpoolAwayShort";
import LiverpoolAwayShirt from "./Leauges/PremierLeauge-Pages/LiverpoolAwayShirt";
import LiverpoolAwayKids from "./Leauges/PremierLeauge-Pages/LiverpoolAwayKids";
import ManUnitedThirdLong from "./Leauges/PremierLeauge-Pages/ManUnitedThirdLong";
import ManUnitedAwayLong from "./Leauges/PremierLeauge-Pages/ManUnitedAwayLong";
import ManUnitedThirdShirt from "./Leauges/PremierLeauge-Pages/ManUnitedThirdShirt";
import ManUnitedAwayShirt from "./Leauges/PremierLeauge-Pages/ManUnitedAwayShirt";
import ManUnitedThirdShorts from "./Leauges/PremierLeauge-Pages/ManUnitedThirdShorts";
import ManUnitedAwayShorts from "./Leauges/PremierLeauge-Pages/ManUnitedAwayShorts";
import ManUnitedHomeShorts from "./Leauges/PremierLeauge-Pages/ManUnitedHomeShorts";
import ManUnitedHomeLong from "./Leauges/PremierLeauge-Pages/ManUnitedHomeLong";
import ManUnitedHomeShirt from "./Leauges/PremierLeauge-Pages/ManUnitedHomeShirt";
import ManCityThirdShirt from "./Leauges/PremierLeauge-Pages/ManCityThirdShirt";
import ManCityThirdShorts from "./Leauges/PremierLeauge-Pages/ManCityThirdShort";
import ManCityAwayShorts from "./Leauges/PremierLeauge-Pages/ManCityAwayShort";
import ManCityAwayShirt from "./Leauges/PremierLeauge-Pages/ManCityAwayShirt";
import ManCityHomeShorts from "./Leauges/PremierLeauge-Pages/ManCityHomeShort";
import ManCityHomeShirt from "./Leauges/PremierLeauge-Pages/ManCityHomeShirt";
import TottenhamThirdShirt from "./Leauges/PremierLeauge-Pages/TottenhamThirdShirt";
import TottenhamThirdShort from "./Leauges/PremierLeauge-Pages/TottenhamThirdShort";
import TottenhamAwayShirt from "./Leauges/PremierLeauge-Pages/TottenhamAwayShirt";
import TottenhamAwayShort from "./Leauges/PremierLeauge-Pages/TottenhamAwayShort";
import TottenhamHomeShort from "./Leauges/PremierLeauge-Pages/TottenhamHomeShort";
import WesthamThirdShirt from "./Leauges/PremierLeauge-Pages/WesthamThirdShirt";
import WesthamAwayShirt from "./Leauges/PremierLeauge-Pages/WesthamAwayShirt";
import WesthamHomeShirt from "./Leauges/PremierLeauge-Pages/WesthamHomeShirt";
import WesthamAwayShorts from "./Leauges/PremierLeauge-Pages/WesthamAwayShort";
import WesthamHomeShorts from "./Leauges/PremierLeauge-Pages/WesthamHomeShort";
import BayernThirdShirt from "./Leauges/Bundesliga-Pages/BayernThirdShirt";
import BayernAwayKids from "./Leauges/Bundesliga-Pages/BayernAwayKids";
import DortmundHomeShirt from "./Leauges/Bundesliga-Pages/DortmundHomeShirt";
import LeipzigHomeShirt from "./Leauges/Bundesliga-Pages/LeipzigHomeShirt";
import BayernThirdShort from "./Leauges/Bundesliga-Pages/BayernThirdShort";
import BayernHomeShirt from "./Leauges/Bundesliga-Pages/BayernHomeShirt";
import BayernHomeLong from "./Leauges/Bundesliga-Pages/BayernHomeLong";
import BayernHomeWomen from "./Leauges/Bundesliga-Pages/BayernHomeWomen";
import BayernHomeShort from "./Leauges/Bundesliga-Pages/BayernHomeShort";
import BayernAwayShort from "./Leauges/Bundesliga-Pages/BayernAwayShort";
import DortmundThirdShirt from "./Leauges/Bundesliga-Pages/DortmundThirdShirt";
import DortmundThirdKids from "./Leauges/Bundesliga-Pages/DortmundThirdKids";
import DortmundThirdShort from "./Leauges/Bundesliga-Pages/DortmundThirdShort";
import DortmundAwayShirt from "./Leauges/Bundesliga-Pages/DortmundAwayShirt";
import DortmundAwayShort from "./Leauges/Bundesliga-Pages/DortmunAwayShort";
import DortmundHomeShort from "./Leauges/Bundesliga-Pages/DortmundHomeShort";
import LeipzigThirdShirt from "./Leauges/Bundesliga-Pages/LeipzigThirdShirt";
import LeipzigAwayShirt from "./Leauges/Bundesliga-Pages/LeipzigAwayShirt";
import AtleticoMadridAwayShirt from "./Leauges/LaLiga-Pages/AtleticoMadridAwayShirt";
import AtleticoMadridAwayShorts from "./Leauges/LaLiga-Pages/AtleticoMadridAwayShorts";
import AtleticoMadridHomeShirt from "./Leauges/LaLiga-Pages/AtleticoMadridHomeShirt";
import AtleticoMadridHomeShorts from "./Leauges/LaLiga-Pages/AtleticoMadridHomeShorts";
import AtleticoMadridThirdShirt from "./Leauges/LaLiga-Pages/AtleticoMadridThirdShirt";
import BarcelonaAwayKids from "./Leauges/LaLiga-Pages/BarcelonaAwayKids";
import BarcelonaAwayShirt from "./Leauges/LaLiga-Pages/BarcelonaAwayShirt";
import BarcelonaAwayShorts from "./Leauges/LaLiga-Pages/BarcelonaAwayShorts";
import BarcelonaHomeShirt from "./Leauges/LaLiga-Pages/BarcelonaHomeShirt";
import BarcelonaHomeShorts from "./Leauges/LaLiga-Pages/BarcelonaHomeShorts";
import BarcelonaThirdShirt from "./Leauges/LaLiga-Pages/BarcelonaThirdShirt";
import BarcelonaThirdShort from "./Leauges/LaLiga-Pages/BarcelonaThirdShort";
import RealMadridAwayLong from "./Leauges/LaLiga-Pages/RealMadridAwayLong";
import RealMadridAwayShirt from "./Leauges/LaLiga-Pages/RealMadridAwayShirt";
import RealMadridAwayShorts from "./Leauges/LaLiga-Pages/RealMadridAwayShorts";
import RealMadridHomeKids from "./Leauges/LaLiga-Pages/RealMadridHomeKids";
import RealMadridHomeLong from "./Leauges/LaLiga-Pages/RealMadridHomeLong";
import RealMadridHome from "./Leauges/LaLiga-Pages/RealMadridHomeShirt";
import RealMadridHomeShorts from "./Leauges/LaLiga-Pages/RealMadridHomeShorts";
import RealMadridThirdShirt from "./Leauges/LaLiga-Pages/RealMadridThirdShirt";
import RealMadridThirdShorts from "./Leauges/LaLiga-Pages/RealMadridThirdShorts";
import BarcelonaThirdShorts from "./Leauges/LaLiga-Pages/BarcelonaThirdShort";
import PsgHomeWomen from "./Leauges/LigueOne-Pages/PsgHomeWomen";
import PsgHomeKids from "./Leauges/LigueOne-Pages/PsgHomeKids";
import PsgThirdKids from "./Leauges/LigueOne-Pages/PsgThirdKids";
import PsgThirdShirt from "./Leauges/LigueOne-Pages/PsgThirdShirt";
import PsgAwayShirt from "./Leauges/LigueOne-Pages/PsgAwayShirt";
import PsgThirdShort from "./Leauges/LigueOne-Pages/PsgThirdShort";
import PsgAwayShort from "./Leauges/LigueOne-Pages/PsgAwayShort";
import PsgHomeShort from "./Leauges/LigueOne-Pages/PsgHomeShort";
import AjaxAwayShirt from "./Leauges/OtherClub-Pages/AjaxAwayShirt";
import CelticAwayShirt from "./Leauges/OtherClub-Pages/CelticAwayShirt";
import CelticHomeShirt from "./Leauges/OtherClub-Pages/CelticHomeShirt";
import PortoThirdShirt from "./Leauges/OtherClub-Pages/PortoThirdShirt";
import PortoAwayShirt from "./Leauges/OtherClub-Pages/PortoAwayShirt";
import PortoHomeShirt from "./Leauges/OtherClub-Pages/PortoHomeShirt";
import AjaxThirdKids from "./Leauges/OtherClub-Pages/AjaxThirdkids";
import AjaxThirdShort from "./Leauges/OtherClub-Pages/AjaxThirdShort";
import AjaxAwayShort from "./Leauges/OtherClub-Pages/AjaxAwayShort";
import AjaxHomeShort from "./Leauges/OtherClub-Pages/AjaxHomeShort";
import AjaxHomeShirt from "./Leauges/OtherClub-Pages/AjaxHomeShirt";
import BenficaThirdShirt from "./Leauges/OtherClub-Pages/BenficaThirdShirt";
import BenficaAwayShirt from "./Leauges/OtherClub-Pages/BenficaAwayShirt";
import BenficaHomeShirt from "./Leauges/OtherClub-Pages/BenficaHomeShirt";
import BenficaAwayShort from "./Leauges/OtherClub-Pages/BenficaAwayShort";
import BenficaHomeShort from "./Leauges/OtherClub-Pages/BenficaHomeShort";

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/footballshirt" element={<Banner />} />
          <Route path="/liverpool-sales" element={<LiverpoolSales />} />
          <Route path="/mancity-sales" element={<ManCitySales />} />
          <Route path="/manunited-sales" element={<ManUnitedSales />} />
          <Route path="/arsenal-sales" element={<ArsenalSales />} />

          {/* SHIRTS */}
          <Route
            path="/ajax-tshirt-21/22-third"
            element={<AjaxTshirtThird />}
          />
          <Route
            path="psg/lionel_messi-21/22-away"
            element={<LionelTshirtAway />}
          />
          <Route
            path="psg/lionel_messi-21/22-home"
            element={<LionelTshirtHome />}
          />
          <Route
            path="barcelona-tshirt-21/22-away"
            element={<BarcelonaTshirtAway />}
          />
          <Route
            path="manunited-tshirt-21/22-home"
            element={<ManUnitedTshirtHome />}
          />
          <Route
            path="intermilan-tshirt-21/22-home"
            element={<InterMilanTshirtHome />}
          />
          <Route
            path="bayern-munich-tshirt-21/22-away"
            element={<BayernMunichTshirtAway />}
          />
          <Route path="psg-tshirt-21/22-home" element={<PsgTshirtHome />} />
          <Route
            path="chelsea-tshirt-21/22-home"
            element={<ChelseaTshirtHome />}
          />
          <Route
            path="tottenham-tshirt-21/22-away"
            element={<TottenhamTshirtAway />}
          />
          <Route path="/national-team" element={<NationalTeam />} />
          <Route path="/premier-leauge" element={<PremierLeauge />} />
          <Route path="/bundesliga" element={<BundesLiga />} />
          <Route path="/laliga-leauge" element={<LaLiga />} />
          <Route path="/ligue-one" element={<LeaugeOne />} />
          <Route path="/other-clubs" element={<OtherClub />} />

          {/* NATIONAL TEAM */}
          <Route path="/mexico-tshirt-21/22-home" element={<MexicoShirt />} />
          <Route path="/brazil-tshirt-21/22-home" element={<BrazilHome />} />
          <Route path="/brazil-tshirt-21/22-away" element={<BrazilAway />} />
          <Route
            path="/colombia-tshirt-21/22-home"
            element={<ColombiaAway />}
          />
          <Route
            path="/argentina-tshirt-21/22-away"
            element={<ArgentinaAway />}
          />
          <Route
            path="/argentina-tshirt-21/22-home"
            element={<ArgentinaHome />}
          />
          <Route
            path="/germany-toni-kross-tshirt-20/21-home"
            element={<KroosHome />}
          />
          <Route
            path="/germany-toni-kross-tshirt-20/21-away"
            element={<KroosAway />}
          />
          <Route
            path="/portugal-ronaldo-tshirt-20/21-home"
            element={<RonaldoHome />}
          />
          <Route
            path="/portugal-ronaldo-tshirt-20/21-away"
            element={<RonaldoAway />}
          />
          <Route
            path="/netherland-depay-tshirt-20/21-home"
            element={<DepayHome />}
          />
          <Route
            path="/netherland-depay-tshirt-20/21-away"
            element={<DepayAway />}
          />
          <Route
            path="/netherland-deJong-tshirt-20/21-home"
            element={<DeJongHome />}
          />
          <Route
            path="/netherland-deJong-tshirt-20/21-away"
            element={<DeJongAway />}
          />
          <Route
            path="/france-mbappe-tshirt-20/21-home"
            element={<MbappeHome />}
          />
          <Route
            path="/france-mbappe-tshirt-20/21-away"
            element={<MbappeAway />}
          />
          <Route
            path="/france-griezmann-tshirt-20/21-home"
            element={<GriezmannHome />}
          />
          <Route
            path="/france-griezmann-tshirt-20/21-away"
            element={<GriezmannAway />}
          />
          <Route
            path="/france-pogba-tshirt-20/21-home"
            element={<PogbaHome />}
          />
          <Route
            path="/croatia-modric-tshirt-20/21-home"
            element={<ModricHome />}
          />
          <Route
            path="/belgium-debruyne-tshirt-20/21-home"
            element={<DeBruyneHome />}
          />
          <Route
            path="/belgium-debruyne-tshirt-20/21-away"
            element={<DeBruyneAway />}
          />
          <Route
            path="/england-harry-kane-tshirt-20/21-home"
            element={<HarryKaneHome />}
          />
          <Route
            path="/england-harry-kane-tshirt-20/21-away"
            element={<HarryKaneAway />}
          />
          <Route path="/italy-tshirt-20/21-home" element={<ItalyHome />} />
          <Route path="/italy-tshirt-21/22-away" element={<ItalyAway />} />
          <Route path="/sweden-tshirt-20/21-home" element={<SwedenHome />} />
          <Route path="/sweden-tshirt-20/21-away" element={<SwedenAway />} />
          <Route path="/poland-tshirt-20/21-home" element={<PolandHome />} />
          <Route
            path="/portugal-tshirt-20/21-home"
            element={<PortugalHome />}
          />
          <Route
            path="/portugal-tshirt-20/21-away"
            element={<PortugalAway />}
          />
          <Route path="/germany-tshirt-20/21-home" element={<GermanyHome />} />
          <Route path="/germany-tshirt-20/21-away" element={<GermanyAway />} />
          <Route
            path="/netherland-tshirt-20/21-home"
            element={<NetherlandHome />}
          />
          <Route
            path="netherland-tshirt-20/21-away"
            element={<NetherlandAway />}
          />
          <Route path="/spain-tshirt-20/21-home" element={<SpainHome />} />
          <Route path="/spain-tshirt-20/21-away" element={<SpainAway />} />
          <Route path="/france-tshirt-20/21-home" element={<FranceHome />} />
          <Route path="/france-tshirt-20/21-away" element={<FranceAway />} />
          <Route path="/croatia-tshirt-20/21-home" element={<CroatiaHome />} />
          <Route path="croatia-tshirt-20/21-away" element={<CroatiaAway />} />
          <Route path="/belgium-tshirt-20/21-home" element={<BelgiumHome />} />
          <Route path="/belgium-tshirt-20/21-away" element={<BelgiumAway />} />
          <Route path="/england-tshirt-20/21-home" element={<EnglandHome />} />
          <Route path="/england-tshirt-20/21-away" element={<EnglandAway />} />

          {/* PREMIER LEAUGE */}
          <Route
            path="/arsenal-tshirt-21/22-away"
            element={<ArsenalAwayShirt />}
          />
          <Route
            path="/arsenal-kids-tshirt-21/22-away"
            element={<ArsenalAwayKids />}
          />
          <Route
            path="/chealse-women-tshirt-21/22-home"
            element={<ChelseaHomeWomen />}
          />
          <Route
            path="/chealse-home-tshirt-21/22-home"
            element={<ChelseaHomeShirt />}
          />
          <Route
            path="/chealse-home-kids-tshirt-21/22-home"
            element={<ChelseaHomeKids />}
          />
          <Route
            path="/liverpool-home-women-tshirt-21/22-home"
            element={<LiverpoolHomeWomen />}
          />
          <Route
            path="/liverpool-home-kids-tshirt-21/22-home"
            element={<LiverpoolHomeKids />}
          />
          <Route
            path="/liverpool-home-tshirt-21/22-home"
            element={<LiverpoolHomeShirt />}
          />
          <Route
            path="/arsenal-third-tshirt-long-sleeve-21/22-home"
            element={<ArsenalThirdLong />}
          />
          <Route
            path="/arsenal-third-tshirt-21/22"
            element={<ArsenalThirdShirt />}
          />
          <Route
            path="/arsenal-third-football-short-21/22"
            element={<ArsenalThirdShort />}
          />
          <Route
            path="/arsenal-away-football-shirt-long-21/22"
            element={<ArsenalAwayLong />}
          />
          <Route
            path="/arsenal-away-football-short-21/22"
            element={<ArsenalAwayShort />}
          />
          <Route
            path="/arsenal-home-football-short-21/22"
            element={<ArsenalHomeLong />}
          />
          <Route
            path="/arsenal-home-tshirt-21/22"
            element={<ArsenalHomeShirt />}
          />
          <Route
            path="/arsenal-home-women-tshirt-21/22"
            element={<ArsenalHomeWomen />}
          />
          <Route
            path="/arsenal-football-home-short-21/22"
            element={<ArsenalHomeShort />}
          />
          <Route
            path="/tottenham-home-tshirt-21/22"
            element={<TottenhamHomeShirt />}
          />
          <Route
            path="/chelsea-third-tshirt-21/22"
            element={<ChelseaThirdShirt />}
          />
          <Route
            path="/chelsea-third-kids-tshirt-21/22"
            element={<ChelseaThirdKids />}
          />
          <Route
            path="/chelsea-third-tshorts-21/22"
            element={<ChelseaThirdShort />}
          />
          <Route
            path="/chelsea-away-tshirt-21/22"
            element={<ChelseaAwayShirt />}
          />
          <Route
            path="/chelsea-away-kids-tshirt-21/22"
            element={<ChelseaAwayKids />}
          />
          <Route
            path="/chelsea-away-shorts-21/22"
            element={<ChelseaAwayShort />}
          />
          <Route
            path="/chelsea-home-shorts-21/22"
            element={<ChelseaHomeShort />}
          />
          <Route
            path="/liverpool-third-tshirt-21/22"
            element={<LiverpoolThirdShirt />}
          />
          <Route
            path="/liverpool-third-women-tshirt-21/22"
            element={<LiverpoolThirdWomen />}
          />
          <Route
            path="/liverpool-third-kids-tshirt-21/22"
            element={<LiverpoolThirdKids />}
          />
          <Route
            path="/liverpool-third-shorts-21/22"
            element={<LiverpoolThirdShorts />}
          />
          <Route
            path="/liverpool-home-shorts-21/22"
            element={<LiverpoolHomeShorts />}
          />
          <Route
            path="/liverpool-away-shorts-21/22"
            element={<LiverpoolAwayShorts />}
          />
          <Route
            path="/liverpool-away-tshirt-21/22"
            element={<LiverpoolAwayShirt />}
          />
          <Route
            path="/liverpool-away-kids-tshirt-21/22"
            element={<LiverpoolAwayKids />}
          />
          <Route
            path="/manunited-third-tshirt-long-sleeve-21/22-home"
            element={<ManUnitedThirdLong />}
          />
          <Route
            path="/manunited-away-tshirt-long-sleeve-21/22-home"
            element={<ManUnitedAwayLong />}
          />
          <Route
            path="/manunited-third-tshirt-21/22"
            element={<ManUnitedThirdShirt />}
          />
          <Route
            path="/manunited-third-shorts-21/22"
            element={<ManUnitedThirdShorts />}
          />
          <Route
            path="/manunited-away-tshirts-21/22"
            element={<ManUnitedAwayShirt />}
          />
          <Route
            path="/manunited-away-shorts-21/22"
            element={<ManUnitedAwayShorts />}
          />
          <Route
            path="/manunited-home-shorts-21/22"
            element={<ManUnitedHomeShorts />}
          />
          <Route
            path="/manunited-third-long-sleeve-21/22-home"
            element={<ManUnitedHomeLong />}
          />
          <Route
            path="/manunited-third-tshirt-21/22-home"
            element={<ManUnitedHomeShirt />}
          />
          <Route
            path="/mancity-third-tshirt-home-21/22"
            element={<ManCityThirdShirt />}
          />
          <Route
            path="/mancity-third-shorts-21/22"
            element={<ManCityThirdShorts />}
          />
          <Route
            path="/mancity-away-shorts-21/22"
            element={<ManCityAwayShorts />}
          />
          <Route
            path="/mancity-away-tshirt-21/22"
            element={<ManCityAwayShirt />}
          />
          <Route
            path="/mancity-home-shorts-21/22"
            element={<ManCityHomeShorts />}
          />
          <Route
            path="/mancity-home-tshirt-21/22"
            element={<ManCityHomeShirt />}
          />
          <Route
            path="/tottenham-third-tshirt-21/22"
            element={<TottenhamThirdShirt />}
          />
          <Route
            path="/tottenham-third-shorts-21/22"
            element={<TottenhamThirdShort />}
          />
          <Route
            path="/tottenham-away-tshirt-21/22"
            element={<TottenhamAwayShirt />}
          />
          <Route
            path="/tottenham-away-shorts-21/22"
            element={<TottenhamAwayShort />}
          />
          <Route
            path="/tottenham-home-shorts-21/22"
            element={<TottenhamHomeShort />}
          />
          <Route
            path="/westham-third-tshirt-21/22"
            element={<WesthamThirdShirt />}
          />
          <Route
            path="/westham-away-tshirt-21/22"
            element={<WesthamAwayShirt />}
          />
          <Route
            path="/westham-away-shorts-21/22"
            element={<WesthamAwayShorts />}
          />
          <Route
            path="/westham-home-tshirt-21/22"
            element={<WesthamHomeShirt />}
          />
          <Route
            path="/westham-home-shorts-21/22"
            element={<WesthamHomeShorts />}
          />
          <Route
            path="/bayern-munich-kids-tshirt-21/22-away"
            element={<BayernAwayKids />}
          />
          <Route
            path="/borussia-dortmund-tshirt-21/22-home"
            element={<DortmundHomeShirt />}
          />
          <Route
            path="/leipzig-tshirt-21/22-home"
            element={<LeipzigHomeShirt />}
          />
          <Route
            path="/bayern-munich-tshirt-21/22-third"
            element={<BayernThirdShirt />}
          />
          <Route
            path="/bayern-munich-shorts-21/22-third"
            element={<BayernThirdShort />}
          />
          <Route
            path="/bayern-munich-tshirt-21/22-home"
            element={<BayernHomeShirt />}
          />
          <Route
            path="/bayern-munich-tshirt-long-sleeve-21/22-home"
            element={<BayernHomeLong />}
          />
          <Route
            path="/bayern-munich-women-tshirt-21/22-home"
            element={<BayernHomeWomen />}
          />
          <Route
            path="/bayern-munich-shorts-21/22-home"
            element={<BayernHomeShort />}
          />
          <Route
            path="/bayern-munich-shorts-21/22-away"
            element={<BayernAwayShort />}
          />
          <Route
            path="/borussia-dortmund-tshirt-21/22-third"
            element={<DortmundThirdShirt />}
          />
          <Route
            path="/borussia-dortmund-kids-tshirt-21/22-third"
            element={<DortmundThirdKids />}
          />
          <Route
            path="/borussia-dortmund-shorts-21/22-third"
            element={<DortmundThirdShort />}
          />
          <Route
            path="/borussia-dortmund-tshirt-21/22-away"
            element={<DortmundAwayShirt />}
          />
          <Route
            path="/borussia-dortmund-shorts-21/22-away"
            element={<DortmundAwayShort />}
          />
          <Route
            path="/borussia-dortmund-shorts-21/22-home"
            element={<DortmundHomeShort />}
          />
          <Route
            path="/leipzig-tshirt-21/22-third"
            element={<LeipzigThirdShirt />}
          />
          <Route
            path="/leipzig-tshirt-21/22-away"
            element={<LeipzigAwayShirt />}
          />

          <Route
            path="/real-madrid-long-sleeve-tshirt-21/22-home"
            element={<RealMadridHomeLong />}
          />
          <Route
            path="/real-madrid-tshirt-21/22-home"
            element={<RealMadridHome />}
          />
          <Route
            path="/real-madrid-kids-tshirt-21/22-home"
            element={<RealMadridHomeKids />}
          />
          <Route
            path="/atletico-madrid-tshirt-21/22-third"
            element={<AtleticoMadridThirdShirt />}
          />
          <Route
            path="/atletico-madrid-tshirt-21/22-away"
            element={<AtleticoMadridAwayShirt />}
          />
          <Route
            path="/atletico-madrid-shorts-21/22-away"
            element={<AtleticoMadridAwayShorts />}
          />
          <Route
            path="/atletico-madrid-tshirt-21/22-home"
            element={<AtleticoMadridHomeShirt />}
          />
          <Route
            path="/atletico-madrid-shorts-21/22-home"
            element={<AtleticoMadridHomeShorts />}
          />
          <Route
            path="/barcelona-shorts-21/22-third"
            element={<BarcelonaThirdShorts />}
          />
          <Route
            path="/barcelona-tshirt-21/22-third"
            element={<BarcelonaThirdShirt />}
          />
          <Route
            path="/barcelona-kids-tshirt-21/22-away"
            element={<BarcelonaAwayKids />}
          />
          <Route
            path="/barcelona-shorts-21/22-away"
            element={<BarcelonaAwayShorts />}
          />
          <Route
            path="/barcelona-shorts-21/22-home"
            element={<BarcelonaHomeShorts />}
          />
          <Route
            path="/barcelona-tshirt-21/22-home"
            element={<BarcelonaHomeShirt />}
          />
          <Route
            path="/real-madrid-tshirt-21/22-third"
            element={<RealMadridThirdShirt />}
          />
          <Route
            path="/real-madrid-shorts-21/22-third"
            element={<RealMadridThirdShorts />}
          />
          <Route
            path="/real-madrid-tshirt-21/22-away"
            element={<RealMadridAwayShirt />}
          />
          <Route
            path="/real-madrid-long-sleeve-tshirt-21/22-away"
            element={<RealMadridAwayLong />}
          />
          <Route
            path="/real-madrid-shorts-21/22-away"
            element={<RealMadridAwayShorts />}
          />
          <Route
            path="/real-madrid-shorts-21/22-home"
            element={<RealMadridHomeShorts />}
          />
          <Route
            path="/psg-tshirt-women-21/22-home"
            element={<PsgHomeWomen />}
          />
          <Route path="/psg-tshirt-kids-21/22-home" element={<PsgHomeKids />} />
          <Route
            path="/psg-tshirt-kids-21/22-third"
            element={<PsgThirdKids />}
          />
          <Route path="/psg-tshirt-21/22-third" element={<PsgThirdShirt />} />
          <Route path="/psg-tshirt-21/22-away" element={<PsgAwayShirt />} />
          <Route path="/psg-shorts-21/22-third" element={<PsgThirdShort />} />
          <Route path="/psg-shorts-21/22-away" element={<PsgAwayShort />} />
          <Route path="/psg-shorts-21/22-home" element={<PsgHomeShort />} />
          <Route path="/ajax-tshirt-21/22-away" element={<AjaxAwayShirt />} />
          <Route
            path="/celtic-tshirt-21/22-away"
            element={<CelticAwayShirt />}
          />
          <Route
            path="/celtic-tshirt-21/22-home"
            element={<CelticHomeShirt />}
          />
          <Route
            path="/porto-tshirt-21/22-third"
            element={<PortoThirdShirt />}
          />
          <Route path="/porto-tshirt-21/22-away" element={<PortoAwayShirt />} />
          <Route path="/porto-tshirt-21/22-home" element={<PortoHomeShirt />} />
          <Route
            path="/ajax-tshirt-kids-21/22-third"
            element={<AjaxThirdKids />}
          />
          <Route path="/ajax-shorts-21/22-third" element={<AjaxThirdShort />} />
          <Route path="/ajax-shorts-21/22-away" element={<AjaxAwayShort />} />
          <Route path="/ajax-shorts-21/22-home" element={<AjaxHomeShort />} />
          <Route path="/ajax-tshirt-21/22-home" element={<AjaxHomeShirt />} />
          <Route
            path="/benfica-tshirt-21/22-third"
            element={<BenficaThirdShirt />}
          />
          <Route
            path="/benfica-tshirt-21/22-away"
            element={<BenficaAwayShirt />}
          />
          <Route
            path="/benfica-tshirt-21/22-home"
            element={<BenficaHomeShirt />}
          />
          <Route
            path="/benfica-shorts-21/22-away"
            element={<BenficaAwayShort />}
          />
          <Route
            path="/benfica-shorts-21/22-home"
            element={<BenficaHomeShort />}
          />

          {/* FOOTER */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/delivery-guarantee" element={<DeliveryGuarantee />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/size-chart" element={<SizeChart />} />
          <Route path="/faq-help" element={<FaqHelp />} />
          <Route path="/shipping-delivery" element={<Shipping />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<SignUp />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

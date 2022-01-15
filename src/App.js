import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import LiverpoolSales from "./Pages/LiverpoolSales";
import ManCitySales from "./Pages/ManCitySales";
import ManUnitedSales from "./Pages/ManUnitedSales";
import ArsenalSales from "./Pages/ArsenalSales";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/footballshirt" element={<Banner />} />
          <Route path="/liverpool-sales" element={<LiverpoolSales />} />
          <Route path="/mancity-sales" element={<ManCitySales />} />
          <Route path="/manunited-sales" element={<ManUnitedSales />} />
          <Route path="/arsenal-sales" element={<ArsenalSales />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

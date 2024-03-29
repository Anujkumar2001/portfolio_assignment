import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { getUserData } from "./api";
import HeroSection from "./components/Herosection";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Preloader from "./components/Preloader";
import BrandArea from "./components/BrandArea";
import "./App.css";
import Client from "./components/Client";
import PriceTable from "./components/PriceTable";
import TestimonialSection from "./components/Testimonial";
import WorkProcess from "./components/WorkProcess";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const data = await getUserData();
      if (data.status === 200) {
        setUserData(data.data.user);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      {!Object.keys(userData).length && <Preloader />}
      <Navbar />
      {Object.keys(userData).length && <HeroSection userData={userData} />}
      {/* <Preloader /> */}
      {Object.keys(userData).length && <AboutUs userData={userData} />}
      {Object.keys(userData).length && <BrandArea userData={userData} />}
      {Object.keys(userData).length && <Portfolio userData={userData} />}{" "}
      {Object.keys(userData).length && <Client userData={userData} />}
      {Object.keys(userData).length && <PriceTable userData={userData} />}
      {Object.keys(userData).length && (
        <TestimonialSection userData={userData} />
      )}
      {Object.keys(userData).length && <WorkProcess userData={userData} />}{" "}
      {/* {Object.keys(userData).length && <Blog userData={userData} />} */}
      {Object.keys(userData).length && <Footer userData={userData} />}
    </div>
  );
};

export default App;

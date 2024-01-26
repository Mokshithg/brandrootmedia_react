import React, { useState } from "react";
import FirstSection from "./sections/FirstSection";
import Portfolio from "./sections/Portfolio";
import Results from "./sections/Results";
import Price from "./sections/Price";
import Faq from "./sections/Faq";
import Services from "./sections/Services";
import ContactPage from "./sections/ContactPage";
import ContactPage2 from "./sections/ContactPage2";
import Footer from "./sections/Footer";
import ham from "./assets/burger-bar.png";
import useScreenSize from "./utils/screenSize";

export default function App() {
  const screenSize = useScreenSize();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="md:mx-40 mx-4 my-8 font-sans text-white">
      <nav className="flex w-full justify-between items-center">
        <img
          src="https://ik.imagekit.io/7saglhzb5/logo.png?updatedAt=1702626131858"
          alt="GrowthRocketLogo"
          className="h-10"
        />
        {screenSize !== "small" ? (
          <div className="flex justify-between gap-10 text-[22px] items-center">
            <a href="/#portfolio">Portfolio</a>
            <a href="#footer">Results</a>
            <a>Pricing</a>
            <a>Services</a>
            <a>Contact</a>
          </div>
        ) : (
          <div onClick={() => setShowMenu(!showMenu)}>
            <img className="h-10" src={ham} alt="" />
          </div>
        )}
      </nav>
      {showMenu ? (
        <div className="absolute backdrop-blur-md w-full text-right h-full top-0 flex right-0 flex-col text-3xl text-red-600 gap-5 justify-start px-5">
          <img
            onClick={() => setShowMenu(!showMenu)}
            src={ham}
            className="h-10 ml-[300px] mt-5 w-10 "
            alt=""
          />
          <a href="/#portfolio">Portfolio</a>
          <a>Results</a>
          <a>Pricing</a>
          <a>Services</a>
          <a>Contact</a>
        </div>
      ) : null}

      <FirstSection />
      <Portfolio />
      <Results />
      <Price />
      <Faq />
      <Services />
      <ContactPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

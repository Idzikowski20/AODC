import React, { useState } from "react";
import { withNamespaces } from 'react-i18next';
import FirstTab from './FirstTab';
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";
import FourthTab from "./FourthTab";
import FifthTab from "./FifthTab"; 
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
function Cards({ t }) {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  const handleTab4 = () => {
    setActiveTab("tab4");
  };
  const handleTab5 = () => {
    setActiveTab("tab5");
  };

  return (
    <section>
      <h2>{t('title2')}</h2>
      <div className='carrier-card-benefit-container'>
        <div className='carrier-card-benefit-buttons'>
          <a onClick={handleTab1} className={activeTab === "tab1" ? "active" : "carrier-card-benefit-button"}>
            <h4 className="what-we-do-h4">{t('title2.doradzctwo')}</h4>
          </a>
          <a onClick={handleTab2} className={activeTab === "tab2" ? "active" : "carrier-card-benefit-button"}>
            <h4 className="what-we-do-h4">{t('title2.projekty')}</h4>
          </a>
          <a onClick={handleTab3} className={activeTab === "tab3" ? "active" : "carrier-card-benefit-button"}>
            <h4 className="what-we-do-h4">{t('title2.budowa')}</h4>
          </a>
          <a onClick={handleTab4} className={activeTab === "tab4" ? "active" : "carrier-card-benefit-button"}>
            <h4 className="what-we-do-h4">{t('title2.commissioning')}</h4>
          </a>
          <a id="serwis-button" onClick={handleTab5} className={activeTab === "tab5" ? "active" : "carrier-card-benefit-button"}>
            <h4 className="what-we-do-h4">{t('title2.serwis')}</h4>
          </a>
        </div>
        <div className="what-we-do-swipe">
          <p>{t('title13')}</p>
        </div>
      </div>
      <div className="carrier-benefit-container">
        <div className="carrier-card-benefit-container">
          {activeTab === "tab1" && <FirstTab />}
          {activeTab === "tab2" && <SecondTab />}
          {activeTab === "tab3" && <ThirdTab />}
          {activeTab === "tab4" && <FourthTab />}
          {activeTab === "tab5" && <FifthTab />}
        </div>
      </div>
    </section>
  )
}

export default withNamespaces()(Cards);

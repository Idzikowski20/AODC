import React, { useState } from "react";
import { withNamespaces } from 'react-i18next';
import FirstTab from './FirstTab';
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";
import FourthTab from "./FourthTab";
import FifthTab from "./FifthTab"; 

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
      <div className="carrier-benefit-container">
        <div className="carrier-card-benefit-container">
          {activeTab === "tab1" && <FirstTab />}
          {activeTab === "tab2" && <SecondTab />}
          {activeTab === "tab3" && <ThirdTab />}
          {activeTab === "tab4" && <FourthTab />}
          {activeTab === "tab5" && <FifthTab />}
        </div>
      </div>
      <div className='carrier-card-benefit-container'>
        <div className='carrier-card-benefit-buttons'>
          <button onClick={handleTab1} className={activeTab === "tab1" ? "active" : "carrier-card-benefit-button"}>
            <img className="whatwedo-img" src='assets/img/carrier/benefit-workplace.svg'/>
            <h3>Doradztwo</h3>
          </button>
          <button onClick={handleTab2} className={activeTab === "tab2" ? "active" : "carrier-card-benefit-button"}>
            <img className="whatwedo-img" src='assets/img/carrier/benefit-goal.svg'/>
            <h3>Projekty</h3>
          </button>
          <button onClick={handleTab3} className={activeTab === "tab3" ? "active" : "carrier-card-benefit-button"}>
            <img className="whatwedo-img" src='assets/img/carrier/benefit-balance.svg'/>
            <h3>Budowa</h3>
          </button>
        </div>
        <div className='carrier-card-benefit-buttons'>
          <button onClick={handleTab4} className={activeTab === "tab4" ? "active" : "carrier-card-benefit-button"}>
            <img className="whatwedo-img" src='assets/img/carrier/benefit-welcome.svg'/>
            <h3>Commissioning</h3>
          </button>
          <button onClick={handleTab5} className={activeTab === "tab5" ? "active" : "carrier-card-benefit-button"}>
            <img className="whatwedo-img" src='assets/img/carrier/benefit-coworking.svg'/>
            <h3>Serwis</h3>
          </button>
        </div>
      </div>
    </section>
  )
}

export default withNamespaces()(Cards);

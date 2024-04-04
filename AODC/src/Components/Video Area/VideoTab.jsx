import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VideoTab = () => {
  const [activeTab, setActiveTab] = useState('register');

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="jm-register-section-wrapper">
    </div>
  );
}

export default VideoTab;

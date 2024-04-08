import React, { useState } from 'react';
import GridJobs from './GridJobs';
import ListJobs from './ListJobs';
import SalaryFilter from './SalaryFilter';
import JobTypeFilter from './JobTypeFilter';
import AreaRangeFilter from './AreaRangeFilter';
import JobCategoryFilter from './JobCategoryFilter';
import TagFilter from './TagFilter';
import SearchBar from './SearchBar';

const BrowseJob = ({view}) => {
    const [activeTab, setActiveTab] = useState(view);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div>    
          <div className="jobswidget" style={{ width: '100%', minHeight: '500px' }}>
          <iframe src="https://jobswidget.com/pl/jobs/136/0734e16382"  id="jobswidget"  style={{ width: '1px', minWidth: '100%',border: "none", minHeight: '700px',}}></iframe>
          <script src="https://jobswidget.com/scripts/jobswidget.js" defer></script>
        </div>
    </div>
  );
};

export default BrowseJob;

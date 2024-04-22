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
    <div className=''>
    <iframe className="" src='https://44e2a842c2384d15b8e783f00a6fd3ff.elf.site' width='100%' height='800' frameborder='0'></iframe>
  </div>
    </div>
  );
};

export default BrowseJob;

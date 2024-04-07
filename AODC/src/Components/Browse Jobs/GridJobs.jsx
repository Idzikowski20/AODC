import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { JobContext } from '../../Context/JobContext';

const GridJobs = () => {
    const { filteredJobs } = useContext(JobContext);
  return (
    <div className="jm-browse-grid-wrap">
        <div className="row">
        </div>
        <div className="row">
            <div className="col-12">
                <div className="jm-pagination mb-40 mt-10 text-center">
                    <Link to="#" className="jm-pagination-btn"><i className="fa-thin fa-arrow-left"></i></Link>
                    <Link to="#" className="jm-pagination-btn active">1</Link>
                    <Link to="#" className="jm-pagination-btn"><i className="fa-thin fa-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GridJobs
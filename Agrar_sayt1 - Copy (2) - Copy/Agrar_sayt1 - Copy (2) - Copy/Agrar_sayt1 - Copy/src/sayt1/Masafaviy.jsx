import React, { useState } from 'react';
import './Masafaviy.css'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
function Masovafiy() {
    const [showExtra, setShowExtra] = useState(false);

    const toggleContent = (e) => {
        e.preventDefault();
        setShowExtra(!showExtra);
    };

    return (
     <>
    <Navbar/>
    <div className="ag-format-container">
  <div className="ag-courses_box">

    <div className="ag-courses_item">
      <Link to="https://hemis.tdau.uz/dashboard/login" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
          Student Login
        </div>
        <div className="ag-courses-item_date-box">
         
          <span className="ag-courses-item_date">
           KIRISH
          </span>
        </div>
      </Link>
    </div>
    <div className="ag-courses_item">
      <Link to="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
         TDAU_UZ
        </div>
        <div className="ag-courses-item_date-box">
          
          <span className="ag-courses-item_date">
            KIRISH
          </span>
        </div>
      </Link>
    </div>
    <div className="ag-courses_item">
      <Link to="https://cloud.tdau.uz/login" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
          ClaudTDAU
        </div>
        <div className="ag-courses-item_date-box">
          
          <span className="ag-courses-item_date">
            KIRISH
          </span>
        </div>
      </Link>
    </div>
 
    <div className="ag-courses_item">
      <Link to="http://360.rttm.tdau.uz/" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
          360_TDAU
        </div>
        <div className="ag-courses-item_date-box">
         
          <span className="ag-courses-item_date">
            KIRISH
          </span>
        </div>
      </Link>
    </div>
    <div className="ag-courses_item">
      <Link to="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
         KPI_TDAU
        </div>
        <div className="ag-courses-item_date-box">
         
          <span className="ag-courses-item_date">
            KIRISH
          </span>
        </div>
      </Link>
    </div>
    <div className="ag-courses_item">
      <Link to="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
          LIBRARY_TDAU
        </div>
        <div className="ag-courses-item_date-box">
          
          <span className="ag-courses-item_date">
           KIRISH
          </span>
        </div>
      </Link>
    </div>
   
  </div>
</div>
<Footer/>
</>
    );
}

export default Masovafiy;

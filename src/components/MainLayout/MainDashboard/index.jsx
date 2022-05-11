import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';
import ModalFormAction from '../../../commons/Modal/ModalFormAction';
import SlideBar from '../../../commons/SlideBar';

import './style.scss'

function MainDashboard(props) {

  const {datatoresCurr} = props;
  const [data, setData] = useState({
      type: 0,
      title: ''
  });
  const [isShowChart, setIsShowChart] = useState(false);

  const showModalChart = () => {
    setIsShowChart(!isShowChart);

    setData({
      type: 7,
      title: 'Create a New Chart'
    });
  };

  const handlecloseShowCreate = () => {
    if (document.querySelector('.menu-content-dashboard.active'))
      document.querySelector('.menu-content-dashboard').classList.remove('active');
    else if (document.querySelector('.menu-content-datareport.active'))
      document.querySelector('.menu-content-datareport').classList.remove('active');
  }

  return (
    <div className='wrapper'>
        <SlideBar 
        datatoresCurr={datatoresCurr}
        />
        <div className="main-container position-relative" onClick={() => {handlecloseShowCreate()}}>
          <div className="header-items-menu d-flex justify-content-between align-items-center">
            <div className="title d-flex align-items-center">
              <span className="size-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fit=""
                  height="100%"
                  width="100%"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <g id="chart-bar_cache6107">
                    <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"></path>
                  </g>
                </svg>
              </span>
              <p className="display-6">demo1</p>
            </div>
            <div className="settings">
              <span>
                <i className="fa fa-plus"></i>
              </span>
            </div>
          </div>
          <div className="main-content position-absolute"
          style={{background: 'lightgrey', minHeight: '100vh', width: '100%'}}
          >
            <div className="content-actions">
              <Button className='btn-action-chart'
              onClick={() => {
                showModalChart();
              }}
              >Add a New Chart</Button>
              <p className='my-4'>OR</p>
              <Button className='btn-action-chart'
              // onClick={() => {props.setRender(7)}}
              >See an Example</Button>
            </div>
          </div>
        </div>
        <ModalFormAction 
        isShow={isShowChart} 
        showModal={showModalChart} 
        data={data}
        />
    </div>
  )
}

export default MainDashboard
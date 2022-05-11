import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { getDetailsDataReport } from '../../redux/actions/DataReportAction';
import ModalFormAction from '../Modal/ModalFormAction';

import './style.scss'

function SlideBar(props) {

  const {datatoresCurr} = props;
  const {datareport} = useSelector(state => state.DataReportReducer);
  const dispatch = useDispatch();
  
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState({
      type: 0,
      title: ''
  });
  const [typeDevice, setTypeDevice] = useState('');
  const [values, setValues] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [projectId, setProjectId] = useState('');

  useEffect(() => {
    setProjectId(localStorage.getItem('project_id'));
  },[]);
  
  const showModal = () => setIsShow(!isShow);
  
  const showModalFormAdd = () => {
    if (document.querySelector('.menu-content-dashboard.active'))
      document.querySelector('.menu-content-dashboard').classList.remove('active');
    
    setIsShow(!isShow);
    setData({
      type: 5,
      title: 'Create a new Dashboard'
    });
  };

  const handleSlidebar = () => {
    document.querySelector('.wrapper').classList.toggle('collapse-slide');
  };

  const handleShowCreate = (type) => {
    
    if (type === 1) {
      document.querySelector('.menu-content-dashboard').classList.toggle('active');
    }
    else if (type === 2) {
      document.querySelector('.menu-content-datareport').classList.toggle('active');
    }
  };

  const handleRender = (type, item) => {
    if (type === 3) {
    }
    else if (type === 4) {
      dispatch(getDetailsDataReport(item.rp_id));
      props.setTitleReport(item.title);
    }
    else if (type === 6) {
      props.handeRenderTable(item);
    }
    else {
      console.log(type)
    }
  };

  return (
    <div className="slidebar">
      <div className="slidebar-container">
        <div className="slidebar-menu">
          <li className="item">
            <div className="menu-btn">
              <i className="fa-solid fa-chart-column"></i>
              <span>Dashboards</span>
              <span className="icon-arrow-down">
                <i className="fa-solid fa-angle-down"></i>
              </span>
              <span
                className="icon-settings"
                onClick={() => {
                  handleShowCreate(1,'');
                }}
              >
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </span>
            </div>
            <ul className="list-unstyled">
              <li
                onClick={() => {
                  handleRender(2,'');
                }}
              >
                <Link to={`/pj/${localStorage.getItem('project_id')}/dashboard/0`}>demo</Link>
                {/* <a>demo</a> */}
              </li>
            </ul>
          </li>
          <li className="item">
            <a className="menu-btn">
              <i className="fa-solid fa-table-cells"></i>
              <span>DataReports</span>
            </a>
            <ul className="list-unstyled">
              <li
                className="create-datareport"
                onClick={() => {
                  handleRender(3,'');
                }}
              >
                <Link to={`/pj/${localStorage.getItem('project_id')}/rp/new/0`}>+ Create a new DataReport</Link>
              </li>
              {datareport?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="create-datareport"
                    onClick={() => {
                      handleRender(4, item);
                    }}
                  > 
                    <Link to={`/pj/${projectId}/rp/${item.rp_id}`}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="item">
            <a className="menu-btn">
              <i className="fa-solid fa-bookmark"></i>
              <span>My Queries</span>
            </a>
          </li>
          <li className="item">
            <div className="menu-btn">
              <i className="fa-solid fa-database"></i>
              <span>Database</span>
              <span className="icon-arrow-down">
                <i className="fa-solid fa-angle-down"></i>
              </span>
              <span className="icon-settings"
                onClick={() => {
                  handleShowCreate(2);
                }}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </span>
            </div>
            <ul className="list-unstyled">
              {datatoresCurr.datastores?.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={`/pj/${item.p_id}/ds/${item.d_id}/list/all`}
                      onClick={() => {
                        handleRender(6, item);
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </div>
        <span
          className="btn-close__slidebar"
          onClick={() => {
            handleSlidebar();
          }}
        >
          <i className="fa-solid fa-chevron-left"></i>
          <i className="fa-solid fa-chevron-right"></i>
        </span>
      </div>
      <div className="menu-content-dashboard">
        <div className="menu-item">
          <button
            className="btn-action"
            onClick={() => {
              showModalFormAdd();
            }}
          >
            Create a new Dashboard
          </button>
        </div>
      </div>
      <div className="menu-content-datareport">
        <div className="menu-item d-flex justify-content-center align-items-center">
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
              <g id="database-plus_cache5108">
                <path d="M9,3C4.58,3 1,4.79 1,7C1,9.21 4.58,11 9,11C13.42,11 17,9.21 17,7C17,4.79 13.42,3 9,3M1,9V12C1,14.21 4.58,16 9,16C13.42,16 17,14.21 17,12V9C17,11.21 13.42,13 9,13C4.58,13 1,11.21 1,9M1,14V17C1,19.21 4.58,21 9,21C10.41,21 11.79,20.81 13,20.46V17.46C11.79,17.81 10.41,18 9,18C4.58,18 1,16.21 1,14M18,14V17H15V19H18V22H20V19H23V17H20V14"></path>
              </g>
            </svg>
          </span>
          <button
            className="btn-action">
            <Link to={`/w/${localStorage.getItem("workspace_id")}/pj/${localStorage.getItem("project_id")}/create_ds`}>Create a new Database</Link>
          </button>
        </div>
        <div className="menu-item d-flex justify-content-center align-items-center">
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
              <g id="eye_cache5140">
                <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path>
              </g>
            </svg>
          </span>
          <button
            className="btn-action">
            Show All Database
          </button>
        </div>
      </div>
      {values != null ? (
        <ModalFormAction
          formValues={values}
          isShow={isShow}
          showModal={showModal}
          data={data}
          // isEdit={isEdit}
          // isDisable={isDisable}
        />
      ) : (
        <ModalFormAction
          formValues={{
            name: "",
            display_id: "",
          }}
          isShow={isShow}
          showModal={showModal}
          data={data}
          // isEdit={isEdit}
          // isDisable={isDisable}
        />
      )}
    </div>
  );
}

export default SlideBar
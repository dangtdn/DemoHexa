import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import SlideBar from '../../../commons/SlideBar';
import FormImportDS from '../../Form/FormImportDS';
import './style.scss'

function MainImportEvent1(props) {

    const {datatoresCurr} = props;

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
        <div className="main-container"  onClick={() => {handlecloseShowCreate()}}>
          <div className="header-items-menu d-flex justify-content-between align-items-center">
            <div className="title d-flex align-items-center">
              <p>Create New Database</p>
            </div>
            <div className="settings">
              <span>
                <i className="fa-solid fa-gear"></i>
              </span>
            </div>
          </div>
          <div className="status-list d-flex justify-content-start align-items-center px-3">
              <ul className="process-list d-flex justify-content-center align-items-center">
                  <li className="active">
                      <div className="stat-name active">
                          Choose a File
                      </div>
                  </li>
                  <li>
                      <div className="stat-name">
                          Data Preview
                      </div>
                  </li>
                  <li>
                      <div className="stat-name">
                          Setup Fields
                      </div>
                  </li>
                  <li>
                      <div className="stat-name">
                          Set Layout
                      </div>
                  </li>
                  <li>
                      <div className="stat-name">
                          Confirm
                      </div>
                  </li>
              </ul>
          </div>
          <p className='ds-imp-exp'>Specify CSV File to Import</p>
          <hr />
          <FormImportDS/>
        </div>
    </div>
  )
}

export default MainImportEvent1
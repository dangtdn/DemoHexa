import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import SlideBar from '../../../commons/SlideBar';
import './style.scss'

function MainCreateData(props) {

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
          <div className="create-ds-limit-msg">
              Cannot create a new database, the limit has been exceeded.
          </div>
          <div className="main-content-ds">
            <p className='title-database'>Select Create new Database</p>
            
            <Row md="4">
              <Col>
                <div className="create-ds">
                  <div className="title-ds d-flex justify-content-between align-items-center">
                    <span>Use Template</span>
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
                        <g id="chevron-right_cache5173">
                          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div className="content-ds d-flex justify-content-between align-items-center">
                    <span>Create a database from the template.</span>
                    <div className="img-icon" style={{width: '50px', height: '42px'}}>
                      <img className='img-none' width={100} src="https://dev.hexabase.com/img/thumb-db-tmpl.png" alt="" />
                      <img className='img-color' width={100} src="https://dev.hexabase.com/img/thumb-db-tmpl-on.png" alt="" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <Link className="create-ds"
                 to={`/w/${localStorage.getItem("workspace_id")}/pj/${localStorage.getItem("project_id")}/data_source/1`}
                >
                  <div className="title-ds d-flex justify-content-between align-items-center">
                    <span>Make From Import</span>
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
                        <g id="chevron-right_cache5173">
                          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div className="content-ds d-flex justify-content-between align-items-center">
                    <span>Import from Excel or CSV and create it.</span>
                    <div className="img-icon" style={{width: '50px', height: '42px'}}>
                      <img className='img-none' width={100} src="https://dev.hexabase.com/img/thumb-db-import.png" alt="" />
                      <img className='img-color' width={100} src="https://dev.hexabase.com/img/thumb-db-import-on.png" alt="" />
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
    </div>
  )
}

export default MainCreateData
import React from 'react'
import { Link } from 'react-router-dom';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import SlideBar from '../../../commons/SlideBar';
import './style.scss'

function MainCreateData(props) {

    const {datatoresCurr,render} = props;

    const handlecloseShowCreate = () => {
      if (document.querySelector('.menu-content-dashboard.active'))
        document.querySelector('.menu-content-dashboard').classList.remove('active');
      else if (document.querySelector('.menu-content-datareport.active'))
        document.querySelector('.menu-content-datareport').classList.remove('active');
    }

    const renderMainCreateData = () => {
      if (render === 1) {
        return (
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
            <div className="main-content-ds"
            onClick={() => props.setRender(2)}
            >
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
        )
      }
      else if (render === 2) {
        return (
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
              <h3 className='mb-4'>Create new database from template</h3>
              <p className='title-database'>Select Create new Database</p>
              
              <Row md="6">
                  <div className="ds-template d-flex">
                    <div className="img-template">
                      <img src="https://dev.hexabase.com/img/tmpl-SEED1.png" alt="template 1" />
                    </div>
                    <FormGroup check>
                      <Input
                        name="radio1"
                        type="radio"
                      />
                      {' '}
                      <Label check>
                      Minimum Template
                      </Label>
                    </FormGroup>
                    <div className="footer-content">
                    Minimum Template to Create user's own Setup
                    </div>
                  </div>
                  <div className="ds-template d-flex">
                    <div className="img-template">
                      <img src="https://dev.hexabase.com/img/tmpl-SEED2.png" alt="template 1" />
                    </div>
                    <FormGroup check>
                      <Input
                        name="radio1"
                        type="radio"
                      />
                      {' '}
                      <Label check>
                      ToDo List Sample
                      </Label>
                    </FormGroup>
                    <div className="footer-content">
                    Simple ToDo List
                    </div>
                  </div>
                  <div className="ds-template d-flex">
                    <div className="img-template">
                      <img src="https://dev.hexabase.com/img/tmpl-GROUPTREE.png" alt="template 1" />
                    </div>
                    <FormGroup check>
                      <Input
                        name="radio1"
                        type="radio"
                      />
                      {' '}
                      <Label check>
                      Sync Group Database
                      </Label>
                    </FormGroup>
                    <div className="footer-content">
                    Database created from current Group Tree
                    </div>
                  </div>
              </Row>
            </div>
          </div>
        )
      }
    }

  return (
    <div className='wrapper'>
        <SlideBar 
        datatoresCurr={datatoresCurr}
        setRender={props.setRender}
        />
        {renderMainCreateData()}
    </div>
  )
}

export default MainCreateData
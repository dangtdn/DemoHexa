import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row, Table } from 'reactstrap';
import SlideBar from '../../../commons/SlideBar';
import './style.scss'

function MainImportEvent2(props) {

    const {datatoresCurr} = props;
    const {tables} = useSelector(state => state.DatastoresReducer);

    const handlecloseShowCreate = () => {
      if (document.querySelector('.menu-content-dashboard.active'))
        document.querySelector('.menu-content-dashboard').classList.remove('active');
      else if (document.querySelector('.menu-content-datareport.active'))
        document.querySelector('.menu-content-datareport').classList.remove('active');
    }
    
    useEffect(() => {
      if (tables.collection) 
        console.log('tables',tables);
      else
        console.log('fail');
    },[tables])

  return (
    <div className="wrapper">
      <SlideBar datatoresCurr={datatoresCurr} />
      <div
        className="main-container"
        onClick={() => {
          handlecloseShowCreate();
        }}
      >
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
            <li>
              <div className="stat-name">Choose a File</div>
            </li>
            <li className="active">
              <div className="stat-name active">Data Preview</div>
            </li>
            <li>
              <div className="stat-name">Setup Fields</div>
            </li>
            <li>
              <div className="stat-name">Set Layout</div>
            </li>
            <li>
              <div className="stat-name">Confirm</div>
            </li>
          </ul>
        </div>
        {tables ? (
          <p className="ds-imp-exp">
            You selected the data below.If OK, press Next
          </p>
        ) : (
          <p className="ds-imp-exp">Upload data fail</p>
        )}
        <hr />
        <div className="ds-imp-table">
          {tables.collection ? (
            <Table bordered striped>
              <thead>
                <tr>
                  {tables.collection.fields[0]?.map((item, index) => {
                    return <th key={index}>{item}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {tables.collection.rows?.map((tr, i) => {
                  return (
                    <tr key={i}>
                      {tr.row?.map((td, j) => {
                        return <td key={j}>{td}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <p className="ds-imp-exp">Table no exist</p>
          )}
        </div>
        <div className="btn-back-next d-flex justify-content-around align-items-center">
          <button className="button btn-cancel">
            <Link to={`/w/${localStorage.getItem("workspace_id")}/pj/${localStorage.getItem("project_id")}/data_source/1`}>
            Back
            </Link>
          </button>
          <button className="button btn-action-chart">
            <Link
              to={`/w/${localStorage.getItem(
                "workspace_id"
              )}/pj/${localStorage.getItem(
                "project_id"
              )}/data_preview/${localStorage.getItem("collection_id")}/2`}
            >
              Next
            </Link>
          </button>
        </div>
        <div
          className="main-table"
          style={{
            maxHeight: "200px",
            width: "100%",
            overlowY: "auto",
          }}
        ></div>
      </div>
    </div>
  );
}

export default MainImportEvent2
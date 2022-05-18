import React, { useEffect, useState } from 'react'
import SlideBar from '../../../commons/SlideBar';
import { FormGroup, Form, Input, Label, Row, Col, FormFeedback, Button } from 'reactstrap'
import './style.scss'
import { useFormik } from 'formik';
import * as yup from 'yup';

function MainNewDataReport(props) {

    const {datatoresCurr} = props;
    const [page, setPage] = useState(1);
  
    useEffect(() => {
        navWithUnderline();
    }, [page]);

    const handleIndicator = (el) => {
      const indicator = document.querySelector('.dt-nav-indicator');
      const items = document.querySelectorAll('.dt-nav-item');
  
      items.forEach((item) => {
        item.classList.remove('active');
        item.removeAttribute('style');
      });
      indicator.style.width = "".concat(el.offsetWidth, "px");
      indicator.style.left = "".concat(el.offsetLeft, "px");
      el.classList.add('active');
    }
  
    const navWithUnderline = () => {
      const items = document.querySelectorAll('.dt-nav-item');
  
      items.forEach((item) => {
        item.addEventListener('click', function (e) {
          handleIndicator(e.path[1]);
        });
        item.classList.contains('active') && handleIndicator(item);
      });
    };

    const addActive = (type) => setPage(type);
  
    const renderMainViewPage = () => {
        if (page === 1) {
          return (
            <div className="main-content">
              <Form>
                <div className="title my-4">Enter the Data Report Name</div>
                <FormGroup className="form__group field">
                  <Input
                    type="text"
                    className="form__field"
                    name="dataNameEn"
                    id="dataNameEn"
                    required
                    placeholder="Enter dataNameEn..."
                    {...getFieldProps("dataNameEn")}
                  />
                  <Label htmlFor="dataNameEn" className="form__label">
                    DataReport Name(en) *
                  </Label>
                  {errors.dataNameEn && touched.dataNameEn ? (
                    <FormFeedback className="d-block">
                      {errors.dataNameEn}
                    </FormFeedback>
                  ) : (
                    ""
                  )}
                </FormGroup>
                <FormGroup className="form__group field">
                  <Input
                    type="text"
                    className="form__field"
                    name="dataNameJa"
                    id="dataNameJa"
                    required
                    placeholder="Enter dataNameJa..."
                    {...getFieldProps("dataNameJa")}
                  />
                  <Label htmlFor="dataNameJa" className="form__label">
                    DataReport Name(ja) *
                  </Label>
                  {errors.dataNameJa && touched.dataNameJa ? (
                    <FormFeedback className="d-block">
                      {errors.dataNameJa}
                    </FormFeedback>
                  ) : (
                    ""
                  )}
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>Show in left menu</Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>Show DisplayID to List Columns</Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>Specify search conditions at execute</Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>
                      [For Date type] Show UTC datetime value for date type field
                    </Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>Use Changing Number Unit in DataReport</Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
              </Form>
            </div>
          );
        } else if (page === 2) {
          return (
            <div className="main-content">
              <Form>
                <div className="title my-4">
                  Users in the selected roles can access this Data Report
                </div>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>admin</Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>member</Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
              </Form>
            </div>
          );
        } else if (page === 3) {
          return (
            <div className="main-content">
              <Form>
                <div className="title my-4">Enter the Data Report Name</div>
                <FormGroup className="form__group field">
                  <Input
                    type="text"
                    className="form__field"
                    name="dataNameJa"
                    id="dataNameJa"
                    required
                    placeholder="Enter dataNameJa..."
                    {...getFieldProps("dataNameJa")}
                  />
                  <Label htmlFor="dataNameJa" className="form__label">
                    DataReport Name(ja) *
                  </Label>
                  {errors.dataNameJa && touched.dataNameJa ? (
                    <FormFeedback className="d-block">
                      {errors.dataNameJa}
                    </FormFeedback>
                  ) : (
                    ""
                  )}
                </FormGroup>
              </Form>
            </div>
          );
        } else if (page === 4) {
          return (
            <div className="main-content">
              <Form>
                <div className="title my-4">
                  Select a Data Source in OutputFields Tab
                </div>
              </Form>
            </div>
          );
        }
    };

    const handlecloseShowCreate = () => {
      if (document.querySelector('.menu-content-dashboard.active'))
        document.querySelector('.menu-content-dashboard').classList.remove('active');
      else if (document.querySelector('.menu-content-datareport.active'))
        document.querySelector('.menu-content-datareport').classList.remove('active');
    }

    const initialValues = {
      dataNameEn: '',
      dataNameJa: ''
    };
  
    const {
        handleSubmit,
        errors,
        touched,
        isValid,
        getFieldProps,
        resetForm,
        values,
        enableReinitialize
    } = useFormik({
      enableReinitialize: true,
      initialValues: initialValues,
        validationSchema: yup.object().shape({
            nameEn: yup.string().required("This Field is required"),
            nameJa: yup.string().required("This Field is required")
        }),
        onSubmit: (values) => {
          console.log(values);
          resetForm();
        }
    });

  return (
    <div className='wrapper'>
        <SlideBar 
        datatoresCurr={datatoresCurr}
        />
        <div className="main-container" onClick={() => {handlecloseShowCreate()}}>
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
                  <g id="grid_cache4698">
                    <path d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z"></path>
                  </g>
                </svg>
              </span>
              <p className="display-6">DataReport condition Settings</p>
            </div>
            <div className="settings">
              <span>
                <i className="fa-solid fa-gear"></i>
              </span>
            </div>
          </div>
          <div className="dt-tabs-wrapper">
            <div className="dt-tabs-menu">
              <ul className="navbar-list d-flex justify-content-left align-items-center">
                <li
                  className="dt-nav-item active"
                  id="x1"
                  onClick={() => {
                    addActive(1);
                  }}
                >
                  <a className="nav-link d-flex align-items-center h-100">
                    BASIC
                  </a>
                </li>
                <li
                  className="dt-nav-item"
                  id="x2"
                  onClick={() => {
                    addActive(2);
                  }}
                >
                  <a className="nav-link d-flex align-items-center h-100">
                    PRIVILEGES
                  </a>
                </li>
                <li
                  className="dt-nav-item"
                  id="x3"
                  onClick={() => {
                    addActive(3);
                  }}
                >
                  <a className="nav-link d-flex align-items-center h-100">
                    DATASOURCE
                  </a>
                </li>
                <li
                  className="dt-nav-item"
                  id="x4"
                  onClick={() => {
                    addActive(4);
                  }}
                >
                  <a className="nav-link d-flex align-items-center h-100">
                    OUTPUTFIELDS
                  </a>
                </li>
                <span className="dt-nav-indicator"></span>
              </ul>
            </div>
          </div>
        {renderMainViewPage()}
        </div>
    </div>
  )
}

export default MainNewDataReport
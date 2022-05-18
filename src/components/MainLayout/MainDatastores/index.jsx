import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import ModalFormAction from '../../../commons/Modal/ModalFormAction';
import SlideBar from '../../../commons/SlideBar';
import { getPaginationWithSearch } from '../../../redux/actions/DatastoresAction';
import Template2 from '../../TemplateProject/Template2';
import { useFormik } from 'formik';
import * as yup from 'yup';

import './style.scss'

function MainDatastores(props) {

    const {datatoresCurr} = props;
    const [data, setData] = useState({
        type: 0,
        title: ''
    });
    const [isShow, setIsShow] = useState(false);
    const [render, setRender] = useState(1);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
      setRender(1);
    }, []);
  
    useEffect(() => {
        navWithUnderline();
    }, [page]);

    const handleIndicator = (el) => {
      const indicator = document.querySelector('.dt-nav-indicator-settings');
      const items = document.querySelectorAll('.dt-nav-item-settings');
  
      items.forEach((item) => {
        item.classList.remove('active');
        item.removeAttribute('style');
      });
      indicator.style.width = "".concat(el.offsetWidth, "px");
      indicator.style.left = "".concat(el.offsetLeft, "px");
      el.classList.add('active');
    }
  
    const navWithUnderline = () => {
      const items = document.querySelectorAll('.dt-nav-item-settings');
  
      items.forEach((item) => {
        item.addEventListener('click', function (e) {
          handleIndicator(e.path[1]);
        });
        item.classList.contains('active') && handleIndicator(item);
      });
    };
  
    const showModal = () => setIsShow(!isShow);
    const changeLayout = () => setRender(2);
  
    const showModalForm = () => {
      setIsShow(!isShow);
      setData({
        type: 3,
        title: 'Data Filter'
      });
    };
  
    const handeRenderTable = (item) => {
      console.log(item)
      const data  = {
        "project_id": item.p_id,
        "datastore_id": item.d_id,
        "conditions": [],
        "page": 1,
        "per_page": 100,
        "return_count_only": false,
        "omit_total_items": true
      }
      dispatch(getPaginationWithSearch(data));
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
                    Datastores Name(en) *
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
                  Datastores Name(ja) *
                  </Label>
                  {errors.dataNameJa && touched.dataNameJa ? (
                    <FormFeedback className="d-block">
                      {errors.dataNameJa}
                    </FormFeedback>
                  ) : (
                    ""
                  )}
                </FormGroup>
                <FormGroup className="form__group field">
                  <Input
                    type="text"
                    className="form__field"
                    name="dataID"
                    id="dataID"
                    required
                    placeholder="Enter dataID..."
                    {...getFieldProps("dataID")}
                  />
                  <Label htmlFor="dataNameJa" className="form__label">
                  Database ID *
                  </Label>
                  {errors.dataID && touched.dataID ? (
                    <FormFeedback className="d-block">
                      {errors.dataID}
                    </FormFeedback>
                  ) : (
                    ""
                  )}
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>Display in Left Menu</Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>Show DisplayID to List Columns and Item Details</Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>Show Item Information(item_id, rev_no, date_at) to List Columns</Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" disabled={true}/>
                    <Label check>
                    Use External Service Sync
                    </Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>Use CSV file Import</Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" disabled={true}/>
                    <Label check>Use Append Upload(Faster)</Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>Enable grid editing mode </Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>Allow direct editing of status</Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>
                    Extend the input character limit in the text area
                    </Label>
                  </div>
                  <div className="item-right"></div>
                </FormGroup>
                <FormGroup check>
                  <div className="item-left">
                    <Input type="checkbox" />
                    <Label check>Do not save this datastore into a template</Label>
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

    const renderMainView = () => {
      if (render === 1) {
        return (
          <div
            className="main-container"
            onClick={() => {
              handlecloseShowCreate();
            }}
          >
            <div className="header-items-menu d-flex justify-content-between align-items-center">
              <div className="title d-flex align-items-center">
                <span>
                  <i className="fa-solid fa-database"></i>
                </span>
                <p>Users</p>
              </div>
              <div className="settings"
              onClick={() => {changeLayout()}}
              >
                <span>
                  <i className="fa-solid fa-gear"></i>
                </span>
              </div>
            </div>
            <Template2
            showModalForm={showModalForm}
            />
          </div>
        )
      }else if (render === 2) {
        return (
          <div className="main-container" onClick={() => {handlecloseShowCreate()}}>
            <div className="header-items-menu d-flex justify-content-between align-items-center">
              <div className="title d-flex align-items-center">
                <p className="display-6">users Settings</p>
              </div>
            </div>
            <div className="dt-tabs-wrapper-settings">
              <div className="dt-tabs-menu-settings">
                <ul className="navbar-list d-flex justify-content-left align-items-center">
                  <li
                    className="dt-nav-item-settings active"
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
                    className="dt-nav-item-settings"
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
                    className="dt-nav-item-settings"
                    id="x3"
                    onClick={() => {
                      addActive(3);
                    }}
                  >
                    <a className="nav-link d-flex align-items-center h-100">
                      DATALINK KEYS
                    </a>
                  </li>
                  <li
                    className="dt-nav-item-settings"
                    id="x4"
                    onClick={() => {
                      addActive(4);
                    }}
                  >
                    <a className="nav-link d-flex align-items-center h-100">
                      RELATIONS
                    </a>
                  </li>
                  <li
                    className="dt-nav-item-settings"
                    id="x5"
                    onClick={() => {
                      addActive(5);
                    }}
                  >
                    <a className="nav-link d-flex align-items-center h-100">
                      ACTION RULES
                    </a>
                  </li>
                  <span className="dt-nav-indicator-settings"></span>
                </ul>
              </div>
            </div>
          {renderMainViewPage()}
          </div>
        )
      }
    }

  return (
    <div className='wrapper'>
        <SlideBar 
        datatoresCurr={datatoresCurr}
        handeRenderTable={handeRenderTable}
        />
        {renderMainView()}
        <ModalFormAction
          isShow={isShow}
          showModal={showModal}
          data={data}
        />
    </div>
  );
}

export default MainDatastores
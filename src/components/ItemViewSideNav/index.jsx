import React, { useEffect, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FormGroup, Form, Input, Label, Row, Col, FormFeedback, Button } from 'reactstrap'
import ModalFormAction from '../../commons/Modal/ModalFormAction';
import { getItemPost, getNewItemId, postNewItemHistory } from '../../redux/actions/DatastoresAction';
import FormItemView from '../Form/FormItemView';
import './style.scss'

function ItemViewSideNav(props) {

  const {datastore_id} = useParams();
  const {renderItem} = props;
  const [next, setNext] = useState(2);
  const [page, setPage] = useState(1);
  const [comment, setComment] = useState();
  const [itemId, setItemId] = useState();
  const [data, setData] = useState({
    type: 0,
    title: '',
    comment: ''
  });
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => setIsShow(!isShow);

  const showModalForm = (cmt) => {
    setIsShow(!isShow);
    setData({
      type: 2,
      title: 'User',
      comment: cmt
    });
  };

  const {histories} = useSelector(state => state.DatastoresReducer);

  useEffect(() => {
      async function getApiItemId() {
        const value = await getNewItemId();
        
        setItemId(value.item_id);
      }
      getApiItemId();
  }, [datastore_id]);

  useEffect(() => {
      console.log('item_id: ', itemId);
      if (itemId) {
        dispatch(getItemPost(itemId, datastore_id));
      } 
  }, [comment, itemId]);

  useEffect(() => {
      navWithUnderline();
  }, [page]);

  const handleIndicator = (el) => {
    const indicator = document.querySelector('.view-nav-indicator');
    const items = document.querySelectorAll('.view-nav-item');

    items.forEach((item) => {
      item.classList.remove('active');
      item.removeAttribute('style');
    });
    indicator.style.width = "".concat(el.offsetWidth, "px");
    indicator.style.left = "".concat(el.offsetLeft, "px");
    el.classList.add('active');
  }

  const navWithUnderline = () => {
    const items = document.querySelectorAll('.view-nav-item');

    items.forEach((item) => {
      item.addEventListener('click', function (e) {
        handleIndicator(e.path[1]);
      });
      item.classList.contains('active') && handleIndicator(item);
    });
  };

  const addActive = (type) => setPage(type);

  const handleSlidebar = () => {
    document.querySelector('.item-view-wrapper').classList.toggle('collapse-slide');
  };

  const handleCloseNewItem = () => {
    if (document.querySelector('.md-sidenave-backdrop.active') && document.querySelector('.md-sidenave-right.active'))
        document.querySelector('.md-sidenave-backdrop').classList.remove('active');
        document.querySelector('.md-sidenave-right').classList.remove('active');
  }

  const handleOnKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (itemId) {
        let data = {
          "item_id": itemId,
          "workspace_id": localStorage.getItem("workspace_id"),
          "project_id": localStorage.getItem("project_id"),
          "datastore_id": localStorage.getItem("datastore_id"),
          "comment": e.target.value,
          "posting": true,
          "post_mode": "ItemTimeline",
          "is_related_post": false,
          "is_send_item_unread": true
        };
        const item = await postNewItemHistory(data);
        setComment(item);
      } 
      document.querySelector('.message-area').value = '';
    }
  }

  const renderMainItem = () => {
    if (next === 1) {
      return (
        <div className="item-view-content">
          <div className="item-title d-flex align-items-center">
            <p>Create a new Item</p>
          </div>

          <div className="status-view">
            <div className="status-list-wrapper d-flex justify-content-start align-items-center algn-content-center">
              <div className="status-layout">
                <ul className="layout-row d-flex justify-content-start align-items-center">
                  <li className="layout-column first next">
                    <div className="stat-name">1</div>
                    {/* <span>{{status.data.s_id}}</span>  */}
                  </li>
                  <li className="layout-column last">
                    <div className="stat-name">2</div>
                    {/* <span>{{status.data.s_id}}</span>  */}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="item-details">
            <div className="item-details-content">
              <div className="item-data-container">
                <div className="item-data">
                  <div className="item-header">
                    <FormItemView renderItem={renderItem}/>
                  </div>
                </div>
              </div>
              <div className="item-detail-footer d-flex justify-content-center align-items-center">
                <button className="button btn-cancel">
                  <span>Cancel</span>
                </button>
                <button className="button btn-action-chart">
                  <span onClick={() => setNext(2)}>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else if (next === 2) {
      return (
        <div className="item-view-content">
          <div className="item-title d-flex align-items-center">
            <p>menu</p>
          </div>

          <div className="status-view">
            <div className="status-list-wrapper d-flex justify-content-start align-items-center algn-content-center">
              <div className="status-layout">
                <ul className="layout-row d-flex justify-content-start align-items-center">
                  <li className="layout-column first next">
                    <div className="stat-name">1</div>
                    {/* <span>{{status.data.s_id}}</span>  */}
                  </li>
                  <li className="layout-column last">
                    <div className="stat-name">2</div>
                    {/* <span>{{status.data.s_id}}</span>  */}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="view-tabs-wrapper">
            <div className="view-tabs-menu">
              <ul className="navbar-list d-flex justify-content-left align-items-center">
                <li
                  className="view-nav-item active"
                  id="x1"
                  onClick={() => {
                    addActive(1);
                  }}
                >
                  <a className="nav-link d-flex align-items-center h-100">
                  DETAILS
                  </a>
                </li>
                <li
                  className="view-nav-item"
                  id="x2"
                  onClick={() => {
                    addActive(2);
                  }}
                >
                  <a className="nav-link d-flex align-items-center h-100">
                  LINK
                  </a>
                </li>
                <li
                  className="view-nav-item"
                  id="x3"
                  onClick={() => {
                    addActive(3);
                  }}
                >
                  <a className="nav-link d-flex align-items-center h-100">
                  TIMELINE
                  </a>
                </li>
                <span className="view-nav-indicator"></span>
              </ul>
            </div>
          </div>
          <div className="item-view-wrapper">
              {renderMainViewPage()}
          </div>
        </div>
      )
    }
  }

  const renderMainViewPage = () => {
    if (page === 1) {
      return (
        <Fragment>
          <div className="main-container">
            <div className="main-content">
              <Form>
                <Row md="2">
                  <Col>
                    <FormGroup>
                      <Label for="userId">User_id</Label>
                      <Input id="userId" name="userId" type="text" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="note">Note</Label>
                      <Input id="note" name="note" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="main-footer d-flex justify-content-end align-items">
              <button>
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
                    <g id="television-guide_cache1230">
                      <path d="M21,17V5H3V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H16V21H8V19H3A2,2 0 0,1 1,17V5A2,2 0 0,1 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z"></path>
                    </g>
                  </svg>
                </span>
                <span>EDIT LAYOUT</span>
              </button>
              <button>
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
                    <g id="pencil-box-outline_cache1231">
                      <path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z"></path>
                    </g>
                  </svg>
                </span>
                <span>EDIT FIELD</span>
              </button>
            </div>
          </div>
          <div className="item-view-slidebar">
            <div className="item-view-slidebar-container">
              <div className="slidebar-menu">
                <li className="item">
                  <div className="menu-btn">
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
                        <g id="menu-down_cache1246">
                          <path d="M7,10L12,15L17,10H7Z"></path>
                        </g>
                      </svg>
                    </span>
                    <a>Status Actions</a>
                    <span className="icon-arrow-down">
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                    <span className="size-icon icon-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fit=""
                        height="100%"
                        width="100%"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                        focusable="false"
                      >
                        <g id="plus_cache1245">
                          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                  <ul className="list-unstyled">
                    <li>
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
                          <g id="play-box-outline_cache1228">
                            <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,8V16L15,12L10,8Z"></path>
                          </g>
                        </svg>
                      </span>
                      <a>次のステータスに進める</a>
                      <a className="list-next-status">suspended</a>
                      <span className="size-icon icon-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fit=""
                          height="100%"
                          width="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                          focusable="false"
                        >
                          <g id="pencil-box-outline_cache1238">
                            <path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z"></path>
                          </g>
                        </svg>
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="item">
                  <a className="menu-btn">
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
                        <g id="menu-down_cache1246">
                          <path d="M7,10L12,15L17,10H7Z"></path>
                        </g>
                      </svg>
                    </span>
                    <span>Database Actions</span>
                    <span className="size-icon icon-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fit=""
                        height="100%"
                        width="100%"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                        focusable="false"
                      >
                        <g id="plus_cache1245">
                          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                        </g>
                      </svg>
                    </span>
                  </a>
                  <ul className="list-unstyled">
                    <li>
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
                          <g id="pencil_cache1237">
                            <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"></path>
                          </g>
                        </svg>
                      </span>
                      <a>Update</a>
                      <span className="size-icon icon-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fit=""
                          height="100%"
                          width="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                          focusable="false"
                        >
                          <g id="pencil-box-outline_cache1238">
                            <path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z"></path>
                          </g>
                        </svg>
                      </span>
                    </li>
                    <li>
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
                          <g id="content-copy_cache1239">
                            <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
                          </g>
                        </svg>
                      </span>
                      <a>Copy</a>
                      <span className="size-icon icon-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fit=""
                          height="100%"
                          width="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                          focusable="false"
                        >
                          <g id="pencil-box-outline_cache1238">
                            <path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z"></path>
                          </g>
                        </svg>
                      </span>
                    </li>
                    <li>
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
                          <g id="new-box_cache1241">
                            <path d="M20,4C21.11,4 22,4.89 22,6V18C22,19.11 21.11,20 20,20H4C2.89,20 2,19.11 2,18V6C2,4.89 2.89,4 4,4H20M8.5,15V9H7.25V12.5L4.75,9H3.5V15H4.75V11.5L7.3,15H8.5M13.5,10.26V9H9.5V15H13.5V13.75H11V12.64H13.5V11.38H11V10.26H13.5M20.5,14V9H19.25V13.5H18.13V10H16.88V13.5H15.75V9H14.5V14A1,1 0 0,0 15.5,15H19.5A1,1 0 0,0 20.5,14Z"></path>
                          </g>
                        </svg>
                      </span>
                      <a>New</a>
                      <span className="size-icon icon-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fit=""
                          height="100%"
                          width="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                          focusable="false"
                        >
                          <g id="pencil-box-outline_cache1238">
                            <path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z"></path>
                          </g>
                        </svg>
                      </span>
                    </li>
                    <li>
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
                          <g id="delete-forever_cache1243">
                            <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"></path>
                          </g>
                        </svg>
                      </span>
                      <a>Delete</a>
                      <span className="size-icon icon-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fit=""
                          height="100%"
                          width="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                          focusable="false"
                        >
                          <g id="pencil-box-outline_cache1238">
                            <path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z"></path>
                          </g>
                        </svg>
                      </span>
                    </li>
                  </ul>
                </li>
              </div>
              <span
                className="btn-close__slidebar"
                onClick={() => {
                  handleSlidebar();
                }}
              >
                <i className="fa-solid fa-chevron-right"></i>
                <i className="fa-solid fa-chevron-left"></i>
              </span>
            </div>
          </div>
        </Fragment>
      );
    } else if (page === 2) {
      return (
        <div className="main-content">
          <span className='m-3'>No Related Item Found</span>
        </div>
      );
    } else if (page === 3) {
      return (
        <div className="item-timeline-component">
          <div className="item-timeline-container">
            <div className="comment-input-area">
              <Row md="1">
                <Col>
                  <button className="btn-zoom-comment d-flex justify-content-center align-items-center">
                    <span>Zoom comment area</span>
                    <span className="size-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fit=""
                        height="100%"
                        width="100%"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                      >
                        <g id="open-in-new">
                          <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                </Col>
                <Col>
                  <div class="comment-input">
                    <textarea
                      class="message-area"
                      placeholder="Comments"
                      onKeyDown={e => handleOnKeyDown(e)}
                    ></textarea>
                    <small class="message-box-note">
                      <p>Press Shift+Enter to start a new line</p>
                    </small>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="comment-list">
              <Row md="1">
                <Col>
                  <div className="comment-item d-flex justify-content-between align-items-center">
                    <div className="item-details d-flex justify-content-center align-items-center">
                      <div className="avatar">
                        <img className='w-100' src="https://storage.googleapis.com/linker/pub/default.png" alt="avatar" />
                      </div>
                      <div className="info d-flex justify-content-center align-items-start flex-column">
                        <span className='title'>work.thuanngo Edited</span>
                        <span className='content'>No Comment</span>
                      </div>
                    </div>
                    <div className="item-notes d-flex justify-content-between flex-column">
                      <div className="timme">9 minutes ago</div>
                      <a onClick={() => {showModalForm('No Comment')}}>View full text</a>
                    </div>
                  </div>
                </Col>
                {
                  (histories.histories) ?
                  histories.histories?.map((item, index) => {
                    return (
                      <Col key={index}>
                        <div className="comment-item d-flex justify-content-between align-items-center">
                          <div className="item-details d-flex justify-content-center align-items-center">
                            <div className="avatar">
                              <img className='w-100' src="https://storage.googleapis.com/linker/pub/default.png" alt="avatar" />
                            </div>
                            <div className="info d-flex justify-content-center align-items-start flex-column">
                              <span className='title'>{item.history.email}</span>
                              <span className='content'>{item.history.comment}</span>
                            </div>
                          </div>
                          <div className="item-notes d-flex justify-content-between flex-column">
                            <div className="timme">9 minutes ago</div>
                            <a onClick={() => {showModalForm(item.history.comment)}}>View full text</a>
                          </div>
                        </div>
                      </Col>
                    )
                  }) :
                  ''
                }
              </Row>
            </div>
          </div>
        </div>
      );
    }
};
  
  return (
    <div className="item-view-sidenav">
      <div className="md-sidenave-backdrop"
        onClick={() => {handleCloseNewItem()}}
      ></div>
      <div className="md-sidenave-right">
        <button className="btn-close-view"
        onClick={() => {handleCloseNewItem()}}
        >
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
              <g id="close_cache1">
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
              </g>
            </svg>
          </span>
        </button>
        <div className="new-item-view">
          <div className="item-view-details">
            <div className="item-view">
              {renderMainItem()}
            </div>
          </div>
        <ModalFormAction
          isShow={isShow}
          showModal={showModal}
          data={data}
        />
        </div>
      </div>
    </div>
  );
}

export default ItemViewSideNav
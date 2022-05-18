import React, { Fragment, useEffect, useState } from 'react'
import { FormGroup, Label, Input, Row, Col } from 'reactstrap'
import SideNav from '../SideNav';
import { history } from '../../App';

import './style.scss'
import SelectWorkspaces from '../../components/SelectWorkspaces';
import ModalSettings from '../Modal/ModalSettings';
import Images from '../../components/constants/images';
import { getTemplate, getWorkspace, selectWorkspace } from '../../redux/actions/WorkspaceAction';
import { useDispatch, useSelector } from 'react-redux';
import ModalFormAction from '../Modal/ModalFormAction';
import axios from 'axios';
import { token } from '../../configs/settings';
import { getNotify } from '../../redux/actions/NotificationAction';
import { getGetApplicationsAndDatastores, getListItemDatastores } from '../../redux/actions/DatastoresAction';
import { getGroupTree } from '../../redux/actions/GroupAction';
import { getDataReport } from '../../redux/actions/DataReportAction';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

function Header(props) {

    const dispatch = useDispatch();
    const {arrProduct} = useSelector(state => state.WorkspaceReducer);
    const {datastores} = useSelector(state => state.DatastoresReducer);

    const [isShow, setIsShow] = useState(false);
    const [isShowProject, setIsShowProject] = useState(false);
    const [select, setSelect] = useState('Select workspace');
    const [notify, setNotify] = useState([]);
    const [projects, setProjects] = useState([]);
    const [data, setData] = useState({
        type: 0,
        title: ''
    });
    const [load, setLoad] = useState(false);
    const [templates, setTemplates] = useState([]);
    // const [workspace, setWorkSpace] = useState({
    //   workspace_id: ''
    // });
  
    useEffect(() => {
      getTemplateApi();
      dispatch(getWorkspace());
      // if (localStorage.getItem("workspace_id")){
      //   dispatch(selectWorkspace(localStorage.getItem("workspace_id")));
      // }
    }, []);
    
    useEffect(() => {
      dispatch(getGetApplicationsAndDatastores());
    }, [load]);
    
    
    const getTemplateApi = async () => {
      const data = await getTemplate();
      setTemplates(data);
    }

    const handleShowSidenav = () => {
        document.querySelector('.sidenav-backdrop').classList.toggle('collapse-slide');
    };

    const handleNewProject = (id, item) => {
      console.log('id', id);
      console.log('item', item);
      props.handeRenderTable(item.datastores[0]);
      props.setTitle(item.datastores[0].name);
      localStorage.setItem('datastores_id',item.datastores[0].d_id);
      if (document.querySelector(`.header-bottom__add-project.active`)) {
        document.querySelector(`.header-bottom__add-project.active`).classList.remove('active');
      }
      document.querySelector(`.header-bottom__add-project#${id}`).classList.add('active');
      if (item) {
        // props.setDatastoresCurr(item);
        dispatch(getListItemDatastores(item.datastores));
      }
      localStorage.setItem('project_id', item.datastores[0].p_id);
      dispatch(getDataReport(item.datastores[0].p_id));
    };
  
    const showModal = () =>  setIsShow(!isShow);
    const showModalProject = () =>  {
      setIsShowProject(!isShowProject);

      setData({
        type: 6,
        title: 'Create a new Project'
      });
    };

    const Logout = () => {
      if(localStorage.getItem("accessToken")){
        localStorage.clear();
      }
  
      history.replace("/login");
    };

    const handleShowNotify = async () => {
      document.querySelector('.list__notify').classList.toggle('active');

      const data = await getNotify();
      
      setNotify(Object.values(data));
    };
    
    const handleSelected = (item) => {
        console.log('select: ',item)
        setSelect(item.workspace_name);
        localStorage.setItem('workspace_name', item.workspace_name);
        localStorage.setItem('workspace_id', item.workspace_id);
        document.querySelector('.select-container').classList.remove('collapse-select');

        dispatch(selectWorkspace(item.workspace_id));
        dispatch(getGetApplicationsAndDatastores());
        dispatch(getGroupTree());
        setProjects(datastores);
        setLoad(!load);
    };

  return (
    <Fragment>
      <Loading/>
      <header className="header">
        <div className="h-container">
          <div className="header-top">
            <Row xs="2" className="d-flex align-items-center">
              <Col
                lg="2"
                className="d-flex justify-content-between align-items-center"
              >
                <Link to='/' className="header-top__logo">
                  <img
                    src="https://storage.googleapis.com/linker/pub/hexabase.png"
                    alt="Hexabase Logo"
                  />
                </Link>
              </Col>
              <Col lg="2">
                <div className="header-top__select-ws">
                  <SelectWorkspaces
                    handleSelected={handleSelected}
                    select={select}
                    setSelect={setSelect}
                  />
                </div>
              </Col>
              <Col lg="4">
                <div className="header-top__search">
                  <span>
                    <i className="fab fa-sistrix"></i>
                  </span>
                  <input
                    type="text"
                    name="headerSearch"
                    id="headerSearch"
                    placeholder="Search"
                  />
                </div>
              </Col>
              <Col
                lg="4"
                className="d-flex justify-content-end align-items-center"
              >
                <div className="header-top__action">
                  <ul className="list-action d-flex align-items-center mb-0">
                    <li
                      className="action__notify"
                      onClick={() => {
                        handleShowNotify();
                      }}
                    >
                      <a href="#">
                        <i className="fa fa-bell"></i>
                      </a>
                      <div className="list__notify">
                        <ul className="list-container">
                          {notify?.map((item, index) => {
                            return (
                              <li key={index}>
                                <div className="title d-flex justify-content-between">
                                  <span className="type">{item.item_type}</span>
                                  <span className="status">Done</span>
                                </div>
                                <div className="small-title d-flex">
                                  <span className="size-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fit=""
                                      height="100%"
                                      width="100%"
                                      preserveAspectRatio="xMidYMid meet"
                                      focusable="false"
                                    >
                                      <g id="package-variant-closed">
                                        <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"></path>
                                      </g>
                                    </svg>
                                  </span>
                                  <span>{item.project_name}</span>
                                </div>
                                <div className="content d-flex">
                                  <span className="size-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fit=""
                                      height="100%"
                                      width="100%"
                                      preserveAspectRatio="xMidYMid meet"
                                      focusable="false"
                                    >
                                      <g id="database">
                                        <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"></path>
                                      </g>
                                    </svg>
                                  </span>
                                  <span>{item.datastore_name}</span>
                                </div>
                                <div className="time">{item.created_at}</div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                    <li className="action__setting">
                      <a
                        href="#"
                        onClick={() => {
                          showModal();
                        }}
                      >
                        <i className="fa fa-cog"></i>
                      </a>
                    </li>
                    <li className="action__user">
                      {/* <a href="#" className='icon-user' onClick={() => {handleShowSidenav()}}>
                    <i class="fa fa-user-circle"></i>
                  </a> */}
                      <a
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuAvatar"
                        type="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        onClick={() => {
                          handleShowSidenav();
                        }}
                      >
                        <img
                          className="rounded-circle"
                          height={30}
                          src={Images.USER_ICON}
                          alt="avatar"
                        />
                      </a>
                    </li>
                    <li className="action__logout">
                      <a
                        href=""
                        onClick={() => {
                          Logout();
                        }}
                      >
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <SideNav handleShowSidenav={handleShowSidenav} />
          </div>
          <div className="header-bottom change-theme d-flex justify-content-between align-items-center">
            <div className="header-bottom__logo-home">
              <Link to={`/h/${localStorage.getItem("workspace_id")}`}
              >
                <i className="fa-solid fa-house"></i>
              </Link>
            </div>
            <div className="d-flex justify-content-between">
              {datastores?.map((item, index) => {
                if (index === 0) {
                  return (
                    <div
                      key={index}
                      className="header-bottom__add-project"
                      id="newProject"
                      onClick={() => {
                        handleNewProject("newProject", item);
                      }}
                    > 
                      {
                      (item.datastores) ?
                      (
                        <Link to={`/pj/${item.datastores[0].p_id}/ds/${item.datastores[0].d_id}/list/all`}>New Project</Link>
                      ) :
                      (
                        <Link>New Project</Link>
                      )
                      }
                    </div>
                  );
                }
                return (
                  <div
                    key={index}
                    className="header-bottom__add-project mx-3"
                    id={`project${index}`}
                    onClick={() => {
                      handleNewProject(`project${index}`, item);
                    }}
                  >
                  {
                  (item.datastores) ?
                  (
                    <Link to={`/pj/${item.datastores[0].p_id}/ds/${item.datastores[0].d_id}/list/all`}>{item.name}</Link>
                  ) :
                  (
                    <Link>{item.name}</Link>
                  )
                  }
                  </div>
                );
              })}
            </div>
            <div className="header-bottom__add-plus">
              <span
                onClick={() => {
                  showModalProject();
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
          </div>
        </div>
        <ModalSettings isShow={isShow} showModal={showModal} />
        <ModalFormAction
          isShow={isShowProject}
          showModal={showModalProject}
          data={data}
          setLoad={setLoad}
        />
      </header>
    </Fragment>
  );
}

export default Header
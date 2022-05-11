import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import { FormGroup, Form, Input, Label, Row, Col, Table, Button } from 'reactstrap'
import Images from '../../constants/images'
import { UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree';
// import { Tree, Classes } from "@blueprintjs/core";
import { renderers as bpRenderers } from 'react-complex-tree-blueprintjs-renderers';
import '@blueprintjs/core/lib/css/blueprint.css';
import './style.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalFormAction from '../../../commons/Modal/ModalFormAction';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { addUser, getUserInGroup } from '../../../redux/actions/UserAction';

function GroupAndMembers(props) {

  const [trees, setTrees] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState({
      type: 0,
      title: ''
  });
  const [typeDevice, setTypeDevice] = useState('');
  const [values, setValues] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [id, setId] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [groupId, setGroupId] = useState(null);

  const {arrGroup} = useSelector(state => state.GroupReducer);
  const {arrUser, userInfo} = useSelector(state => state.UserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (arrGroup)
      createListTree();
  }, [arrGroup]);

  useEffect(() => {
    console.log(trees);
  }, [trees, data, groupId]);

  // Create array to render view tree
  const createListTree = () => {

    let arr = [];
    arrGroup?.forEach((item, index) => {
      arr.push(`child${item.id}`);
    });
    
    let workspace_name = localStorage.getItem('workspace_name');

    let items = {
      root: {
        index: 'root',
        hasChildren: true,
        children: ['ws__selected'],
        data: 'Root item',
      },
      ws__selected: {
        index: 'ws__selected',
        hasChildren: true,
        children: arr,
        data: workspace_name,
      }
    };

    arrGroup?.forEach((item, index) => {
      let arrChild = [];

      if (item.childGroups.length > 0) {
        item.childGroups.forEach((item, index) => {
          arrChild.push(`childGroup${item.id}`);
        });
        
        item.childGroups.forEach((itemChild, index) => {
          items = {
            ...items,
            [`child${item.id}`]: {
              index: `child${item.id}`,
              hasChildren: true,
              children: arrChild,
              data: item.name,
              item: item
            },
            [`childGroup${itemChild.id}`]: {
              index: `childGroup${itemChild.id}`,
              children: [],
              data: itemChild.name,
              item: itemChild
            }
          }
        });

      }
      else {
        items = {
          ...items,
          [`child${item.id}`]: {
            index: `child${item.id}`,
            children: [],
            data: item.name,
            item: item
          }
        }
      }
    });
    
    setTrees(items);
  };

  // Function close/open actions and display add/edit/delete in modal form
  
  /* Start */
  const showModal = () => setIsShow(!isShow);

  const handleShowOption = (item, type) => {
    if (document.querySelector(`.bp4-tree-node-content .active`))
      document.querySelector(`.bp4-tree-node-content .active`).classList.remove('active');
    if (type === 1) {
      document.querySelector('.menu-content-ws').classList.add('active');
    }else if (type === 2) {
      document.querySelector(`#${item.index}`).classList.add('active');
    }
  };

  const handleCloseOption = () => {
    if (document.querySelector(`.bp4-tree-node-content .active`))
      document.querySelector(`.bp4-tree-node-content .active`).classList.remove('active');
    if (document.querySelector(`.header-actions .active`))
      document.querySelector(`.header-actions .active`).classList.remove('active');
  };
  
  const showModalFormAdd = () => {
    if (document.querySelector(`.menu-content-ws.active`))
      document.querySelector(`.menu-content-ws`).classList.remove('active');
    
    setIsShow(!isShow);
    setData({
      type: 1,
      title: 'Create a new group'
    });
    setIsEdit(false);
    setIsDisable(false);
    // console.log('run add');
    // console.log(show);
  };
  
  const showModalFormEdit = (item) => {
    if (document.querySelector(`#${item.index}.active`))
      document.querySelector(`#${item.index}`).classList.remove('active');
      
    setIsShow(!isShow);
    
    setData({
        type: 2,
        title: 'Edit group'
    });
    setValues(item.item);
    setIsEdit(true);
    setIsDisable(false);
  };
  
  const showModalFormDelete = (item) => {
    if (document.querySelector(`#${item.index}.active`))
      document.querySelector(`#${item.index}`).classList.remove('active');
    
    setIsShow(!isShow);
    setData({
        type: 3,
        title: 'Delete group'
    });
    setValues(item.item);
    setIsEdit(true);
    setIsDisable(true);
  };

  const handleDisplayLayoutAdd = () => {
    if (document.querySelector('.btn-add-user.d-none')) {
      document.querySelector('.btn-add-user').classList.remove('d-none');
      document.querySelector('.layout-add-user').classList.add('d-none');
    }else if (document.querySelector('.layout-add-user.d-none')) {
      document.querySelector('.btn-add-user').classList.add('d-none');
      document.querySelector('.layout-add-user').classList.remove('d-none');
    }
  };
  /* End */

  const {
    handleSubmit,
    getFieldProps,
    resetForm,
    enableReinitialize
} = useFormik({
  enableReinitialize: true,
  initialValues: {email: ''},
    validationSchema: yup.object().shape({
        email: yup.string().required("This Field is required")
    }),
    onSubmit: (values) => {
      let workspace_id = localStorage.getItem('workspace_id');
      console.log(values)
      let data = {
        email: values.email,
        g_id: groupId,
        w_id: workspace_id,
        username: userInfo.username,
        no_confirm_email: false
      }
      dispatch(addUser(data));
      setIsSubmit(!isSubmit);
      resetForm();
    }
});

  const handleSelectId = (id) => {
    console.log(id);
    dispatch(getUserInGroup(id));
    console.log(arrUser);
    setGroupId(id);
  }

  const renderListUser = () => {
    if (groupId) {
      return (
        <Fragment>
          <div className="form-group__search d-flex justify-content-end align-items-center">
                <div className="search">
                  <span className="icon-search">
                    <i className="fa fa-search"></i>
                  </span>
                  <div className="select-status">
                    Joined, Invitation sent, Invitation not sent
                    <span className="icon-arrow">
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="table-user">
                <Table>
                  <tbody>
                    <tr>
                      <th scope="row" style={{ paddingLeft: "24px" }}>
                        <Input type="checkbox" />
                      </th>
                      <th
                        className="title-user"
                        style={{ padding: "0px 24px" }}
                      >
                        User
                      </th>
                      <th
                        className="title-status"
                        style={{ paddingRight: "56px" }}
                      >
                        Status
                      </th>
                      <th style={{ paddingRight: "24px" }}></th>
                    </tr>
                    {arrUser?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row" style={{ padding: "0px 24px" }}>
                            <Input type="checkbox" />
                          </th>
                          <td
                            className="text-left"
                            style={{ paddingLeft: "24px" }}
                          >
                            <div className="group-user d-flex align-items-center">
                              <span className="icon-user">
                                <i className="fa fa-user"></i>
                              </span>
                              <div className="info">
                                <span className="name-user">
                                  {item.username}
                                </span>
                                <span>{item.email}</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ paddingRight: "56px" }}>
                            <div className="status">joined</div>
                          </td>
                          <td style={{ paddingRight: "24px" }}>
                            <div className="delete-user">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fit=""
                                height="100%"
                                width="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                                focusable="false"
                              >
                                <g id="account-remove_cache1965">
                                  <path d="M15,14C17.67,14 23,15.33 23,18V20H7V18C7,15.33 12.33,14 15,14M15,12A4,4 0 0,1 11,8A4,4 0 0,1 15,4A4,4 0 0,1 19,8A4,4 0 0,1 15,12M5,9.59L7.12,7.46L8.54,8.88L6.41,11L8.54,13.12L7.12,14.54L5,12.41L2.88,14.54L1.46,13.12L3.59,11L1.46,8.88L2.88,7.46L5,9.59Z"></path>
                                </g>
                              </svg>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              <div className="main-right-btn d-flex justify-content-around align-items-center mt-5">
                <Row md="3">
                  <Col>
                    <Button
                    color='primary'
                      className="btn-add-user d-flex align-items-center"
                      onClick={() => {
                        handleDisplayLayoutAdd();
                      }}
                    >
                      <span className="size-icon text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fit=""
                          height="100%"
                          width="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                          focusable="false"
                        >
                          <g id="account-plus_cache1814">
                            <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"></path>
                          </g>
                        </svg>
                      </span>{" "}
                      Add a User
                    </Button>
                    
                    <Form onSubmit={handleSubmit}>
                    <div className="layout-add-user d-flex align-items-top justify-content-center d-none">
                      <div className="layout-add-user__left">
                        <div className="note-add">
                          Add a new Member (Press Enter to add the list below)
                        </div>
                          <FormGroup className="form__group field">
                            <Input
                              type="text"
                              className="form__field"
                              name="email"
                              id="email"
                              required
                              placeholder="Enter email..."
                              {...getFieldProps("email")}
                            />
                            <Label htmlFor="email" className="form__label">
                              Email *
                            </Label>
                          </FormGroup>
                      </div>
                      <div className="layout-add-user__right">
                        <button className="title" type='submit'>Add</button>
                        <span
                          className="icon-close"
                          onClick={() => {
                            handleDisplayLayoutAdd();
                          }}
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </span>
                      </div>
                    </div>
                      </Form>
                    
                  </Col>
                  <Col>
                    <Button color="primary d-flex align-items-center">
                      <span>
                        <i className="fa fa-cloud"></i>
                      </span>{" "}
                      Add Bot
                    </Button>
                  </Col>
                  <Col>
                    <Button color="light d-flex align-items-center" disabled>
                      <span>
                        <i className="fa fa-paper-plane"></i>
                      </span>{" "}
                      Send Invitation
                    </Button>
                  </Col>
                </Row>
              </div>
        </Fragment>
      )
    }else {
      return (
        <Fragment>
          <div className="form-group__search d-flex justify-content-end align-items-center">
                <div className="search">
                  <span className="icon-search">
                    <i className="fa fa-search"></i>
                  </span>
                  <div className="select-status">
                    Joined, Invitation sent, Invitation not sent
                    <span className="icon-arrow">
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="table-user">
                <Table>
                  <tbody>
                    <tr>
                      <th scope="row" style={{ paddingLeft: "24px" }}>
                        <Input type="checkbox" />
                      </th>
                      <th
                        className="title-user"
                        style={{ padding: "0px 24px" }}
                      >
                        User
                      </th>
                      <th
                        className="title-status"
                        style={{ paddingRight: "56px" }}
                      >
                        Status
                      </th>
                      <th style={{ paddingRight: "24px" }}></th>
                    </tr>
                    <tr>
                      <th scope="row" style={{ padding: "0px 24px" }}>
                        <Input type="checkbox" />
                      </th>
                      <td className="text-left" style={{ paddingLeft: "24px" }}>
                        <div className="group-user d-flex align-items-center">
                          <span className="icon-user">
                            <i className="fa fa-user"></i>
                          </span>
                          <div className="info">
                            <span className="name-user">work.thuanngo</span>
                            <span>work.thuanngo@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td style={{ paddingRight: "56px" }}>
                        <div className="status">joined</div>
                      </td>
                      <td style={{ paddingRight: "24px" }}>
                        <div className="delete-user">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fit=""
                            height="100%"
                            width="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            focusable="false"
                          >
                            <g id="account-remove_cache1965">
                              <path d="M15,14C17.67,14 23,15.33 23,18V20H7V18C7,15.33 12.33,14 15,14M15,12A4,4 0 0,1 11,8A4,4 0 0,1 15,4A4,4 0 0,1 19,8A4,4 0 0,1 15,12M5,9.59L7.12,7.46L8.54,8.88L6.41,11L8.54,13.12L7.12,14.54L5,12.41L2.88,14.54L1.46,13.12L3.59,11L1.46,8.88L2.88,7.46L5,9.59Z"></path>
                            </g>
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="main-right-btn d-flex justify-content-around align-items-center mt-5">
                <Row md="3">
                  <Col>
                    <Button
                    color='primary'
                      className="btn-add-user d-flex align-items-center"
                      onClick={() => {
                        handleDisplayLayoutAdd();
                      }}
                    >
                      <span className="size-icon text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fit=""
                          height="100%"
                          width="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                          focusable="false"
                        >
                          <g id="account-plus_cache1814">
                            <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"></path>
                          </g>
                        </svg>
                      </span>{" "}
                      Add a User
                    </Button>
                    
                    <Form onSubmit={handleSubmit}>
                    <div className="layout-add-user d-flex align-items-top justify-content-center d-none">
                      <div className="layout-add-user__left">
                        <div className="note-add">
                          Add a new Member (Press Enter to add the list below)
                        </div>
                          <FormGroup className="form__group field">
                            <Input
                              type="text"
                              className="form__field"
                              name="email"
                              id="email"
                              required
                              placeholder="Enter email..."
                              {...getFieldProps("email")}
                            />
                            <Label htmlFor="email" className="form__label">
                              Email *
                            </Label>
                          </FormGroup>
                      </div>
                      <div className="layout-add-user__right">
                        <button className="title" type='submit'>Add</button>
                        <span
                          className="icon-close"
                          onClick={() => {
                            handleDisplayLayoutAdd();
                          }}
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </span>
                      </div>
                    </div>
                    </Form>
                    
                  </Col>
                  <Col>
                    <Button color="primary d-flex align-items-center">
                      <span>
                        <i className="fa fa-cloud"></i>
                      </span>{" "}
                      Add Bot
                    </Button>
                  </Col>
                  <Col>
                    <Button color="light d-flex align-items-center" disabled>
                      <span>
                        <i className="fa fa-paper-plane"></i>
                      </span>{" "}
                      Send Invitation
                    </Button>
                  </Col>
                </Row>
              </div>
        </Fragment>
      )
    }
  }

  return (
    <div className="main" id="global">
      <Row>
        <Col md="4">
          <div className="main-left">
            <div className="main-left-header">
              <div className="header-actions d-flex justify-content-between align-items-center">
                <div className="title-group d-flex align-items-center">
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
                      <g id="account-multiple_cache1789">
                        <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"></path>
                      </g>
                    </svg>
                  </span>
                  Group Tree
                </div>
                <div className="btn-change"></div>
                <div
                  className="options"
                  onClick={() => {
                    handleShowOption(0, 1);
                  }}
                >
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div className="menu-content-ws">
                  <div className="menu-item border-bottom py-2">
                    <button
                      className="btn-action"
                      onClick={() => {
                        showModalFormAdd();
                      }}
                    >
                      <span className="px-3">
                        <i className="fa fa-folder-plus"></i>
                      </span>{" "}
                      Add new Group
                    </button>
                  </div>
                  <div className="menu-item border-bottom py-2">
                    <button
                      className="btn-action"
                      // onClick={() => {showModalFormEdit(item.index)}}
                    >
                      <span className="px-3">
                        <i className="fa-solid fa-code-branch"></i>
                      </span>{" "}
                      Layout Settings
                    </button>
                  </div>
                  <div className="menu-item border-bottom py-2">
                    <button
                      className="btn-action"
                      // onClick={() => {showModalFormEdit(item.index)}}
                    >
                      <span className="px-3">
                        <i className="fa fa-download"></i>
                      </span>{" "}
                      Download Group CSV
                    </button>
                  </div>
                  <div className="menu-item py-2">
                    <button
                      className="btn-action"
                      // onClick={() => {showModalFormEdit(item.index)}}
                    >
                      <span className="px-3">
                        <i className="fa fa-upload"></i>
                      </span>{" "}
                      Upload Group CSV
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-left-body">
              {
                <UncontrolledTreeEnvironment
                  // {...bpRenderers}
                  dataProvider={
                    new StaticTreeDataProvider(trees, (item, data) => ({
                      ...item,
                      data,
                    }))
                  }
                  getItemTitle={(item) => item.data}
                  viewState={{
                    ["tree-1"]: {
                      expandedItems: ["ws__selected"],
                    }
                  }}
                  renderItemTitle={({ title, item }) => {
                    return (
                      <Fragment>
                        <span className="title-tree d-flex align-items-center"
                        onClick={() => {handleSelectId(item.item.id)}}
                        >
                          {item.index === "ws__selected" ? (
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
                                <g id="home_cache1838">
                                  <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
                                </g>
                              </svg>
                            </span>
                          ) : (
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
                                <g id="folder-account_cache1879">
                                  <path d="M19,17H11V16C11,14.67 13.67,14 15,14C16.33,14 19,14.67 19,16M15,9A2,2 0 0,1 17,11A2,2 0 0,1 15,13A2,2 0 0,1 13,11C13,9.89 13.9,9 15,9M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z"></path>
                                </g>
                              </svg>
                            </span>
                          )}
                          <span className="content">{title}</span>
                          <span
                            className="options-tree pl-3"
                            onClick={() => {
                              handleShowOption(item, 2);
                            }}
                          >
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                          </span>
                        </span>
                        {item.index === "ws__selected" ? (
                          <div className="menu-content-group" id={item.index}>
                            <div className="menu-item border-bottom py-2">
                              <button
                                className="btn-action"
                                onClick={() => {
                                  showModalFormEdit(item);
                                }}
                              >
                                <span className="px-3">
                                  <i className="fa-solid fa-pen"></i>
                                </span>{" "}
                                Edit Group
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="menu-content-group" id={item.index}>
                            <div className="menu-item border-bottom py-2">
                              <button
                                className="btn-action"
                                onClick={() => {
                                  showModalFormEdit(item);
                                }}
                              >
                                <span className="px-3">
                                  <i className="fa-solid fa-pen"></i>
                                </span>{" "}
                                Edit Group
                              </button>
                            </div>
                            <div className="menu-item py-2">
                              <button
                                className="btn-action"
                                onClick={() => {
                                  showModalFormDelete(item);
                                }}
                              >
                                <span className="px-3">
                                  <i className="fa fa-trash"></i>
                                </span>{" "}
                                Delete Group
                              </button>
                            </div>
                          </div>
                        )}
                      </Fragment>
                    );
                  }}
                >
                  <Tree treeId="tree-1" rootItem="root" treeLabel="Tree ws" />
                </UncontrolledTreeEnvironment>
              }
            </div>
          </div>
        </Col>
        <Col md="8" onClick={() => handleCloseOption()}>
          <div className="main-right">
            <div className="main-right-header">
              <div className="tabs-menu">
                <ul className="navbar-list d-flex justify-content-left align-items-center">
                  <li className="gr-nav-item active">
                    <a className="nav-link d-flex align-items-center h-100">
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
                          <g id="account-multiple_cache1789">
                            <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"></path>
                          </g>
                        </svg>
                      </span>
                      Group Members
                    </a>
                  </li>
                  <li className="gr-nav-item">
                    <a className="nav-link d-flex align-items-center h-100">
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
                          <g id="key_cache1615">
                            <path d="M7,14A2,2 0 0,1 5,12A2,2 0 0,1 7,10A2,2 0 0,1 9,12A2,2 0 0,1 7,14M12.65,10C11.83,7.67 9.61,6 7,6A6,6 0 0,0 1,12A6,6 0 0,0 7,18C9.61,18 11.83,16.33 12.65,14H17V18H21V14H23V10H12.65Z"></path>
                          </g>
                        </svg>
                      </span>
                      Group Roles
                    </a>
                  </li>
                  <span className="md-nav-indicator"></span>
                </ul>
              </div>
            </div>
            <div className="main-right-body">
              {renderListUser()}
            </div>
          </div>
          {values != null ? (
            <ModalFormAction
              formValues={values}
              isShow={isShow}
              showModal={showModal}
              data={data}
              isEdit={isEdit}
              isDisable={isDisable}
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
              isEdit={isEdit}
              isDisable={isDisable}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default GroupAndMembers
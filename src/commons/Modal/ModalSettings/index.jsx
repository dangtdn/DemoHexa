import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import GroupAndMembers from '../../../components/MenuSideNavSettings/GroupsAndMembers';
import PasswordPolicy from '../../../components/MenuSideNavSettings/PasswordPolicy';
import WorkspaceSettings from '../../../components/MenuSideNavSettings/WorkspaceSettings';
import { getGroupTree } from '../../../redux/actions/GroupAction';

import './style.scss'

function ModalSettings(props) {

  const {isShow} = props;

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGroupTree());
  }, [dispatch]);
  
  useEffect(() => {
      navWithUnderline();
  }, [page]);

  const handleIndicator = (el) => {
    const indicator = document.querySelector('.md-nav-indicator');
    const items = document.querySelectorAll('.md-nav-item');

    items.forEach((item) => {
      item.classList.remove('active');
      item.removeAttribute('style');
    });
    indicator.style.width = "".concat(el.offsetWidth, "px");
    indicator.style.left = "".concat(el.offsetLeft, "px");
    el.classList.add('active');
  }

  const navWithUnderline = () => {
    const items = document.querySelectorAll('.md-nav-item');
    items.forEach((item) => {
      item.addEventListener('click', function (e) {
        handleIndicator(e.path[1]);
      });
      item.classList.contains('active') && handleIndicator(item);
    });
  };

  const addActive = (id) => {
      if (id === 'nav-ws-1') setPage(1)
      else if (id === 'nav-ws-2') setPage(2)
      else if (id === 'nav-ws-3') setPage(3)
  };

  const renderMainContent = () => {
      if (page === 1) {
          return (
            <WorkspaceSettings/>
          );
      } else if (page === 2) {
          return (
              <GroupAndMembers/>
          );
        } else if (page === 3) {
            return (
                <PasswordPolicy/>
            );
      }
  };


  return (
    <Fragment>
      <Modal
        className="modal-settings"
        isOpen={isShow}
        toggle={props.showModal}
      >
        <div className="modal-header">
          <div className="md-tabs-wrapper">
            <div className="md-tabs-menu">
              <ul className="navbar-list d-flex justify-content-left align-items-center">
                <li
                  className="md-nav-item active"
                  id="nav-ws-1"
                  onClick={() => {
                    addActive("nav-ws-1");
                  }}
                >
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
                        <g id="settings_cache1788">
                          <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"></path>
                        </g>
                      </svg>
                    </span>
                    Workspace Settings
                  </a>
                </li>
                <li
                  className="md-nav-item"
                  id="nav-ws-2"
                  onClick={() => {
                    addActive("nav-ws-2");
                  }}
                >
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
                    Groups and Members
                  </a>
                </li>
                <li
                  className="md-nav-item"
                  id="nav-ws-3"
                  onClick={() => {
                    addActive("nav-ws-3");
                  }}
                >
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
                        <g id="lock_cache1790">
                          <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"></path>
                        </g>
                      </svg>
                    </span>
                    Password Policy Setting
                  </a>
                </li>
                <span className="md-nav-indicator"></span>
              </ul>
            </div>
          </div>
        </div>
        <ModalBody>
          <div className="md-tabs-content-wrapper">{renderMainContent()}</div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

export default ModalSettings
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'reactstrap'
import Privileges from '../../components/MenuSideNav/Privileges';
import UserInfo from '../../components/MenuSideNav/UserInfo';
import UserPassword from '../../components/MenuSideNav/UserPassword';
import UserPersonalize from '../../components/MenuSideNav/UserPersonalize';
import Social from '../Social';

import './style.scss'

function SideNav(props) {

    const [page, setPage] = useState(1);
    const [check, setCheck] = useState(true);
  
    useEffect(() => {
      if(check) {
        if (document.querySelector('.header-bottom.change-theme')) 
          document.querySelector('.header-bottom').classList.remove('change-theme');
      }
    }, [check]);

    useEffect(() => {
      navWithUnderline();
    }, []);

    const handleIndicator = (el) => {
      const indicator = document.querySelector('.nav-indicator');
      const items = document.querySelectorAll('.nav-item');

      items.forEach((item) => {
        item.classList.remove('active');
        item.removeAttribute('style');
      });
      indicator.style.width = "".concat(el.offsetWidth, "px");
      indicator.style.left = "".concat(el.offsetLeft, "px");
      el.classList.add('active');
    }

    const navWithUnderline = () => {
      const items = document.querySelectorAll('.nav-item');
      items.forEach((item) => {
        item.addEventListener('click', function (e) {
          handleIndicator(e.path[1]);
        });
        item.classList.contains('active') && handleIndicator(item);
      });
    };

    const addActive = (id) => {
        if (id === 'nav-1') setPage(1)
        else if (id === 'nav-2') setPage(2)
        else if (id === 'nav-3') setPage(3)
        else if (id === 'nav-4') setPage(4)
    };

    const renderMainContent = () => {
        if (page === 1) {
            return (
              <UserInfo/>
            );
        } else if (page === 2) {
            return (
                <UserPersonalize check={check} setCheck={setCheck}/>
            );
          } else if (page === 3) {
              return (
                  <Privileges/>
              );
          } else if (page === 4) {
            return (
                <UserPassword/>
            )
        }
    };

  return (
    <div className="sidenav-backdrop">
      <div
        className="sidenav-backdrop__left"
        onClick={() => {
          props.handleShowSidenav();
        }}
      ></div>
      <div className="sidenav-backdrop__right-container">
        <div className="sidenav-backdrop__right">
          <div className="sidenav-backdrop__right-header d-flex justify-content-left align-items-center">
            <span>
              <span className="border-icon-user">
                <i className="fa fa-user"></i>
              </span>
            </span>
            <div className="title mb-0">User Profile</div>
          </div>
          <div className="sidenav-backdrop-navbar">
            <div className="navigation">
              <ul className="navbar-list d-flex justify-content-left align-items-center">
                <li className="nav-item active" id='nav-1' onClick={() => {addActive('nav-1')}}>
                  <a className="nav-link">
                    USER INFO
                  </a>
                </li>
                <li className="nav-item" id='nav-2' onClick={() => {addActive('nav-2')}}>
                  <a className="nav-link">
                    PERSONALIZE
                  </a>
                </li>
                <li className="nav-item" id='nav-3' onClick={() => {addActive('nav-3')}}>
                  <a className="nav-link">
                    PRIVILEGES
                  </a>
                </li>
                <li className="nav-item" id='nav-4' onClick={() => {addActive('nav-4')}}>
                  <a className="nav-link">
                    PASSWORD
                  </a>
                </li>
                <span className="nav-indicator"></span>
              </ul>
            </div>
          </div>
          <div className="sidenav-backdrop-container">
            <Container className="py-4">{renderMainContent()}</Container>
            <Social/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav
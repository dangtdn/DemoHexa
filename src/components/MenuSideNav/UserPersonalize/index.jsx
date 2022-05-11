import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import ChooseLanguage from '../../ChooseLanguage'
import Images from '../../constants/images'

import './style.scss'

function UserPersonalize(props) {

  const {check} = props;

  const handleChangeTheme = (e, typeColor) => {
    const isChecked = e.target.checked; 
    const headerBottom = document.querySelector('.header-bottom');
    const headerBottomChangeTheme = document.querySelector('.header-bottom.change-theme');
    const headerSideNav = document.querySelector('.sidenav-backdrop__right-header');
    const headerSideNavChangeTheme = document.querySelector('.sidenav-backdrop__right-header.change-theme');

    if (isChecked) {
      if (typeColor === 1) {
        if (headerBottomChangeTheme) {
          headerBottom.classList.remove('change-theme');
          headerSideNav.classList.remove('change-theme');
        }
        else 
          return;
        props.setCheck(true)
      }
      else {
        headerBottom.classList.add('change-theme');
        headerSideNav.classList.add('change-theme');
        props.setCheck(false)
      }
    }
  };

  return (
    <div className="form-personalize">
      <Form className="py-4 px-2">
        <h3 className="title">
          <span>
            <i className="fa-solid fa-earth-americas"></i>
          </span>{" "}
          Languges
        </h3>
        <p className="info">Choose the Language to use for this Workspace</p>
        <div className="select-container">
          <ChooseLanguage />
        </div>
        <h3 className="title d-flex align-items-center">
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
              <g id="invert-colors_cache1477">
                <path d="M12,19.58V19.58C10.4,19.58 8.89,18.96 7.76,17.83C6.62,16.69 6,15.19 6,13.58C6,12 6.62,10.47 7.76,9.34L12,5.1M17.66,7.93L12,2.27V2.27L6.34,7.93C3.22,11.05 3.22,16.12 6.34,19.24C7.9,20.8 9.95,21.58 12,21.58C14.05,21.58 16.1,20.8 17.66,19.24C20.78,16.12 20.78,11.05 17.66,7.93Z"></path>
              </g>
            </svg>
          </span>{" "}
          Themes
        </h3>
        <p className="info">Choose your Color Scheme</p>
        <FormGroup tag="fieldset">
          <FormGroup check>
            <Input
              checked={check}
              onChange={(e) => {
                handleChangeTheme(e, 1);
              }}
              name="radio1"
              type="radio"
            />
            <Label check>Black</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              onChange={(e) => {
                handleChangeTheme(e, 2);
              }}
              name="radio1"
              type="radio"
            />
            <Label check>Grey</Label>
          </FormGroup>
        </FormGroup>
        <h3 className="title d-flex align-items-center">
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
              <g id="bug_cache1480">
                <path d="M14,12H10V10H14M14,16H10V14H14M20,8H17.19C16.74,7.22 16.12,6.55 15.37,6.04L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.04,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6.04C7.88,6.55 7.26,7.22 6.81,8H4V10H6.09C6.04,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.04,15.67 6.09,16H4V18H6.81C7.85,19.79 9.78,21 12,21C14.22,21 16.15,19.79 17.19,18H20V16H17.91C17.96,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.96,10.33 17.91,10H20V8Z"></path>
              </g>
            </svg>
          </span>{" "}
          Developer's Functions
        </h3>
        <p className="info">Choose to use Functions for Developers</p>
        <FormGroup check>
          <Input type="checkbox" />
          <Label check>Check to Enable Developer's Functions</Label>
        </FormGroup>
      </Form>
    </div>
  );
}

export default UserPersonalize
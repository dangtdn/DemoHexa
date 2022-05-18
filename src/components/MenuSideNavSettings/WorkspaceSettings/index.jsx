import React, { useState } from 'react'
import { FormGroup, Form, Input, Label, Row, Col } from 'reactstrap'

import './style.scss'

function WorkspaceSettings() {
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const handleFile = (evt) => {
    console.log(evt.target.files[0]);
    setSelectedFile(evt.target.files[0]);
		setIsFilePicked(true);
    const image = document.querySelector('.img-layout');
    if (!document.querySelector('.img-layout.display')) {
      image.classList.add('display');
    }
	  image.src = URL.createObjectURL(evt.target.files[0]);
  };

  return (
    <Form>
      <FormGroup className="form-group d-flex justify-content-left align-items-top">
        <div className="update-logo">
          <div className="title">Workspace Logo</div>
          <div className="img d-flex">
            <input type="file" className='input-file' onChange={handleFile}/>
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
                <g id="cloud-upload_cache2019">
                  <path d="M14,13V17H10V13H7L12,8L17,13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"></path>
                </g>
              </svg>
            </span>
            <span>Update your Logo</span>
            <img className='img-layout opacity-0' src="" alt="img" />
          </div>
        </div>
        <div className="info-email">
          <div className="title">Enter the new Workspace Name</div>
          <input type="text" defaultValue="trial_work.thuanngo@gmail.com" />
        </div>
      </FormGroup>
      <FormGroup className="form-group">
        <div className="ws-title d-flex align-items-center">
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
              <g id="clock_cache2010">
                <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"></path>
              </g>
            </svg>
          </span>
          Login Session Settings
        </div>
        <div className="notes">
          For the User Seesion Settings, you can set the following Conditions
        </div>
      </FormGroup>
      <FormGroup check>
        <div className="item-left">
          <Input type="checkbox" />
          <Label check>Check to Enable Developer's Functions</Label>
        </div>
        <div className="item-right">
          <Label>Session Expire time(sec) [min:60sec]</Label>
          <Input type="text" defaultValue={"0"} />
        </div>
      </FormGroup>
      <FormGroup className="form-group">
        <div className="ws-title d-flex align-items-center">
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
              <g id="web_cache2011">
                <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
              </g>
            </svg>
          </span>
          Redirect Settings
        </div>
        <div className="notes">
          You can set redirect URL for the users who invited to this workspace
        </div>
      </FormGroup>
      <FormGroup className="form__group field">
        <Input
          type="input"
          className="form__field"
          placeholder="Redirect URL*"
          name="url"
          id="url"
          required
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
        <Label htmlFor="url" className="form__label">
          Redirect URL
        </Label>
      </FormGroup>
      <FormGroup check>
        <div className="item-left">
          <Input type="checkbox" />
          <Label check>
            Applies only to users who do not have access to the UI
          </Label>
        </div>
        <div className="item-right"></div>
      </FormGroup>
      <FormGroup className="form-group d-flex justify-content-left">
        <div className="notes-admin">
          <div className="ad-title d-flex align-items-center">
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
                <g id="account-key_cache2012">
                  <path d="M11,10V12H10V14H8V12H5.83C5.42,13.17 4.31,14 3,14A3,3 0 0,1 0,11A3,3 0 0,1 3,8C4.31,8 5.42,8.83 5.83,10H11M3,10A1,1 0 0,0 2,11A1,1 0 0,0 3,12A1,1 0 0,0 4,11A1,1 0 0,0 3,10M16,14C18.67,14 24,15.34 24,18V20H8V18C8,15.34 13.33,14 16,14M16,12A4,4 0 0,1 12,8A4,4 0 0,1 16,4A4,4 0 0,1 20,8A4,4 0 0,1 16,12Z"></path>
                </g>
              </svg>
            </span>
            <span>Workspace Administrator</span>
          </div>
          <div className="ad-note">
            Please set up the Workspace Administrator
          </div>
        </div>
        <button className="btn btn-primary button">Update</button>
      </FormGroup>
      <FormGroup className="form-group autocomplete">
        <div className="form-group-container">
          <Row md="2">
            <Col>
              <div className="item">work.thuanngo</div>
            </Col>
          </Row>
        </div>
      </FormGroup>
      <FormGroup className="form-group">
        <div className="ws-title d-flex align-items-center">
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
              <g id="archive_cache2018">
                <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path>
              </g>
            </svg>
          </span>
          Archive Workspace
        </div>
        <button className="btn btn-light button">Archive</button>
      </FormGroup>
    </Form>
  );
}

export default WorkspaceSettings
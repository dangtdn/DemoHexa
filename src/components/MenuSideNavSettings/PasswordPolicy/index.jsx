import React from 'react'
import { FormGroup, Form, Input, Label, Row, Col } from 'reactstrap'

import './style.scss'

function PasswordPolicy() {
  return (
    <Form>
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
              <g id="account-key_cache2012">
                <path d="M11,10V12H10V14H8V12H5.83C5.42,13.17 4.31,14 3,14A3,3 0 0,1 0,11A3,3 0 0,1 3,8C4.31,8 5.42,8.83 5.83,10H11M3,10A1,1 0 0,0 2,11A1,1 0 0,0 3,12A1,1 0 0,0 4,11A1,1 0 0,0 3,10M16,14C18.67,14 24,15.34 24,18V20H8V18C8,15.34 13.33,14 16,14M16,12A4,4 0 0,1 12,8A4,4 0 0,1 16,4A4,4 0 0,1 20,8A4,4 0 0,1 16,12Z"></path>
              </g>
            </svg>
          </span>
          Password Policy Setting
        </div>
        <div className="notes">
          For the Password Policy, you can set the following Conditions
        </div>
      </FormGroup>
      <FormGroup check>
        <div className="item-left">
          <Input type="checkbox" />
          <Label check>Check to Enable Developer's Functions</Label>
        </div>
        <div className="item-right">
          <Label>Password Validity Period (Number of days)</Label>
          <Input type="text" disabled defaultValue={"30"} />
        </div>
      </FormGroup>
      <FormGroup check>
        <div className="item-left">
          <Input type="checkbox" />
          <Label check>
            Please Check to set Password Minimum Length Settings
          </Label>
        </div>
        <div className="item-right">
          <Label>Minimum Password length(letters)</Label>
          <Input type="text" disabled defaultValue={"6"} />
        </div>
      </FormGroup>
      <FormGroup check>
        <div className="item-left">
          <Input type="checkbox" />
          <Label check>
            Please Check to set combination of Password Characters
          </Label>
        </div>
        <div className="item-right">
          <Label></Label>
          <Input type="select" disabled>
            <option defaultValue="">No Limit</option>
            <option defaultValue="false">false</option>
          </Input>
        </div>
      </FormGroup>
      <FormGroup check>
        <div className="item-left">
          <Input type="checkbox" />
          <Label check>
            Please Check if you want to limit the number of incorrect log-in
            Attempts
          </Label>
        </div>
        <div className="item-right">
          <Label>
            Number of log-in attempts allowed before User is locked out
          </Label>
          <Input type="text" disabled defaultValue={"5"} />
        </div>
      </FormGroup>
      <FormGroup check>
        <div className="item-left">
          <Input type="checkbox" />
          <Label check>Check if you want to specify a Lockout Time</Label>
        </div>
        <div className="item-right">
          <Label>Lockout Time</Label>
          <Input type="text" disabled defaultValue={"5"} />
        </div>
      </FormGroup>
      <FormGroup check>
        <div className="item-left">
          <Input type="checkbox" />
          <Label check>
            Check if you want to specify Past Password usage Restrictions
          </Label>
        </div>
        <div className="item-right">
          <Label>Usage restrictions on Past Passwords</Label>
          <Input type="text" disabled defaultValue={"2"} />
        </div>
      </FormGroup>
      <FormGroup className="mt-5">
        <button className="btn btn-primary button btn-update__pass">
          Update
        </button>
      </FormGroup>
    </Form>
  );
}

export default PasswordPolicy
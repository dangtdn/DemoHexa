import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, FormGroup, Label, Input, Container } from 'reactstrap'
import { getUserInfo } from '../../../redux/actions/UserAction';
import Images from '../../constants/images';

import './style.scss'

function UserInfo() {

  const {userInfo} = useSelector(state => state.UserReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div className="user-info">
      <Container className='p-3 mb-3'>
        <Row className='mb-5'>
          <Col md="3">
            <div className="user-info__left">
              <div className="avatar-user">
                {/* <img src="https://storage.googleapis.com/linker/pub/default.png" alt="" /> */}
                <img
                  src="https://storage.googleapis.com/linker/pub/default.png"
                  className="img-fluid rounded-circle"
                  alt="Townhouses and Skyscrapers"
                />
              </div>
            </div>
          </Col>
          <Col md="9">
            <div className="user-info__right py-3">
              <Form>
                <FormGroup className='form-group'>
                  <Label for="username">User Name *</Label>
                  <Input
                    className='input-username'
                    id="username"
                    name="username"
                    type="text"
                    defaultValue={userInfo.username}
                  />
                </FormGroup>
                <FormGroup className='form-group'>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder={userInfo.email}
                    type="text"
                    disabled
                  />
                </FormGroup>
                <FormGroup className='form-group'>
                  <Label for="userId">User ID</Label>
                  <Input
                    id="userId"
                    name="userId"
                    placeholder={userInfo.current_workspace_id}
                    type="text"
                    disabled
                  />
                </FormGroup>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="group-btn d-flex justify-content-around align-items-center">
        <button
          type="button"
          className="btn btn-light"
          data-mdb-ripple-color="dark"
        >
          Cancel
        </button>
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}

export default UserInfo
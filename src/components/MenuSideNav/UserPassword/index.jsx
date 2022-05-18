import React from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import {useFormik} from 'formik';
import * as yup from 'yup';

import './style.scss'

function UserPassword() {

  const { handleChange, handleSubmit, errors, handleBlur, touched, isValid } =
      useFormik({
        initialValues: {
          oldPassword: "",
          newPassword: "",
          confirmPassword: ""
        },
        validationSchema: yup.object().shape({
          oldPassword: yup.string().required("This Field is required"),
          newPassword: yup.string().required("This Field is required"),
          confirmPassword: yup.string().required("This Field is required")
        }),
        onSubmit: (values) => {
          
        },
      });

  return (
    <Container>
      <div className="form-password">
        <Form className="py-4 px-2">
            <FormGroup className="form__group field">
              <Input
                type="password"
                className="form__field"
                name="oldPassword"
                id="oldPassword"
                required
                placeholder="Enter ..."
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Label htmlFor="oldPassword" className="form__label">
              Old Password
              </Label>
            </FormGroup>
            <FormGroup className="form__group field">
              <Input
                type="password"
                className="form__field"
                name="newPassword"
                id="newPassword"
                required
                placeholder="Enter ..."
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Label htmlFor="newPassword" className="form__label">
              New Password
              </Label>
            </FormGroup>
            <FormGroup className="form__group field">
              <Input
                type="password"
                className="form__field"
                name="confirmPassword"
                id="confirmPassword"
                required
                placeholder="Enter ..."
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Label htmlFor="confirmPassword" className="form__label">
              Confirm Password
              </Label>
            </FormGroup>
        </Form>
      </div>
      <div className="group-btn">
        <Row md="4" className="justify-content-center">
            <Col>
              <button type="submit" className="btn btn-light btn-block"  data-mdb-ripple-color="dark">
                Cancel
              </button>
            </Col>
            <Col>
              <button type="submit" className="btn btn-light btn-block"  data-mdb-ripple-color="dark">
                Reset
              </button>
            </Col>
            <Col>
              <button type="submit" className="btn btn-light btn-block"  data-mdb-ripple-color="dark" disabled>
                Save
              </button>
            </Col>
          </Row>
      </div>
    </Container>
  );
}

export default UserPassword
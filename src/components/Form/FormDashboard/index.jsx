import React, { Fragment, useState } from 'react'
import { Form, FormGroup, Input, Button, Label, FormFeedback } from 'reactstrap'
import { useFormik } from 'formik';
import * as yup from 'yup';

import './style.scss'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function FormDashboard(props) {

  const {data, isEdit, isDisable, formValues} = props;
  const [isSubmit, setIsSubmit] = useState(false);
    
  const dispatch = useDispatch();
  
  useEffect(() => {
  }, [isSubmit])

  const initialValues = formValues;
    
  const saveValues = formValues;

  const {
      handleSubmit,
      errors,
      touched,
      isValid,
      getFieldProps,
      resetForm,
      values,
      enableReinitialize
  } = useFormik({
    enableReinitialize: true,
    initialValues: (isEdit) ? saveValues : initialValues,
      validationSchema: yup.object().shape({
          name: yup.string().required("This Field is required"),
          // display_id: yup.string().required("This Field is required")
      }),
      onSubmit: (values) => {
        console.log(values)
          resetForm();
      }
  });

  const renderForm = () => {
      return (
        <Fragment>
          <div className="form-content">You can create your New Workspace</div>
          <FormGroup className="form__group field">
            <Input
              type="text"
              className="form__field"
              name="name"
              id="nameEN"
              required
              placeholder="Enter name..."
              {...getFieldProps("name")}
            />
            <Label htmlFor="name" className="form__label">
              Dashboard Name(en) *
            </Label>
          </FormGroup>
          <FormGroup className="form__group field">
            <Input
              type="text"
              className="form__field"
              name="name"
              id="nameJa"
              required
              placeholder="Enter name..."
              {...getFieldProps("name")}
            />
            <Label htmlFor="name" className="form__label">
              Dashboard Name(ja) *
            </Label>
          </FormGroup>
          <FormGroup
            className="d-flex justify-content-around align-items-center py-5"
            check
          >
            <div className="item-left">
              <Input type="checkbox" />
              <Label check>member</Label>
            </div>
            <div className="item-right">
              <Input type="checkbox" />
              <Label check>admin</Label>
            </div>
          </FormGroup>
        </Fragment>
      );
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
          {renderForm()}
          <div className="footer-btn d-flex justify-content-around align-items-center">
            <Button
              className="btn btn-light"
              onClick={() => {
                props.showModal();
              }}
            >
              Cancel
            </Button>
            <Button type="submit" className="btn btn-light" disabled={false}>
              Click
            </Button>
          </div>
        </Form>
    </Fragment>
  );
}

export default FormDashboard
import React, { Fragment, useState } from 'react'
import { Form, FormGroup, Input, Button, Label, FormFeedback, Row, Col } from 'reactstrap'
import { useFormik } from 'formik';
import * as yup from 'yup';

import './style.scss'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SelectTemplate from '../../SelectTemplate';
import SelectActionChart from '../../SelectActionChart';

function FormChart(props) {

  const {data} = props;
  const [isSubmit, setIsSubmit] = useState(false);
    
  const dispatch = useDispatch();
  
  useEffect(() => {
      // dispatch(getListProduct());
  }, [isSubmit])

  const initialValues = {
    chartNameEn: '',
    chartNameJa: ''
  };

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
    initialValues: initialValues,
      validationSchema: yup.object().shape({
          chartNameEn: yup.string().required("This Field is required"),
          chartNameJa: yup.string().required("This Field is required")
      }),
      onSubmit: (values) => {
        console.log(values);
        resetForm();
      }
  });

  const renderForm = () => {
      return (
        <Fragment>
          <FormGroup className="form__group field">
            <Input
              type="text"
              className="form__field"
              name="chartNameEn"
              id="chartNameEn"
              required
              placeholder="Enter chartNameEn..."
              {...getFieldProps("chartNameEn")}
            />
            <Label htmlFor="chartNameEn" className="form__label">
              Chart Name(en) *
            </Label>
          </FormGroup>
          <FormGroup className="form__group field">
            <Input
              type="text"
              className="form__field"
              name="chartNameJa"
              id="chartNameJa"
              required
              placeholder="Enter chartNameJa..."
              {...getFieldProps("chartNameJa")}
            />
            <Label htmlFor="chartNameJa" className="form__label">
              Chart Name(ja) *
            </Label>
          </FormGroup>
          <FormGroup
            className="d-flex justify-content-around align-items-center py-5"
            check
          >
            <div className="item-left">
              <Input type="checkbox" checked disabled/>
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
          <SelectActionChart/>
          <div className="footer-btn d-flex justify-content-around align-items-center">
            <Button
              className="btn btn-light"
              onClick={() => {
                props.showModal();
              }}
            >
              Cancel
            </Button>
            <Button type="submit" className="btn btn-light" disabled={true}>
              Preview
            </Button>
            <Button type="submit" className="btn btn-light" disabled={true}>
              Create
            </Button>
          </div>
        </Form>
    </Fragment>
  );
}

export default FormChart
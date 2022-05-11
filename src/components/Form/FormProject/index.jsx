import React, { Fragment, useState } from 'react'
import { Form, FormGroup, Input, Button, Label, FormFeedback, Row, Col } from 'reactstrap'
import { useFormik } from 'formik';
import * as yup from 'yup';

import './style.scss'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SelectTemplate from '../../SelectTemplate';
import { createNewProject } from '../../../redux/actions/WorkspaceAction';
import { getGetApplicationsAndDatastores } from '../../../redux/actions/DatastoresAction';

function FormProject(props) {

  const {templates} = props;
  const [isSubmit, setIsSubmit] = useState(false);
  const [template, setTemplate] = useState('');
  const dispatch = useDispatch();

  const initialValues = {
    nameEn: '',
    nameJa: ''
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
          nameEn: yup.string().required("This Field is required"),
          nameJa: yup.string().required("This Field is required")
      }),
      onSubmit: (values) => {
        const wp_id = localStorage.getItem("workspace_id");
        const data = {
          "name": {
            "en": values.nameEn,
            "ja": values.nameJa
          },
          "tp_id": template.tp_id,
          "workspace_id": wp_id
        }
        dispatch(createNewProject(data));
        props.setLoad(!isSubmit);
        resetForm();
      }
  });

  const renderForm = () => {
      return (
        <Fragment>
          <div className="form-content">Enter the new Project Name</div>
          <Row sm="4">
            <Col>
              <FormGroup className="form__group field">
                <Input
                  type="text"
                  className="form__field"
                  name="nameEn"
                  id="nameEn"
                  required
                  placeholder="Enter nameEn..."
                  {...getFieldProps("nameEn")}
                />
                <Label htmlFor="nameEn" className="form__label">
                  Project Name(en) *
                </Label>
                {errors.nameEn && touched.nameEn ? (
                  <FormFeedback className="d-block">
                    {errors.nameEn}
                  </FormFeedback>
                ) : (
                  ""
                )}
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="form__group field">
                <Input
                  type="text"
                  className="form__field"
                  name="nameJa"
                  id="nameJa"
                  required
                  placeholder="Enter nameJa..."
                  {...getFieldProps("nameJa")}
                />
                <Label htmlFor="nameJa" className="form__label">
                  Project Name(en) *
                </Label>
                {errors.nameJa && touched.nameJa ? (
                  <FormFeedback className="d-block">
                    {errors.nameJa}
                  </FormFeedback>
                ) : (
                  ""
                )}
              </FormGroup>
            </Col>
          </Row>
        </Fragment>
      );
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
          {renderForm()}
          <SelectTemplate 
          setTemplate={setTemplate}
          templates={templates}
          />
          <div className="footer-btn d-flex justify-content-around align-items-center">
            <Button
              className="btn btn-light"
              onClick={() => {
                props.showModal();
              }}
            >
              Cancel
            </Button>
            <Button type="submit" className="btn btn-light" disabled={!isValid}>
              Click
            </Button>
          </div>
        </Form>
    </Fragment>
  );
}

export default FormProject
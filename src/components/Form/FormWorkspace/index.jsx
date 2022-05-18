import React, { Fragment, useState } from 'react'
import { Form, FormGroup, Input, Button, Label, FormFeedback } from 'reactstrap'
import { useFormik } from 'formik';
import * as yup from 'yup';

import './style.scss'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createNewWorkspace } from '../../../redux/actions/WorkspaceAction';

function FormWorkspace(props) {

  const {data, isEdit, isDisable, formValues} = props;
  const [isSubmit, setIsSubmit] = useState(false);
    
  const dispatch = useDispatch();
  
  useEffect(() => {
      // dispatch(getListProduct());
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
        dispatch(createNewWorkspace(values));
        setIsSubmit(!isSubmit);
        resetForm();
      }
  });

  const renderForm = () => {
    if (data.type === 4) {
      return (
        <Fragment>
          <div className="form-content">
            You can create your New Workspace
          </div>
          <FormGroup className="form__group field">
            <Input
              type="text"
              className="form__field"
              name="name"
              id="name"
              required
              placeholder="Enter name..."
              {...getFieldProps("name")}
            />
            <Label htmlFor="name" className="form__label">
              Workspace Name *
            </Label>
            {errors.nameWS && touched.nameWS ? (
                    <FormFeedback className='d-block'>
                    {errors.nameWS}
                    </FormFeedback>
                ) : ("") 
                }
          </FormGroup>
        </Fragment>
      )
    }
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
            <Button type="submit" className="btn btn-light" disabled={!isValid}>
              Click
            </Button>
          </div>
        </Form>
    </Fragment>
  );
}

export default FormWorkspace
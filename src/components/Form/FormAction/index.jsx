import React, { Fragment, useState } from 'react'
import { Form, FormGroup, Input, Button, Label, FormFeedback } from 'reactstrap'
import { useFormik } from 'formik';
import * as yup from 'yup';

import './style.scss'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createToGroup, deleteGroup, getGroupTree, updateGroup } from '../../../redux/actions/GroupAction';

function FormAction(props) {

  const {data, isEdit, isDisable, formValues} = props;
  const [isSubmit, setIsSubmit] = useState(false);
    
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(getGroupTree());
  }, [isSubmit])

  const initialValues = {
    name: '',
    display_id: ''
  };;
    
  const saveValues = {
    name: formValues.name,
    display_id: formValues.display_id
  };;

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
          display_id: yup.string().required("This Field is required")
      }),
      onSubmit: (values) => {
        console.log(values)
          if (data.type === 1) {
            dispatch(createToGroup(values));
            setIsSubmit(!isSubmit);
          }
          else if (data.type === 2) {
            dispatch(updateGroup(values, formValues.id));
            setIsSubmit(!isSubmit);
          }
          else if (data.type === 3) {
            dispatch(deleteGroup(saveValues, formValues.id));
            setIsSubmit(!isSubmit);
          }
          resetForm();
      }
  });

  const renderForm = () => {
    if (data.type === 1) {
      return (
        <Fragment>
          <div className="form-content">
            Enter the new Group Name
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
              Group Name *
            </Label>
            {errors.name && touched.name ? (
                    <FormFeedback className='d-block'>
                    {errors.name}
                    </FormFeedback>
                ) : ("") 
                }
          </FormGroup>
          <FormGroup className="form__group field">
            <Input
              type="text"
              className="form__field"
              name="display_id"
              id="display_id"
              required
              placeholder="Enter display_id..."
              {...getFieldProps("display_id")}
            />
            <Label htmlFor="name" className="form__label">
              {/* {t('content.title__password')} */}
              Group ID *
            </Label>
            {errors.display_id && touched.display_id ? (
                    <FormFeedback className='d-block'>
                    {errors.display_id}
                    </FormFeedback>
                ) : ("") 
                }
          </FormGroup>
          <FormGroup className='my-5' check>
            <div className="item-left">
              <Input type="checkbox" />
              <Label check>
              Disable HexabaseUI Access
              </Label>
            </div>
            <div className="item-right"></div>
          </FormGroup>
        </Fragment>
      )
    }
    else if (data.type === 2) {
      return (
        <Fragment>
          <div className="form-content">
            Enter the new Group Name
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
              Group Name *
            </Label>
            {errors.name && touched.name ? (
                    <FormFeedback className='d-block'>
                    {errors.name}
                    </FormFeedback>
                ) : ("") 
                }
          </FormGroup>
          <FormGroup className="form__group field">
            <Input
              type="text"
              className="form__field"
              name="display_id"
              id="display_id"
              required
              placeholder="Enter display_id..."
              {...getFieldProps("display_id")}
            />
            <Label htmlFor="name" className="form__label">
              {/* {t('content.title__password')} */}
              Group ID *
            </Label>
            {errors.display_id && touched.display_id ? (
                    <FormFeedback className='d-block'>
                    {errors.display_id}
                    </FormFeedback>
                ) : ("") 
                }
          </FormGroup>
          <FormGroup className='my-5' check>
            <div className="item-left">
              <Input type="checkbox" />
              <Label check>
              Disable HexabaseUI Access
              </Label>
            </div>
            <div className="item-right"></div>
          </FormGroup>
        </Fragment>
      )
    }
    else if (data.type === 3) {
      return (
        <Fragment>
          <div className="form-content">
            Are you sure?
          </div>
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
              <Button type="submit" className="btn btn-light" disabled={false}>
              Click
            </Button>
          </div>
        </Form>
    </Fragment>
  );
}

export default FormAction
import React, { Fragment, useState } from 'react'
import { Form, FormGroup, Input, Button, Label, FormFeedback } from 'reactstrap'
import { useFormik } from 'formik';
import { useForm } from "react-hook-form";
import * as yup from 'yup';

import './style.scss'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function FormDataFilter(props) {

    const {data, isEdit, isDisable, formValues} = props;
    const [isSubmit, setIsSubmit] = useState(false);
    const [select, setSelect] = useState('Select Search Field');
    const [indexes, setIndexes] = useState([]);
    const [counter, setCounter] = useState(0);
    // const { register, handleSubmit } = useForm();
      
    const dispatch = useDispatch();
    
    useEffect(() => {
    }, [isSubmit])
  
    const initialValues = {
        name: '',
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
      initialValues: initialValues,
        validationSchema: yup.object().shape({
            name: yup.string().required("This Field is required"),
            // display_id: yup.string().required("This Field is required")
        }),
        onSubmit: (values) => {
            console.log(values)
            resetForm();
        }
    });

    const onSubmit = data => {
      console.log(data);
    };
  
    const addFriend = () => {
      setIndexes(prevIndexes => [...prevIndexes, counter]);
      setCounter(prevCounter => prevCounter + 1);
    };
  
    const removeFriend = index => () => {
      setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
      setCounter(prevCounter => prevCounter - 1);
    };
  
    const clearFriends = () => {
      setIndexes([]);
    };

    const handleSelectFilter = () => {
      document.querySelector('.select-filter-container').classList.toggle('collapse-select');
    };
    
    const handleSelected = (item) => {
        console.log(item)
        setSelect(item);
    };
  
    const renderForm = () => {
        return (
          <Fragment>
            <div className="form-select-filter">
              <div className="select-filter d-flex justify-content-between align-items-center">
                <div
                  className="group-select-filter d-flex justify-content-left align-items-center"
                  onClick={() => {
                    handleSelectFilter();
                  }}
                >
                  <span className="selected-info">{select}</span>
                  <span>
                    <i className="fa-solid fa-chevron-down" />
                  </span>
                </div>
                <div className="select-filter-actions d-flex justify-content-center align-items-center">
                  <button>
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
                        <g id="minus-circle-outline_cache466">
                          <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                  <button onClick={() => addFriend()}>
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
                        <g id="plus-circle-outline_cache467">
                          <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              {indexes.map((index) => {
                const fieldName = `friends[${index}]`;
                return (
                  <fieldset
                    name={fieldName}
                    key={fieldName}
                    className="select-filter d-flex justify-content-between align-items-center"
                  >
                    <div
                      className="group-select-filter d-flex justify-content-left align-items-center"
                      onClick={() => {
                        handleSelectFilter();
                      }}
                    >
                      <span className="selected-info">{select}</span>
                      <span>
                        <i className="fa-solid fa-chevron-down" />
                      </span>
                    </div>
                    <div className="select-filter-actions d-flex justify-content-center align-items-center">
                      <button onClick={removeFriend(index)}>
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
                            <g id="minus-circle-outline_cache466">
                              <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"></path>
                            </g>
                          </svg>
                        </span>
                      </button>
                      <button onClick={() => addFriend()}>
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
                            <g id="plus-circle-outline_cache467">
                              <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"></path>
                            </g>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </fieldset>
                );
              })}
              <div className="select-filter-container">
                <div className="list-select-filter">
                  {/* {arrProduct?.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        className="item"
                        onClick={() => {
                          props.handleSelected(item);
                        }}
                        to={`/h/${item.workspace_id}`}
                      >
                        {item.workspace_name}
                      </Link>
                    );
                  })} */}
                  <div
                    className="item create-filter"
                    onClick={() => {
                      handleSelected("Create Workspace");
                    }}
                  >
                    + Create Workspace
                  </div>
                </div>
              </div>
            </div>
            <FormGroup className=" py-5" check>
              <div className="item-left">
                <Input type="checkbox" />
                <Label check>Search by OR condition</Label>
              </div>
              <div className="item-right">
                <Input type="checkbox" />
                <Label check>Save this as the default search conditions</Label>
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
              <Button onClick={clearFriends} type="button" className="btn btn-light" disabled={false}>
                Clear Filter
              </Button>
              <Button type="button" className="btn btn-chart" disabled={false}>
                Filter
              </Button>
            </div>
          </Form>
      </Fragment>
    );
}

export default FormDataFilter
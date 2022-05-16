import React from 'react'
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import FormAction from '../../../components/Form/FormAction';
import FormChart from '../../../components/Form/FormChart';
import FormDashboard from '../../../components/Form/FormDashboard';
import FormDataFilter from '../../../components/Form/FormDataFilter';
import FormProject from '../../../components/Form/FormProject';
import FormWorkspace from '../../../components/Form/FormWorkspace';
import { getTemplate } from '../../../redux/actions/WorkspaceAction';

import './style.scss'

function ModalFormAction(props) {

  const {isShow, data, isEdit, isDisable, formValues} = props;
  
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    getTemplateApi();
  },[])

  const getTemplateApi = async () => {
    const data = await getTemplate();
    setTemplates(data);
  }

  const renderForm = () => {
    if (data.type === 3) {
      return (
        <FormDataFilter
          showModal={props.showModal}
          data={data}
          isEdit={isEdit}
          isDisable={isDisable}
          />
      )
    }
    if (data.type === 4) {
      return (
        <FormWorkspace
          showModal={props.showModal}
          formValues={formValues}
          data={data}
          isEdit={isEdit}
          isDisable={isDisable}
          />
      )
    } else if (data.type === 5) {
      return (
        <FormDashboard
          showModal={props.showModal}
          formValues={formValues}
          data={data}
          isEdit={isEdit}
          isDisable={isDisable}
          />
      )
    } else if (data.type === 6) {
      return (
          <FormProject
            showModal={props.showModal}
            data={data}
            templates={templates}
            setLoad={props.setLoad}
            />
      )
    }else if (data.type === 7) {
      return (
          <FormChart
            showModal={props.showModal}
            data={data}
            selectTemplate={props.selectTemplate}
            />
      )
    } else {
      return (
        <FormAction 
          showModal={props.showModal}
          formValues={formValues}
          data={data}
          isEdit={isEdit}
          isDisable={isDisable}
          />
      )
    }
  }

  return (
    <Fragment>
      <Modal className='modal-action' isOpen={isShow} toggle={props.showModal}>
        <ModalHeader>
          <span>
            {(data) ? data.title : 'Create a new Group'}
          </span>
        </ModalHeader>
        <ModalBody
      style={{minHeight:'200px', maxHeight: '600px', overflowY:'auto'}}
      >
          {renderForm()}
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

export default ModalFormAction
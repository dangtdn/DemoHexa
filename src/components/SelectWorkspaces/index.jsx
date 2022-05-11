import React, { Fragment, useState } from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import ModalFormAction from '../../commons/Modal/ModalFormAction';
import { selectWorkspace } from '../../redux/actions/WorkspaceAction';

function SelectWorkspaces(props) {
  
    const {arrProduct} = useSelector(state => state.WorkspaceReducer);
    const {select} = props;
    
    const [isShow, setIsShow] = useState(false);
    const [data, setData] = useState({
        type: 0,
        title: ''
    });
    const [values, setValues] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
      if (arrProduct.length > 0) {
        if (select === 'Select workspace') {
          dispatch(selectWorkspace(arrProduct[0].workspace_id));
          localStorage.setItem('workspace_name', arrProduct[0].workspace_name);
          localStorage.setItem('workspace_id', arrProduct[0].workspace_id);
          props.setSelect(arrProduct[0].workspace_name);
        }
      }
    }, [arrProduct, select]);
  
    const showModal = () => setIsShow(!isShow);
  
    const showModalFormAdd = () => {
      setIsShow(!isShow);
      setData({
        type: 4,
        title: 'Create a New Workspace'
      });
    };

    const handleSelectWs = () => {
      document.querySelector('.select-container').classList.toggle('collapse-select');
    };

  return (
    <Fragment>
      <div
        className="group-select-ws d-flex justify-content-left align-items-center"
        onClick={() => {
          handleSelectWs();
        }}
      >
        <span className="selected-info">{select}</span>
        <span>
          <i className="fa-solid fa-chevron-down" />
        </span>
      </div>
      <div className="select-container">
        <div className="list-select-ws">
          {arrProduct?.map((item, index) => {
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
          })}
          <div className="item create-ws"
          onClick={() => {showModalFormAdd()}}
          >+ Create Workspace</div>
        </div>
      </div>
          {values != null ? (
              <ModalFormAction
                formValues={values}
                isShow={isShow}
                showModal={showModal}
                data={data}
              />
            ) : (
              <ModalFormAction
                formValues={{
                  name: ""
                }}
                isShow={isShow}
                showModal={showModal}
                data={data}
              />
            )}
    </Fragment>
  );
}

export default SelectWorkspaces
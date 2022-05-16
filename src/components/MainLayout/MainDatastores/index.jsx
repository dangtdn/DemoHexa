import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import ModalFormAction from '../../../commons/Modal/ModalFormAction';
import SlideBar from '../../../commons/SlideBar';
import { getPaginationWithSearch } from '../../../redux/actions/DatastoresAction';
import Template2 from '../../TemplateProject/Template2';

import './style.scss'

function MainDatastores(props) {

    const {datatoresCurr} = props;
    const [data, setData] = useState({
        type: 0,
        title: ''
    });
    const [isShow, setIsShow] = useState(false);
    const dispatch = useDispatch();
  
    const showModal = () => setIsShow(!isShow);
  
    const showModalForm = () => {
      setIsShow(!isShow);
      setData({
        type: 3,
        title: 'Data Filter'
      });
    };
  
    const handeRenderTable = (item) => {
      console.log(item)
      const data  = {
        "project_id": item.p_id,
        "datastore_id": item.d_id,
        "conditions": [],
        "page": 1,
        "per_page": 100,
        "return_count_only": false,
        "omit_total_items": true
      }
      dispatch(getPaginationWithSearch(data));
    };

    const handlecloseShowCreate = () => {
      if (document.querySelector('.menu-content-dashboard.active'))
        document.querySelector('.menu-content-dashboard').classList.remove('active');
      else if (document.querySelector('.menu-content-datareport.active'))
        document.querySelector('.menu-content-datareport').classList.remove('active');
    }

  return (
    <div className='wrapper'>
        <SlideBar 
        datatoresCurr={datatoresCurr}
        handeRenderTable={handeRenderTable}
        />
        <div
          className="main-container"
          onClick={() => {
            handlecloseShowCreate();
          }}
        >
          <div className="header-items-menu d-flex justify-content-between align-items-center">
            <div className="title d-flex align-items-center">
              <span>
                <i className="fa-solid fa-database"></i>
              </span>
              <p>Users</p>
            </div>
            <div className="settings">
              <span>
                <i className="fa-solid fa-gear"></i>
              </span>
            </div>
          </div>
          <Template2
          showModalForm={showModalForm}
          />
        </div>
        <ModalFormAction
          isShow={isShow}
          showModal={showModal}
          data={data}
        />
    </div>
  );
}

export default MainDatastores
import React, { useState } from 'react'
import ModalFormAction from '../../../commons/Modal/ModalFormAction';
import SlideBar from '../../../commons/SlideBar';
import Template2 from '../../TemplateProject/Template2';

import './style.scss'

function MainDatastores(props) {

    const {datatoresCurr, title} = props;
    const [render, setRender] = useState(1);
    const [data, setData] = useState({
        type: 0,
        title: ''
    });
    const [isShow, setIsShow] = useState(false);
  
    const showModal = () => setIsShow(!isShow);
  
    const showModalForm = () => {
      setIsShow(!isShow);
      setData({
        type: 3,
        title: 'Data Filter'
      });
    };

    const handlecloseShowCreate = () => {
      if (document.querySelector('.menu-content-dashboard.active'))
        document.querySelector('.menu-content-dashboard').classList.remove('active');
      else if (document.querySelector('.menu-content-datareport.active'))
        document.querySelector('.menu-content-datareport').classList.remove('active');
    }

    const renderMainDatatores = () => {
      if (render === 1) {
        return (
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
                <p>{title}</p>
              </div>
              <div className="settings"
              onClick={() => setRender(2)}
              >
                <span>
                  <i className="fa-solid fa-gear"></i>
                </span>
              </div>
            </div>
            <Template2
            showModalForm={showModalForm}
            />
          </div>
        )
      }
      else if (render === 2) {
        return (
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
                <p>roomList Settings</p>
              </div>
              <div className="settings"
              onClick={() => setRender(2)}
              >
                <span>
                  <i className="fa-solid fa-gear"></i>
                </span>
              </div>
            </div>
            <Template2/>
          </div>
        )
      }
    }

  return (
    <div className='wrapper'>
        <SlideBar 
        datatoresCurr={datatoresCurr}
        handeRenderTable={props.handeRenderTable}
        setRenderItem={props.setRenderItem}
        />
        {renderMainDatatores()}
        <ModalFormAction
          isShow={isShow}
          showModal={showModal}
          data={data}
        />
    </div>
  );
}

export default MainDatastores
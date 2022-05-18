import React, { useEffect, useState } from 'react'
import SlideBar from '../../../commons/SlideBar';
import Template5 from '../../TemplateProject/Template5';

import './style.scss'

function MainDataReport(props) {

  const {datatoresCurr} = props;
  const [titleReport, setTitleReport] = useState('');

  useEffect(() => {

  }, [titleReport])

  const handlecloseShowCreate = () => {
    if (document.querySelector('.menu-content-dashboard.active'))
      document.querySelector('.menu-content-dashboard').classList.remove('active');
    else if (document.querySelector('.menu-content-datareport.active'))
      document.querySelector('.menu-content-datareport').classList.remove('active');
  }

  return (
    <div className='wrapper'>
        <SlideBar 
        setTitleReport={setTitleReport}
        datatoresCurr={datatoresCurr}
        />
        <div className="main-container"  onClick={() => {handlecloseShowCreate()}}>
            <Template5 titleReport={titleReport}/>
        </div>
    </div>
  )
}

export default MainDataReport
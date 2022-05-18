import React, { Fragment, useState } from 'react'
import Header from '../../commons/Header';
import MainCreateData from '../../components/MainLayout/MainCreateData';

function PageCreateData() {
    const [datatoresCurr, setDatastoresCurr] = useState({});
    const [render, setRender] = useState(1);
  
    return (
      <Fragment>
        <Header 
        setDatastoresCurr={setDatastoresCurr}
        />
        <MainCreateData
        datatoresCurr={datatoresCurr}
        render={render}
        setRender={setRender}
        />
      </Fragment>
    )
}

export default PageCreateData
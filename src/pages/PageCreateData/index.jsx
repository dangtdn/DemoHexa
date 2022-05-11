import React, { Fragment, useState } from 'react'
import Header from '../../commons/Header';
import MainCreateData from '../../components/MainLayout/MainCreateData';

function PageCreateData() {
    const [datatoresCurr, setDatastoresCurr] = useState({});
  
    return (
      <Fragment>
        <Header 
        setDatastoresCurr={setDatastoresCurr}
        />
        <MainCreateData
        datatoresCurr={datatoresCurr}
        />
      </Fragment>
    )
}

export default PageCreateData
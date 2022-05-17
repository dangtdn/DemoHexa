import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../commons/Header'
import ItemViewSideNav from '../../components/ItemViewSideNav';
import MainDatastores from '../../components/MainLayout/MainDatastores';

function Datastores() {
  const [datatoresCurr, setDatastoresCurr] = useState({});

  return (
    <Fragment>
    <Header 
    setDatastoresCurr={setDatastoresCurr}
    />
    <MainDatastores
    datatoresCurr={datatoresCurr}
    />
    {/* <ItemViewSideNav/> */}
    </Fragment>
  )
}

export default Datastores
import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../commons/Header'
import MainDataReport from '../../components/MainLayout/MainDataReport';

function DataReport() {
  const [datatoresCurr, setDatastoresCurr] = useState({});

  return (
    <Fragment>
    <Header
    setDatastoresCurr={setDatastoresCurr}
    />
    <MainDataReport
    datatoresCurr={datatoresCurr}
    />
    </Fragment>
  )
}

export default DataReport
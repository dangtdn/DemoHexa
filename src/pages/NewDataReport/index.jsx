import React, { Fragment, useState } from 'react'
import Header from '../../commons/Header'
import MainNewDataReport from '../../components/MainLayout/MainNewDataReport'

function NewDataReport() {
  const [datatoresCurr, setDatastoresCurr] = useState({});

  return (
    <Fragment>
    <Header
    setDatastoresCurr={setDatastoresCurr}
    />
    <MainNewDataReport
    datatoresCurr={datatoresCurr}
    />
    </Fragment>
  )
}

export default NewDataReport
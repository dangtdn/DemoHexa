import React, { Fragment, useState } from 'react'
import Header from '../../commons/Header'
import MainHome from '../../components/MainLayout/MainHome'

function Workspace() {
  const [datatoresCurr, setDatastoresCurr] = useState({});

  return (
    <Fragment>
      <Header 
      setDatastoresCurr={setDatastoresCurr}
      />
      <MainHome
      />
    </Fragment>
  )
}

export default Workspace
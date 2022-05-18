import React, { Fragment, useState } from 'react'
import Header from '../../../commons/Header';
import MainImportEvent1 from '../../../components/MainLayout/MainImportEvent1';

function PageImportEvent1() {
  const [datatoresCurr, setDatastoresCurr] = useState({});

  return (
    <Fragment>
      <Header 
      setDatastoresCurr={setDatastoresCurr}
      />
      <MainImportEvent1
      datatoresCurr={datatoresCurr}
      />
    </Fragment>
  )
}

export default PageImportEvent1
import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../commons/Header'
import MainDashboard from '../../components/MainLayout/MainDashboard';

function Dashboard() {
  const [datatoresCurr, setDatastoresCurr] = useState({});

  return (
    <Fragment>
    <Header 
    setDatastoresCurr={setDatastoresCurr}
    />
    <MainDashboard
    datatoresCurr={datatoresCurr}
    />
    </Fragment>
  )
}

export default Dashboard
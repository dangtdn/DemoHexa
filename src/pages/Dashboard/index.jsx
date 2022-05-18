import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../commons/Header'
import MainDashboard from '../../components/MainLayout/MainDashboard';

function Dashboard() {
  const [datatoresCurr, setDatastoresCurr] = useState({});
  const [render, setRender] = useState(1);

  return (
    <Fragment>
    <Header 
    setDatastoresCurr={setDatastoresCurr}
    />
    <MainDashboard
    datatoresCurr={datatoresCurr}
    setRender={setRender}
    render={render}
    />
    </Fragment>
  )
}

export default Dashboard
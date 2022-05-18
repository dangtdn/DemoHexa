import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Header from '../../../commons/Header';
import MainImportEvent2 from '../../../components/MainLayout/MainImportEvent2';
import { getTempCollectionItem } from '../../../redux/actions/DatastoresAction';

function PageImportEvent2() {
  const [datatoresCurr, setDatastoresCurr] = useState({});
  const dispatch = useDispatch();
  
  useEffect(() => {
    const collection_id = localStorage.getItem("collection_id");
    dispatch(getTempCollectionItem(collection_id));
  },[])

  return (
    <Fragment>
      <Header 
      setDatastoresCurr={setDatastoresCurr}
      />
      <MainImportEvent2
      datatoresCurr={datatoresCurr}
      />
    </Fragment>
  )
}

export default PageImportEvent2
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Header from '../../commons/Header'
import ItemViewSideNav from '../../components/ItemViewSideNav';
import MainDatastores from '../../components/MainLayout/MainDatastores';
import { getDatastoresFieldsLayout, getPaginationWithSearch } from '../../redux/actions/DatastoresAction';

function Datastores() {
  const [datatoresCurr, setDatastoresCurr] = useState({});
  const [renderItem, setRenderItem] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handeRenderTable = (item) => {
    setTitle(item.name);
    const data  = {
      "project_id": item.p_id,
      "datastore_id": item.d_id,
      "conditions": [],
      "page": 1,
      "per_page": 100,
      "return_count_only": false,
      "omit_total_items": true
    }
    dispatch(getPaginationWithSearch(data));
    dispatch(getDatastoresFieldsLayout(item.d_id));
  };

  return (
    <Fragment>
    <Header 
    setDatastoresCurr={setDatastoresCurr}
    handeRenderTable={handeRenderTable}
    setTitle={setTitle}
    />
    <MainDatastores
    datatoresCurr={datatoresCurr}
    setRenderItem={setRenderItem}
    handeRenderTable={handeRenderTable}
    title={title}
    setTitle={setTitle}
    />
    <ItemViewSideNav
    renderItem={renderItem}
    />
    </Fragment>
  )
}

export default Datastores
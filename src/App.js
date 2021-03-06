import { Switch, Route, Redirect, Routes } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './App.scss';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";
import HomeWorkSpace from "./pages/HomeWorkSpace";
import DataReport from "./pages/DataReport";
import Datastores from "./pages/Datastores";
import NewDataReport from "./pages/NewDataReport";
import { useEffect, useState } from "react";
import { setTimeCheckDevice, setTimeOutLogOut } from './commons/SetTime/SetTime';
import Dashboard from "./pages/Dashboard";
import PageCreateData from "./pages/PageCreateData";
import PageImportEvent1 from "./pages/PageCreateData/PageImportEvent1";
import PageImportEvent2 from "./pages/PageCreateData/PageImportEvent2";

export const history =  createBrowserHistory();

function App() {

  const [load, setLoad] = useState(false);
  
  useEffect(() => {
    setTimeOutLogOut(load, setLoad);
  },[load]);
  
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      return;
    }
    else {
      history.push('/login');
    }
  },[]);

  return (
    <Routes>
      <Route>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
      <Route>
        <Route path='/h/:idWorkspace' element={<Workspace />} />
      </Route>
      <Route>
        <Route path='/h/:idWorkspace/home' element={<HomeWorkSpace />} />
      </Route>
      <Route>
        <Route path='/pj/:project_id/ds/:datastore_id/list/all' element={<Datastores />} />
      </Route>
      <Route>
        <Route path='/w/:idWorkspace/pj/:project_id/create_ds' element={<PageCreateData/>} />
      </Route>
      <Route>
        <Route path='/w/:idWorkspace/pj/:project_id/data_source/1' element={<PageImportEvent1/>} />
      </Route>
      <Route>
        <Route path='/w/:idWorkspace/pj/:project_id/data_preview/:collection_id/2' element={<PageImportEvent2/>} />
      </Route>
      {/* <Route>
        <Route path='/pj/:project_id/ds/:datastore_id/settings' element={<SettingDataBase />} />
      </Route> */}
      <Route>
        <Route path='/pj/:project_id/dashboard/:dashboard_id' element={<Dashboard />} />
      </Route>
      <Route>
        <Route path='/pj/:project_id/rp/new/0' element={<NewDataReport />} />
      </Route>
      <Route>
        <Route path='/pj/:project_id/rp/:dataReport_id' element={<DataReport />} />
      </Route>

    </Routes>

  );
}

export default App;

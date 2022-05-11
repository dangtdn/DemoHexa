import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from 'redux-thunk';
import { LoadingReducer } from "./reducers/LoadingReducer";
import { UserReducer } from "./reducers/UserReducer";
import { WorkspaceReducer } from "./reducers/WorkspaceReducer";
import { GroupReducer } from "./reducers/GroupReducer";
import { DatastoresReducer } from "./reducers/DatastoresReducer";
import { DataReportReducer } from "./reducers/DataReportReducer";

const rootReducer = combineReducers({
    WorkspaceReducer: WorkspaceReducer,
    GroupReducer: GroupReducer,
    LoadingReducer: LoadingReducer,
    DatastoresReducer: DatastoresReducer,
    DataReportReducer: DataReportReducer,
    UserReducer: UserReducer
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
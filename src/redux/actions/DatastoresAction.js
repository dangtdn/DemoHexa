import datastoresServices from "../../services/datastoresServices";

export const getGetApplicationsAndDatastores = () => {

    return async (dispatch) => {
        const response = await datastoresServices.getGetApplicationsAndDatastores();
        
        dispatch({
            type: "LAY_DANH_SACH_DATASTORES",
            data: response
        })
    };
};

export const getListItemDatastores = (values) => {

    return  (dispatch) => {
        
        dispatch({
            type: "LAY_DANH_SACH_ITEM_DATASTORES",
            data: values
        })
    };
};

export const getPaginationWithSearch = (data) => {

    return async (dispatch) => {
        const response = await datastoresServices.getPaginationWithSearch(data);
        console.log('action: ', response)
        dispatch({
            type: "LAY_DANH_SACH_TABLE",
            data: response
        })
    };
};

export const getTempCollectionItem = (collectionId) => {

    return async (dispatch) => {
        const response = await datastoresServices.getTempCollectionItem(collectionId);
        console.log('action: ', response)
        dispatch({
            type: "LAY_DANH_SACH_TABLE_IMP_DATA",
            data: response
        })
    };
};

export const getDatastoresFieldsLayout = (datastore_id) => {

    return async (dispatch) => {
        const response = await datastoresServices.getDatastoresFieldsLayout(datastore_id);
        console.log('action: ', response)
        dispatch({
            type: "LAY_DANH_SACH_DATA_FIELDS_LAYOUT",
            data: response
        })
    };
};

export const importData = async (data) => {

    const response = await datastoresServices.importData(data);
    console.log('action: ', response)
    return response;
};

export const postNewItemHistory = async (data) => {
    
    const response = await datastoresServices.postNewItemHistory(data);
    console.log('action: ', response)
    return response;
};

export const createNewItemRecord = async (data) => {
    const dt = {
        "w_id": "6229519c27dd3402e9f4bc7d",
        "p_id": "626664b227fd92a5cedb3e21",
        "item_id": "627ca79d59ea9a39b0edf5e0",
        "item": {
            "status_id": "626664b327fd92a5cedb3e46",
            "p_id": "626664b227fd92a5cedb3e21",
            "d_id": "626664b327fd92a5cedb3e2a",
            "a_id": "626664b427fd92a5cedb3e4e",
            "626664b327fd92a5cedb3e40": "h123",
            "626664b327fd92a5cedb3e3c": "13:49+09:00",
            "626664b327fd92a5cedb3e3b": "12:48+09:00",
            "626664b327fd92a5cedb3e38": "2022-05-14T05:00:00.000Z",
            "626664b327fd92a5cedb3e37": "2022-05-05T05:00:00.000Z",
            "626664b327fd92a5cedb3e33": "0908765555",
            "626664b327fd92a5cedb3e32": "saveemail@gmail.com",
            "626664b327fd92a5cedb3e31": "email@gmail.com",
            "626664b327fd92a5cedb3e30": "user",
            "626664b327fd92a5cedb3e2f": "store",
            "626664b327fd92a5cedb3e2d": "room123",
            "626664b327fd92a5cedb3e2b": "123"
        },
        "a_id": "626664b427fd92a5cedb3e4e",
        "d_id": "626664b327fd92a5cedb3e2a",
        "status_id": "626664b327fd92a5cedb3e46",
        "user_id": "62294f8fa7311bddd6de4ffb"
    };
    const response = await datastoresServices.createNewItemRecord(dt);
    console.log('action: ', response)
    return response;
};

export const getItemPost = (item_id, datastore_id) => {

    return async (dispatch) => {
        const response = await datastoresServices.getItemPost(item_id, datastore_id);
        console.log('action: ', response)
        dispatch({
            type: "LAY_DANH_SACH_COMMENT",
            data: response
        })
    };
};

export const getNewItemId = async () => {

    const response = await datastoresServices.getNewItemId();
    console.log('action: ', response)
    return response;
};
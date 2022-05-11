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
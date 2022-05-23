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

export const getTemplates = async (project_id, workspace_id) => {

    const response = await datastoresServices.getTemplates(project_id, workspace_id);
    return response;
};

export const createDatastoreFromTemplate = async (data) => {
    // {
    //   "user_id": "62294f8fa7311bddd6de4ffb",
    //   "workspace_id": "622f7faecea395f291e92637",
    //   "project_id": "6232fcacbb2a43687934cb76",
    //   "template_name": "GROUPTREE",
    //   "lang_cd": "en"
    // }
    const response = await datastoresServices.createDatastoreFromTemplate(data);

    return response;
};
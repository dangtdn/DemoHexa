import workspaceServices from "../../services/workspaceServices";

export const getWorkspace = () => {

    return async (dispatch) => {
        const response = await workspaceServices.getWorkspace();
        console.log(response)
        dispatch({
            type: 'LAY_DANH_SACH_SAN_PHAM',
            data: response.workspaces
        })
    };
};

export const selectWorkspace = (id) => {

    return async (dispatch) => {
        dispatch({
            type: 'openLoading'
        });
        const response = await workspaceServices.selectWorkspace(id);
        console.log('Select successfully');

        setTimeout(async () => {
            
            dispatch({
                type: 'closeLoading'
            });
        }, 1000); 
    };
}

export const createNewWorkspace = (sanPham) => {

    return async (dispatch) => {
        const response = await workspaceServices.createNewWorkspace(sanPham);
        
        dispatch({
            type: "THEM_SAN_PHAM",
            data: sanPham
        })
    };
}

export const createNewProject = (data) => {

    return async (dispatch) => {
        const response = await workspaceServices.createNewProject(data);
        console.log('successful');
    };
}

export const getTemplate = async () => {

    const response = await workspaceServices.getTemplate();
    console.log(response);
    return response;
};

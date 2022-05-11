import userServices from "../../services/userServices";

export const getUserInfo = () => {

    return async (dispatch) => {
        const response = await userServices.getUserInfo();
        
        dispatch({
            type: 'LAY_THONG_TIN_NGUOI_DUNG',
            data: response
        })
    };
};

export const getUserInGroup = (id) => {

    return async (dispatch) => {
        const response = await userServices.getUserInGroup(id);
        
        dispatch({
            type: 'LAY_DANH_SACH_GROUP_NGUOI_DUNG',
            data: response.members
        })
    };
};

export const addUser = (user) => {
    // {
    //     "email": "work.thuanngo@gmail.com",
    //     "g_id": "62294f62a7311bddd6de4ff4",
    //     "w_id": "62294f62a7311bddd6de4ff3",
    //     "username": "work.thuanngo",
    //     "no_confirm_email": false
    // }

    return async (dispatch) => {
        const response = await userServices.addUser(user);
        
        dispatch({
            type: 'THEM_NGUOI_DUNG',
            data: user
        })
    };
};

export const removeUser = () => {

    return async (dispatch) => {
        const response = await userServices.removeUser();
        
        dispatch({
            type: 'XOA_NGUOI_DUNG',
            data: response
        })
    };
};

export const resetPassword = () => {

    return async (dispatch) => {
        const response = await userServices.resetPassword();
        
        dispatch({
            type: 'RESET_PASSWORD',
            data: response
        })
    };
};

export const setNewPassword = () => {

    return async (dispatch) => {
        const response = await userServices.setNewPassword();
        
        dispatch({
            type: 'LAY_LAI_PASSWORD',
            data: response
        })
    };
};

export const setPassword = () => {

    return async (dispatch) => {
        const response = await userServices.setPassword();
        
        dispatch({
            type: 'DOI_PASSWORD',
            data: response
        })
    };
};
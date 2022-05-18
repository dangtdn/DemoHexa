import groupServices from "../../services/groupServices";

// Action group
export const getGroupTree = () => {

    return async (dispatch) => {
        // dispatch({
        //     type: 'openLoading'
        // });

        setTimeout(async () => {
            const response = await groupServices.getGroupTree();
            console.log(response.result[0].childGroups)
            dispatch({
                type: 'LAY_DANH_SACH_GROUP',
                data: response.result[0].childGroups
            })
            
            // dispatch({
            //     type: 'closeLoading'
            // });
        }, 1000); 
    };
};

export const createToGroup = (value) => {
    const values = {
        name: value.nameGroup, 
        display_id: value.displayId
    }

    return async (dispatch) => {
        const response = await groupServices.createToGroup(values, 0);
        
        console.log('Thêm top group thành công');
        dispatch({
            type: "THEM_TOP_GROUP",
            data: values
        })
    };
}

export const addChildGroup = (value, id) => {
    const values = {
        name: value.nameGroup, 
        display_id: value.displayId
    }

    return async (dispatch) => {
        const response = await groupServices.addChildGroup(values, id);
        
        console.log('Thêm group thành công');
        dispatch({
            type: "THEM_GROUP",
            data: {
                values,
                id
            }
        })
    };
}

export const updateGroup = (value, id) => {

    const data = {
        "workspace_id": localStorage.getItem("workspace_id"),
        "id": id,
        "name": value.name,
        "display_id": value.display_id
    }

    return async (dispatch) => {
        const response = await groupServices.updateGroup(data);
        
        console.log('Cập nhật thành công', data);
        dispatch({
            type: "CAP_NHAT_TOP_GROUP",
            data: {
                value,
                id
            }
        })
    };
}

export const deleteGroup = (value, id) => {

    const data = {
        "workspace_id": localStorage.getItem("workspace_id"),
        "id": id,
        "name": value.name,
        "display_id": value.display_id
    }
    console.log(data)

    return async (dispatch) => {
        let isDelete = window.confirm(`Bạn có muốn xóa group ${value.name} không?`);
        if(isDelete){
            const response = await groupServices.deleteGroup(data);
            
            alert(`Đã xóa thành công group: ${value.name}`);
        }
        // dispatch({
        //     type: "XOA_GROUP",
        //     data: id
        // })
    };
}
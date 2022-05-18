
const stateDefault = {
    arrGroup: []
}

export const GroupReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_GROUP': {
            return {...state, arrGroup: action.data};
        }
        case 'THEM_TOP_GROUP': {
            let arrGroupUpd = [...state.arrGroup];
            
            arrGroupUpd.push(action.data);
            return {...state, arrGroup: arrGroupUpd};
        }
        case 'THEM_GROUP': {
            let arrGroupUpd = [...state.arrGroup];
            let index = arrGroupUpd.findIndex(item => item.id === action.data.id);
            
            arrGroupUpd[index].childGroups.push(action.data.values);
            return {...state, arrGroup: arrGroupUpd};
        }
        case 'CAP_NHAT_TOP_GROUP': {
            let arrGroupUpd = [...state.arrGroup];

            let index = arrGroupUpd.findIndex(item => item.id === action.data.id);
            
            arrGroupUpd[index] = {...action.data.value};
            
            return {...state,arrGroup:arrGroupUpd};
        }
        case "XOA_GROUP": {
            let arrGroupUpd = [...state.arrGroup];

            let isDelete = window.confirm(`Bạn có muốn xóa group ${action.data} không?`);
            if(isDelete){
                arrGroupUpd = arrGroupUpd.filter(item => item.id !== action.data);
                alert(`Đã xóa thành công group: ${action.data}`);
            }
            
            return {...state,arrGroup:arrGroupUpd};
        }
        default: return {...state};
    }
}
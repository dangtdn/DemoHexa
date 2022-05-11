
const stateDefault = {
    userInfo: {},
    arrUser: []
}

export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_THONG_TIN_NGUOI_DUNG': {
            return {...state, userInfo: action.data};
        }
        case 'LAY_DANH_SACH_GROUP_NGUOI_DUNG': {
            return {...state, arrUser: action.data};
        }
        case 'THEM_NGUOI_DUNG': {
            let arrUserUpd = [...state.arrUser];
            arrUserUpd.push(action.data);
            console.log(arrUserUpd)
            return {...state, arrUser: arrUserUpd};
        }
        default: return {...state};
    }
}
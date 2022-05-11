
const stateDefault = {
    arrProduct: []
}

export const WorkspaceReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_SAN_PHAM': {
            return {...state, arrProduct: action.data};
        }
        case 'THEM_SAN_PHAM': {
            let arrProductUpd = [...state.arrProduct];
            
            arrProductUpd.push(action.data);
            return {...state, arrProduct: arrProductUpd};
        }
        default: return {...state};
    }
}

const stateDefault = {
    datastores: [],
    tables: {}
}

export const DatastoresReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_DATASTORES': {
            console.log('reducer: ',action.data);
            return {...state, datastores: action.data};
        }
        case 'LAY_DANH_SACH_TABLE': {
            console.log('reducer: ',action.data)
            return {...state, tables: {...action.data}};
        }
        default: return {...state};
    }
}
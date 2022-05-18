
const stateDefault = {
    datastores: [],
    items: [],
    dataFieldsLayout: {},
    histories: {},
    tables: {}
}

export const DatastoresReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_DATASTORES': {
            // console.log('reducer: ',action.data);
            return {...state, datastores: action.data};
        }
        case 'LAY_DANH_SACH_ITEM_DATASTORES': {
            console.log('reducer items: ',action.data);
            return {...state, items: action.data};
        }
        case 'LAY_DANH_SACH_COMMENT': {
            // console.log('reducer: ',action.data);
            return {...state, histories: action.data};
        }
        case 'LAY_DANH_SACH_DATA_FIELDS_LAYOUT': {
            console.log('reducer: ',action.data);
            return {...state, dataFieldsLayout: {...action.data}};
        }
        case 'LAY_DANH_SACH_TABLE': {
            console.log('reducer: ',action.data)
            return {...state, tables: {...action.data}};
        }
        case 'LAY_DANH_SACH_TABLE_IMP_DATA': {
            console.log('reducer: ',action.data)
            return {...state, tables: {...action.data}};
        }
        default: return {...state};
    }
}
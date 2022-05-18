
const stateDefault = {
    datareport: [],
    tables: {}
}

export const DataReportReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_DATAREPORT': {
            return {...state, datareport: action.data};
        }
        case 'LAY_DANH_SACH_TABLE_REPORT': {
            console.log('reducer: ',action.data)
            return {...state, tables: {...action.data}};
        }
        default: return {...state};
    }
}
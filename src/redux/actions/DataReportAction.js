import dataReportServices from "../../services/dataReportServices";

export const getDataReport = (id) => {

    return async (dispatch) => {
        dispatch({
            type: 'openLoading'
        });

        setTimeout(async () => {
            const response = await dataReportServices.getDataReport(id);
            dispatch({
                type: "LAY_DANH_SACH_DATAREPORT",
                data: response.reports
            })
            
            dispatch({
                type: 'closeLoading'
            });
        }, 1000); 
    };
};

export const getDetailsDataReport = (id) => {

    return async (dispatch) => {
        const response = await dataReportServices.getDetailsDataReport(id);
        console.log('action detail report: ',response)
        dispatch({
            type: "LAY_DANH_SACH_TABLE_REPORT",
            data: response
        })
    };
};
import { httpRequestV1 } from "./HTTPRequestAPIV1";

const dataReportServices = {
  getDataReport(id) {
    const url = `/get_report_list?p_id=${id}`;
    return httpRequestV1.get(url);
  },
  getDataReportSettings(id) {
    const url = `/get_report_settings?rp_id=${id}`;
    return httpRequestV1.get(url);
  },
  getDetailsDataReport(id) {
    const page = 1;
    const per_page = 1000;
    const url = `/get_report?page=${page}&per_page=${per_page}&rp_id=${id}`;
    return httpRequestV1.get(url);
  },
};
export default dataReportServices;

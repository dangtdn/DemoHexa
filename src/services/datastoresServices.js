import { httpRequest } from "./HTTPRequestAPI";
import { httpRequestV1 } from "./HTTPRequestAPIV1";

const datastoresServices = {
  getGetApplicationsAndDatastores(workspace_id) {
    // const url = `/workspaces/${workspace_id}/applications`;
    const url = `/get_applications_list`;
    return httpRequestV1.get(url)
  },
  getDatastores(datastoreId) {
    const url = `/applications/${datastoreId}/datastores`;
    return httpRequest.get(url)
  },
  getDatastoresField(projectId, datastoreId) {
    const url = `/applications/${projectId}/datastores/${datastoreId}/fields`
    return httpRequest.get(url)
  },
  getPaginationWithSearch(data) {
    const url = `/get_paginate_items_with_search`;
    return httpRequestV1.post(url, data)
  }
};
export default datastoresServices;

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
  },
  getTempCollectionItem(collectionId) {
    const url = `/get_temp_collection_items?collection_id=${collectionId}`;
    return httpRequestV1.get(url)
  },
  getDatastoresFieldsLayout(datastore_id) {
    const url = `/get_datastore_fields_layout?datastore_id=${datastore_id}`;
    return httpRequestV1.get(url)
  },
  getItemPost(item_id, datastore_id) {
    const url = `/get_item_posts?item_id=${item_id}&datastore_id=${datastore_id}&from_item_index=0&to_item_index=20`;
    return httpRequestV1.get(url)
  },
  getNewItemId() {
    const url = `/get_new_item_id`;
    return httpRequestV1.get(url)
  },
  importData(data) {
    const url = `/services/dataimport`;
    return httpRequestV1.uploadFile(url, data)
  },
  createNewItemRecord(data) {
    const url = `/new_item_record`;
    return httpRequestV1.post(url, data)
  },
  postNewItemHistory(data) {
    const url = `/post_new_item_history`;
    return httpRequestV1.post(url, data)
  },
};
export default datastoresServices;

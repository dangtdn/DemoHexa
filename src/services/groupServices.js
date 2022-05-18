import { httpRequest } from "./HTTPRequestAPI";
import { httpRequestV1 } from "./HTTPRequestAPIV1";

const groupServices = {

    getGroup(params) {
        const url = "/groups";
        return httpRequest.get(url, params);
    },

    getGroupTree(params) {
        const url = "/grouptree";
        return httpRequest.get(url, params);
    },

    createToGroup(data, id) {
        const url = `/workspaces/${id}/groups`;
        return httpRequest.post(url, data);
    },

    getGroupByID(id) {
        const url = `/groups/${id}`;
        return httpRequest.get(url)
    },

    addChildGroup(data, id) {
        const url = `/groups/${id}`;
        return httpRequest.post(url, data);
    },

    deleteGroup(data) {
        const url = `/post_delete_group`;
        return httpRequestV1.post(url, data)
    },

    updateGroup(data) {
        const url = `/post_update_group`;
        return httpRequestV1.post(url, data)
    }
}

export default groupServices;  
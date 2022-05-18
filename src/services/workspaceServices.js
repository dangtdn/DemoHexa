import { httpRequest } from "./HTTPRequestAPI";
import { httpRequestV1 } from "./HTTPRequestAPIV1";

const workspaceServices = {
    getWorkspace(params) {
        const url = "/workspaces";
        return httpRequest.get(url, params);
    },

    getSelectWorkspace(id) {
        const url = `/workspaces/${id}/select`;
        return httpRequest.get(url);
    },

    selectWorkspace(id) {
        const url = `/workspaces/${id}/select`;
        return httpRequest.post(url);
    },
    
    getTemplate(params) {
        const url = "/get_pj_templates";
        return httpRequestV1.get(url, params);
    },
    
    createNewWorkspace(data) {
        const url = "/workspaces";
        return httpRequest.post(url, data);
    },
    
    createNewProject(data) {
        const url = "/post_create_project";
        return httpRequestV1.post(url, data);
    },
}

export default workspaceServices;  
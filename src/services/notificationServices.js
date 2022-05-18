import { httpRequestV1 } from "./HTTPRequestAPIV1";

const notificationServices = {
    getNotify(params) {
        const url = "/task_list?all=true&logs=83344991.90079114";
        return httpRequestV1.get(url, params);
    },
}

export default notificationServices;  
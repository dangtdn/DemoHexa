import notificationServices from "../../services/notificationServices";

export const getNotify = async () => {
    
    const response = await notificationServices.getNotify();
    return response;
};
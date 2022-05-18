import authServices from "../../services/authServices";

export const login = async (data) => {

    try {
        const response = await authServices.login(data);
        return response;
        
    } catch (error) {
        console.log(error)
    }
}
import { httpRequest } from "./HTTPRequestAPI";

const authServices = {
  
    login(data) {
      const url = "/login";
      return httpRequest.post(url, data);
    }

}

export default authServices;
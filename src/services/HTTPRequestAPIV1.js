import axiosClientV1 from "./axiosClientV1";

export class HTTPRequestAPIV1 {
    get = async (url, params) => {
  
      try {
        const response = await axiosClientV1.get(url, params);
        return response;
          
      } catch (error) {
          console.log(error)
      }
    }
    post = async (url, data) => {
  
      try {
        const response = await axiosClientV1.post(url, data);
        return response;
          
      } catch (error) {
          console.log(error)
      }
    }
    delete = async (url, data) => {
  
      try {
        const response = await axiosClientV1.delete(url, data);
        return response;
          
      } catch (error) {
          console.log(error)
      }
    }
    put = async (url, data) => {
  
      try {
        const response = await axiosClientV1.put(url, data);
        return response;
          
      } catch (error) {
          console.log(error)
      }
    }
    uploadFile = async (url, data) => {
  
      try {
        const response = await axiosClientV1.post(url, data,
          {headers: { "Content-Type": "multipart/form-data" }}  
        );
        return response;
          
      } catch (error) {
          console.log(error)
      }
    }
}

export const httpRequestV1 = new HTTPRequestAPIV1();

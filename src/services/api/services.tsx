import axios, { Method } from "axios";

const apiServicesConfig = {
  API_HOST: import.meta.env.VITE_API_HOST,
};

export interface PerformRequestProps<T = unknown> {
  method: Method;
  url: string;
  data?: T;
  apikey?: string;
  responseType?: string;
}

const performRequest = async ({
  method,
  url,
  data,
  apikey,
  responseType,
}: PerformRequestProps) => {
  try {
    let response = null;
    const headers: any = {};

    // Solo incluir Authorization si apikey está disponible
    if (apikey) {
      headers["Authorization"] = `Bearer ${apikey}`;
    }

    if (responseType) {
      response = await axios({
        method,
        url: `${apiServicesConfig.API_HOST}${url}`,
        data,
        responseType: "blob",
        headers,
      });
      return response;
    } else {
      response = await axios({
        method,
        url: `${apiServicesConfig.API_HOST}${url}`,
        data,
        headers,
      });
      return response.data;
    }
  } catch (error) {
    console.error("Error performing request:", error);
    throw error;
  }
};

export default performRequest;

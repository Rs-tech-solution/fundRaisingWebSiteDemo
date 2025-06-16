import axios from "axios";
import { toast } from "react-toastify";
import appConstant from "@/appConstant";

export default class ApiService {
  constructor() {
    if (typeof window !== "undefined") {
      this.authData = localStorage.getItem("authorizationData");
      this.token = this.authData ? JSON.parse(this.authData).token : null;
    } else {
      this.authData = null;
      this.token = null;
    }
    this.hostUrl = appConstant.hostUrl;
  }

  getHeaders() {
    return {
      Accept: "application/json",
      Authorization: this.token ? `Bearer ${this.token}` : undefined,
    };
  }

  postHeaders() {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: this.token ? `Bearer ${this.token}` : undefined,
    };
  }

  postFileHeaders() {
    return {
      Authorization: this.token ? `Bearer ${this.token}` : undefined,
    };
  }

  async successCallback(response) {
    if (!response || !response.data) {
      throw new Error("Empty response!");
    }

    if (response.status === 403 || response.status === 401) {
      throw new Error("Unauthorized!");
    }

    return response.data;
  }

  async errorCallback(error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 403 || status === 401) {
        toast.error("Unauthorized");
      } else if (data && typeof data === "object") {
        const errorMessages = this.deserializeError(data);
        if (errorMessages.length > 0) {
          toast.error(
            <ul>
              {errorMessages.map((errorMessage, index) => (
                <li key={index}>{errorMessage}</li>
              ))}
            </ul>
          );
        } else {
          toast.error("An error occurred!");
        }
      } else {
        toast.error("An error occurred!");
      }
    } else if (error.message) {
      toast.error(error.message);
    } else {
      toast.error("An error occurred!");
    }

    throw error;
  }

  deserializeError(errorData) {
    if (Array.isArray(errorData)) {
      return errorData.map((item) => item.message || "Unknown error occurred");
    } else if (typeof errorData === "object" && errorData !== null) {
      return Object.values(errorData).map(
        (message) => message || "Unknown error occurred"
      );
    } else {
      return [];
    }
  }

  async get(endPoint, data) {
    const url = `${this.hostUrl}${endPoint}`;
    try {
      const response = await axios.get(url, data, {
        headers: this.getHeaders(),
      });
      return this.successCallback(response);
    } catch (error) {
      return this.errorCallback(error);
    }
  }

  async post(endPoint, data) {
    const url = `${this.hostUrl}${endPoint}`;

    try {
      const response = await axios.post(url, data || {}, {
        headers: this.postHeaders(),
      });
      return this.successCallback(response);
    } catch (error) {
      return this.errorCallback(error);
    }
  }

  async postFile(endPoint, formData) {
    const url = `${this.hostUrl}${endPoint}`;

    try {
      const response = await axios.post(url, formData, {
        headers: this.postFileHeaders(),
      });
      return this.successCallback(response);
    } catch (error) {
      return this.errorCallback(error);
    }
  }

  async multiFetch(apiList) {
    try {
      const resultList = await Promise.all(apiList.map((api) => axios(api)));
      return resultList.map((result) => this.successCallback(result));
    } catch (error) {
      console.error(error);
      return this.errorCallback(error);
    }
  }
}

import axios from "axios";

export const httpClient = {
    get: async <T>(url: string): Promise<T> => {
        const { data } = await axios.get(url);
        return data;
    },
    post: async <T>(url: string, body: T): Promise<T> => {
        const { data } = await axios.post(url, body);
        return data;
    },
    put: async <T>(url: string, body: T): Promise<T> => {
        const { data } = await axios.put(url, body);
        return data;
    },
    delete: async (url: string): Promise<void> => {
        const { data } = await axios.delete(url);
        return data;
    },
};

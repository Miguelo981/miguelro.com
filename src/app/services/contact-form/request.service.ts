/* import axios, { AxiosResponse } from 'axios';

const host = process.env.USERS_HOST || 'http://localhost';

export async function makeGetRequest(path: string): Promise<AxiosResponse | any> {
    try {
        const { data } = await axios.get(host + path);
        return data;
    } catch (e) {
        return e.response.data
    }
}

export async function makePostRequest(path: string, payload?: any): Promise<AxiosResponse | any> {
    try {
        const { data } = await axios.post(host + path, payload);
        return data;
    } catch (e) {
        return e.response.data
    }
}

export async function makePutRequest(path: string, payload?: any): Promise<any | boolean> {
    try {
        const { data } = await axios.put(host + path, payload);
        return data;
    } catch (e) {
        return e.response.data
    }
}

export async function makePatchRequest(path: string, payload?: any): Promise<any | boolean> {
    try {
        const { data } = await axios.patch(host + path, payload);
        return data;
    } catch (e) {
        return e.response.data
    }
}

export async function makeDeleteRequest(path: string): Promise<any | boolean> {
    try {
        const { data } = await axios.delete(host + path);
        return data;
    } catch (e) {
        return e.response.data
    }
} */
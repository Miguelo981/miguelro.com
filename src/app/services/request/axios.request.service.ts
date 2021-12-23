import axios, { AxiosResponse } from 'axios';
import { apiHost, apiVersion } from 'src/config/api.config';

axios.defaults.headers.common['X-API-KEY'] = 'test';

export const host = apiHost + apiVersion;

export async function makeGetRequest(path: string): Promise<AxiosResponse | any> {
    try {
        const { data } = await axios.get(host + path);
        return data;
    } catch (e: any) {
        return e.response.data
    }
}

export async function makePostRequest(path: string, payload?: any): Promise<AxiosResponse | any> {
    try {
        const { data } = await axios.post(host + path, payload);
        return data;
    } catch (e: any) {
        return e.response.data
    }
}

export async function makePutRequest(path: string, payload?: any): Promise<any | boolean> {
    try {
        const { data } = await axios.put(host + path, payload);
        return data;
    } catch (e: any) {
        return e.response.data
    }
}

export async function makePatchRequest(path: string, payload?: any): Promise<any | boolean> {
    try {
        const { data } = await axios.patch(host + path, payload);
        return data;
    } catch (e: any) {
        return e.response.data
    }
}

export async function makeDeleteRequest(path: string): Promise<any | boolean> {
    try {
        const { data } = await axios.delete(host + path);
        return data;
    } catch (e: any) {
        return e.response.data
    }
}
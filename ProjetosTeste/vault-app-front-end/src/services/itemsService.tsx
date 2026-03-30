import axios from 'axios';
import { ApiContext } from '../context/ApiContext';
import { ItemModel } from '../models/ItemModel';


type FromIdToModel = (id: number) => Promise<ItemModel>;
type FromIdToVoid = (id: number) => Promise<void>;

type FromModelToVoid = (model: ItemModel) => Promise<void>;

const api = axios.create({
    baseURL: ApiContext.BASE_URL
});

api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export const getListItems: () => Promise<ItemModel[]> = async () => {
    return (await api.get<ItemModel[]>('/items')).data;
}

export const getItemById: FromIdToModel = async (id: number) => {
    return (await api.get<ItemModel>(`/items/${id}`)).data;
}

export const addItem: FromModelToVoid = async (model: ItemModel) => {
    return (await api.post<void>('/items', model)).data;
}

export const editItem: FromModelToVoid = async (model: ItemModel) => {
    return (await api.put<void>(`/items/${model.id}`, model)).data;
}

export const deleteItem: FromIdToVoid = async (id: number) => {
    return (await api.delete<void>(`/items/${id}`)).data;
}
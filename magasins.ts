import axios from 'axios';

const API_URL = '/api/magasins';

export const getMagasins = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getMagasinById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createMagasin = async (magasinData) => {
    const response = await axios.post(API_URL, magasinData);
    return response.data;
};

export const updateMagasin = async (id, magasinData) => {
    const response = await axios.put(`${API_URL}/${id}`, magasinData);
    return response.data;
};

export const deleteMagasin = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
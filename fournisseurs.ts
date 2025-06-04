import axios from 'axios';

const API_URL = 'http://localhost:8000/api/fournisseurs';

export const getFournisseurs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getFournisseurById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createFournisseur = async (fournisseurData) => {
    const response = await axios.post(API_URL, fournisseurData);
    return response.data;
};

export const updateFournisseur = async (id, fournisseurData) => {
    const response = await axios.put(`${API_URL}/${id}`, fournisseurData);
    return response.data;
};

export const deleteFournisseur = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
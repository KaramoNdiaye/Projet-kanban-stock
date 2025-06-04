import axios from 'axios';

const API_URL = 'http://localhost:8000/api/commandes';

export const fetchCommandes = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createCommande = async (commandeData) => {
    const response = await axios.post(API_URL, commandeData);
    return response.data;
};

export const updateCommande = async (id, commandeData) => {
    const response = await axios.put(`${API_URL}/${id}`, commandeData);
    return response.data;
};

export const deleteCommande = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
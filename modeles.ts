import axios from 'axios';

const API_URL = 'http://localhost:8000/api/modeles';

export const getModeles = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getModeleById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createModele = async (modeleData) => {
    const response = await axios.post(API_URL, modeleData);
    return response.data;
};

export const updateModele = async (id, modeleData) => {
    const response = await axios.put(`${API_URL}/${id}`, modeleData);
    return response.data;
};

export const deleteModele = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
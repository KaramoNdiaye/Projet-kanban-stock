import axios from 'axios';

const API_URL = '/api/rapports';

export const fetchRapports = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createRapport = async (rapportData) => {
    const response = await axios.post(API_URL, rapportData);
    return response.data;
};

export const updateRapport = async (id, rapportData) => {
    const response = await axios.put(`${API_URL}/${id}`, rapportData);
    return response.data;
};

export const deleteRapport = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
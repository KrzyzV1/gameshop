import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/games';

// Pobieranie listy gier
export const fetchGames = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

// Dodawanie nowej gry
export const addGame = async (game) => {
    const response = await axios.post(API_BASE_URL, [game]);
    return response.data;
};

// Usuwanie gry
export const deleteGame = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
};

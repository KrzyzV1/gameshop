import axios from "axios";

const API_BASE_URL = "/";

// Pobieranie listy gier
export const fetchGames = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

// Dodawanie nowej gry
export const addGame = async (game: any) => {
    const response = await axios.post(API_BASE_URL, [game]);
    return response.data;
};

// Usuwanie gry
export const deleteGame = async (id: any) => {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
};

// Logowanie
export const login = async (credentials: { username: string; password: string }) => {
  const response = await axios.post('/auth/login', credentials);
  if (response.status !== 200) {
    throw new Error("Nieprawidłowe dane logowania");
  }
  return {
    token: response.data.token, // Jeśli backend zwraca token
    role: response.data.role,   // Zakładamy, że backend zwraca rolę w odpowiedzi
  };
};
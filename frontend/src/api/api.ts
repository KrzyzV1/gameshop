import axios from "axios";

const API_BASE_URL = "/";

// Pobieranie listy gier
export const fetchGames = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

// Dodawanie nowej gry
export const addGame = async (game: { name: string; price: number; quantity: number; imgUrl: string }) => {
    const response = await axios.post("/games", game, {
        headers: {
            "Content-Type": "application/json",
        },
    });
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
    token: response.data.token,
    role: response.data.role,
  };
};
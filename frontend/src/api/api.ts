import axios from "axios";

const API_BASE_URL = "/games";

// Typ dla gry
interface Game {
  name: string;
  quantity: number;
  price: number;
  imgUrl: string;
}

// Pobieranie listy gier
export const fetchGames = async (): Promise<Game[]> => {
  const response = await axios.get(API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
  return response.data;
};

// Dodawanie nowej gry
export const addGame = async (game: Game): Promise<Game> => {
  const response = await axios.post(API_BASE_URL, game, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
  return response.data;
};

// Usuwanie gry
export const deleteGame = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
};

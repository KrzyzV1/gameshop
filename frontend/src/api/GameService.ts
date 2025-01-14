const API_BASE_URL = "/games";

const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  "Content-Type": "application/json",
});

export async function getGames() {
  const response = await fetch(API_BASE_URL, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }
  return response.json();
}

export async function addGame(game: { quantity: number; name: string; price: number; imgUrl: string }) {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(game),
  });

  if (!response.ok) {
    throw new Error("Failed to add game");
  }
  return response.json();
}

export async function updateGame(id: number, game: { quantity: number; name: string; price: number; imgUrl: string }) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(game),
  });

  if (!response.ok) {
    throw new Error("Failed to update game");
  }
  return response.json();
}

export async function deleteGame(id: number) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to delete game");
  }
  return response.json();
}

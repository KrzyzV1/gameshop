const API_BASE_URL = "http://localhost:8080/games";

export async function getGames() {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }
  return response.json();
}

export async function addGame(game: { name: string; rating: number }) {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([game]),
  });
  if (!response.ok) {
    throw new Error("Failed to add game");
  }
  return response.json();
}

export async function updateGame(id: number, game: { name: string; rating: number }) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
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
  });
  if (!response.ok) {
    throw new Error("Failed to delete game");
  }
  return response.json();
}

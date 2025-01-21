const API_BASE_URL = "/games";

export async function getGames() {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }
  return response.json(); // Oczekiwany wynik: [{ id, quantity, name, price, imgUrl }]
}

export async function addGame(game: { quantity: number; name: string; price: number; imgUrl: string }) {
  const response = await fetch("/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  });

  if (!response.ok) {
    const errorDetail = await response.json();
    console.error("Błąd serwera:", errorDetail);
    throw new Error(errorDetail.message || "Failed to add game");
  }

  return response.json();
}


export async function updateGame(id: number, game: { quantity: number; name: string; price: number; imgUrl: string }) {
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

import React, { useEffect, useState } from "react";
import { StoreItem } from "../components/StoreItem"
import { getGames } from "../api/GameService";

type Game = {
  id: number;
  name: string;
  price: number; // Cena w JSON powinna odpowiadać price
  imgUrl: string;
};

export function Store() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const data = await getGames();
        setGames(data);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    }

    fetchGames();
  }, []);

  return (
    <div className="d-flex flex-wrap gap-3">
      {games.map(game => (
        <StoreItem key={game.id} {...game} />
      ))}
    </div>
  );
}

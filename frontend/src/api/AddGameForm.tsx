import React, { useState } from "react";
import { addGame } from "../api/GameService";

export function AddGameForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState<number | "">("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      await addGame({ name, rating: Number(rating) });
      alert("Game added successfully!");
    } catch (error) {
      console.error("Failed to add game:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Game Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value === "" ? "" : Number(e.target.value))}
          required
        />
      </div>
      <button type="submit">Add Game</button>
    </form>
  );
}

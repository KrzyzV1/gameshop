import React, { useState } from "react";
import { addGame } from "./GameService";

export function AddGameForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">("");
  const [imgUrl, setImgUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    try {
      await addGame({
        name,
        quantity: Number(quantity),
        price: Number(price),
        imgUrl,
      });
      alert("Game added successfully!");
      setName("");
      setQuantity("");
      setPrice("");
      setImgUrl("");
    } catch (err) {
      console.error("Failed to add game:", err);
      setError("Failed to add game. Please try again.");
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
        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value === "" ? "" : Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Image URL</label>
        <input
          type="text"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          required
        />
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit">Add Game</button>
    </form>
  );
}

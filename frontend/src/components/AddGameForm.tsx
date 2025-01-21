import React, { useState } from "react";
import { addGame } from "../api/GameService";

type AddGameFormProps = {
  onGameAdded: () => void;
};

export function AddGameForm({ onGameAdded }: AddGameFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const game = { name, price, quantity, imgUrl };

    try {
      console.log("Przesyłane dane gry:", game);
      await addGame(game);
      alert("Gra została dodana!");
      setName("");
      setPrice(0);
      setQuantity(0);
      setImgUrl("");
      onGameAdded();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Błąd dodawania gry:", error.message);
        alert(`Wystąpił błąd: ${error.message}`);
      } else {
        console.error("Nieznany błąd:", error);
        alert("Wystąpił nieznany błąd.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <h1>Dodaj grę</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nazwa gry</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Cena</label>
        <input
          type="number"
          id="price"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">Ilość</label>
        <input
          type="number"
          id="quantity"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="imgUrl" className="form-label">Adres URL obrazka</label>
        <input
          type="text"
          id="imgUrl"
          className="form-control"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Dodaj grę</button>
    </form>
  );
}

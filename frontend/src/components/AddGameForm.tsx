import React, { useState } from "react";
import { addGame } from "../api/GameService";

type AddGameFormProps = {
  onGameAdded: () => void;
};

export function AddGameForm({ onGameAdded }: AddGameFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Funkcja weryfikująca, czy obrazek o podanym URL istnieje
  const validateImage = (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Weryfikacja obrazu przed wysłaniem formularza
    const imageExists = await validateImage(imgUrl);
    if (!imageExists) {
      setError("Nie znaleziono miniatury");
      return;
    }
    setError(null);

    const game = { 
      name, 
      price: Number(price), 
      quantity: Number(quantity), 
      imgUrl, 
      rating: Number(rating), 
      description, 
      tags 
    };

    try {
      console.log("Przesyłane dane gry:", game);
      await addGame(game);
      alert("Gra została dodana!");
      setName("");
      setPrice("");
      setQuantity("");
      setImgUrl("");
      setRating("");
      setDescription("");
      setTags("");
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
      {error && <p style={{ color: "red" }}>{error}</p>}
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
          onChange={(e) => setPrice(e.target.value)}
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
          onChange={(e) => setQuantity(e.target.value)}
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
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">Ocena gry</label>
        <input
          type="number"
          id="rating"
          className="form-control"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="0"
          max="10"
          step="0.1"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Opis gry</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tagi (oddzielone przecinkami)</label>
        <input
          type="text"
          id="tags"
          className="form-control"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Dodaj grę</button>
    </form>
  );
}

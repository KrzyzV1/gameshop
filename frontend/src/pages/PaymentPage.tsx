import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

type StoreItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function PaymentPage() {
  const { cartItems, clearCart } = useShoppingCart(); // Dodano clearCart
  const navigate = useNavigate();
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);

  useEffect(() => {
    async function fetchStoreItems() {
      try {
        const response = await fetch("/games"); // Pobierz dane produktów
        const data = await response.json();
        setStoreItems(data);
      } catch (error) {
        console.error("Failed to fetch store items:", error);
      }
    }

    fetchStoreItems();
  }, []);

  const handlePayment = () => {
    alert("Płatność zrealizowana! Dziękujemy za zakupy.");
    clearCart(); // Opróżnij koszyk
    navigate("/"); // Powrót na stronę główną
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5">
        <h1>Twój koszyk jest pusty!</h1>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Wróć na stronę główną
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>Płatność</h1>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Ilość</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => {
            const product = storeItems.find((item) => item.id === cartItem.id); // Znajdź pełne dane produktu
            if (!product) return null; // Pomijamy, jeśli produktu nie znaleziono
            return (
              <tr key={cartItem.id}>
                <td>{product.name}</td>
                <td>{cartItem.quantity}</td>
                <td>{formatCurrency(product.price * cartItem.quantity)}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Łącznie:</td>
            <td>
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const product = storeItems.find(
                    (item) => item.id === cartItem.id
                  );
                  return total + (product?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </td>
          </tr>
        </tfoot>
      </table>
      <button className="btn btn-success mt-3" onClick={handlePayment}>
        Zapłać
      </button>
    </div>
  );
}

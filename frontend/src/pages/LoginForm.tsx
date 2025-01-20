import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import kontekstu
import { login as apiLogin } from "../api/api"; // Import funkcji API

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login: setLoggedIn } = useAuth(); // Funkcja do ustawienia logowania w AuthContext
  
  const loginUser = async (username: string, password: string) => {
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setLoggedIn(data.role); // Ustawienie stanu logowania za pomocą funkcji z kontekstu
        alert("Zalogowano pomyślnie");
        navigate("/"); // Przejdź na stronę główną lub dowolną inną
      } else {
        alert("Nieprawidłowe dane logowania");
      }
    } catch (error) {
      console.error("Błąd logowania:", error);
      alert("Wystąpił błąd podczas logowania.");
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Zapobiega przeładowaniu strony
    await loginUser(username, password); // Wywołanie funkcji logowania
  };


  return (
    <div className="container mt-5">
      <h1>Logowanie</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Nazwa użytkownika
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Hasło
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Zaloguj się
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import kontekstu
import { login } from "../api/api";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login: setLoggedIn } = useAuth(); // Funkcja do ustawienia logowania

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login({ username, password });
      setMessage("Zalogowano pomyślnie");
      setLoggedIn(); // Ustawienie stanu globalnego
      navigate("/"); // Przekierowanie
    } catch (error) {
      setMessage("Wystąpił błąd podczas logowania");
    }
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

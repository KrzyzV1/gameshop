import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import PaymentPage from "./pages/PaymentPage";
import { LoginForm } from "./pages/LoginForm";
import { AddGameForm } from "./components/AddGameForm";
import { useAuth } from "./context/AuthContext";
import { useState, useEffect } from "react";
import { getGames } from "./api/GameService";

function App() {
  const { isLoggedIn, userRole } = useAuth();
  const [games, setGames] = useState([]);

  // Funkcja odświeżająca listę gier
  const fetchGames = async () => {
    try {
      const data = await getGames();
      setGames(data);
    } catch (error) {
      console.error("Failed to fetch games:", error);
    }
  };


  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          {isLoggedIn && <Route path="/payment" element={<PaymentPage />} />}
          <Route
            path="/add-game"
            element={
              userRole === "admin" ? (
                <AddGameForm onGameAdded={fetchGames} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
